import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function InfoLayout({ children }: Props) {
  return <>{children}</>;
}
