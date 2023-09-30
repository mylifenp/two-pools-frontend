"use client";

import { signIn, useSession } from "next-auth/react";
import { LoginButton, LogoutButton } from "./buttons.components";
import { useEffect } from "react";

export const User = () => {
  const { data: session, status } = useSession();
  let content;

  useEffect(() => {
    if (
      !!session &&
      "error" in session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signIn();
    }
  }, [session]);

  if (status === "loading") {
    content = (
      <div className="mb-6 text-p2blue-700 text-2xl">
        Loading authentication... (checking local state or redirecting)
      </div>
    );
  }

  if (status === "unauthenticated") {
    content = (
      <div>
        <div className="mb-6 text-p2blue-700 text-2xl">Not authenticated.</div>
        <LoginButton />
      </div>
    );
  }

  if (status === "authenticated") {
    content = (
      <div>
        <div className="mb-2 text-p2blue-700 text-2xl">Authenticated</div>
        <div className="mb-6 text-p2blue-700 text-md">
          <div>{session.user.email}</div>
          <div>{session.user.name}</div>
          <div>{JSON.stringify(session)}</div>
          {/* <div>{session.id_token}</div>
          <div>{session.access_token}</div> */}
        </div>
        <LogoutButton />
      </div>
    );
  }

  return (
    <div>
      <div className="text-xl pb-8 italic">Your current status is:</div>
      {content}
    </div>
  );
};
