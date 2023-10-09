"use client"; // Error components must be Client Components

import { ApolloError } from "@apollo/client";
import { useEffect } from "react";
import { useIntl } from "react-intl";

interface Props {
  error: Error | ApolloError | undefined;
  reset?: () => void;
}

export default function ErrorComp({ error, reset }: Props) {
  const { formatMessage } = useIntl();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>{`${formatMessage({ id: "error" })} ${error?.message}`}</h2>
      {!!reset && (
        <button
          type="button"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          {formatMessage({ id: "errors.basic.retry" })}
        </button>
      )}
    </div>
  );
}
