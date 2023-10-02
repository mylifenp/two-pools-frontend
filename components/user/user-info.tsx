"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { FC, useEffect } from "react";
import { LoginButton, LogoutButton } from "@components/buttons.components";

interface Props {}

const UserInfo: FC<Props> = () => {
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
      <div className="dropdown dropdown-end opacity-20">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              src="/static/images/profile.jpg"
              alt="profile_image"
              width={80}
              height={80}
            />
          </div>
        </label>
      </div>
    );
  }

  if (status === "unauthenticated") {
    content = (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              src="/static/images/profile.jpg"
              alt="profile_image"
              width={80}
              height={80}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <LoginButton />
          </li>
        </ul>
      </div>
    );
  }

  if (status === "authenticated") {
    content = (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              src="/static/images/profile.jpg"
              alt="profile_image"
              width={80}
              height={80}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link className="justify-between" href="/user">
              Profile
            </Link>
            <span className="badge">New</span>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    );
  }

  return <>{content}</>;
};

export default UserInfo;
