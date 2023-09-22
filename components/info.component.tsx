"use client";
import { useSession } from "next-auth/react";

export const Info = () => {
  const { data: session } = useSession();

  return <div>info</div>;
};
