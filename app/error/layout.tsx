import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function ErrorLayout({ children }: Props) {
  return <>{children}</>;
}
