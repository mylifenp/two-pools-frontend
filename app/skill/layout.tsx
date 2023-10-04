import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function SkillLayout({ children }: Props) {
  return <>{children}</>;
}
