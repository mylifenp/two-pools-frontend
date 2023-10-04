import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function UserLayout({ children }: Props) {
  return <>{children}</>;
}
