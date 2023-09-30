import { ReactNode } from "react";

export default async function InfoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      {children}
      <div>{JSON.stringify({ a: "abc" })}</div>
    </div>
  );
}
