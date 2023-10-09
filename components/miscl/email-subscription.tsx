"use client";
import {
  useAddEmailSubscriptionMutation,
  useIsEmailSubscribedLazyQuery,
} from "@generated/types";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useState,
  useEffect,
} from "react";
import { useIntl } from "react-intl";
import Spinner from "./spinner";

interface Props {}
interface ChangeEmailSubscriptionProps {
  session: Session | null;
}

export const EmailSubscription: FC<Props> = () => {
  const { formatMessage } = useIntl();
  const { data: session, status } = useSession();
  const [isEmailSubscribed, { data: sub_data, loading }] =
    useIsEmailSubscribedLazyQuery();

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user.email) {
        isEmailSubscribed({
          variables: { input: { email: session.user.email } },
        });
      }
    }
  }, [status, session, isEmailSubscribed]);

  if (loading) return null;

  if (sub_data?.isEmailSubscribed.status) {
    return (
      <div>
        <p>{formatMessage({ id: "newsletter.subscribed" })}</p>
      </div>
    );
  }
  return <ChangeEmailSubscription session={session} />;
};

const ChangeEmailSubscription: FC<ChangeEmailSubscriptionProps> = ({
  session,
}) => {
  const { formatMessage } = useIntl();
  const [newEmail, setNewEmail] = useState<string>("");
  const [subscribeFn, { data, loading, error }] =
    useAddEmailSubscriptionMutation();

  useEffect(() => {
    const {
      user: { email },
    } = session || { user: { email: "" } };
    setNewEmail(!email ? "" : email);
  }, [session]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setNewEmail(value);
  };

  const handleCreateSubscription: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    if (!newEmail) return;
    subscribeFn({
      variables: { input: { email: newEmail } },
      onCompleted: () => setNewEmail(""),
    });
  };

  if (loading) {
    return <Spinner text={formatMessage({ id: "newsletter.subscribing" })} />;
  }

  if (error) return null;

  if (data?.addEmailSubscription.status) {
    return null;
  }

  return (
    <>
      <input
        type="text"
        value={newEmail}
        onChange={handleChange}
        placeholder={formatMessage({ id: "required.email" })}
        className="input input-bordered w-full pr-16"
      />
      <button
        type="button"
        onClick={handleCreateSubscription}
        className="btn btn-primary absolute top-0 right-0 rounded-l-none"
      >
        {formatMessage({ id: "newsletter.subscribe" })}
      </button>
    </>
  );
};
