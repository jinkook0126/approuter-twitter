import { ReactNode } from "react";

export default async function HomeLayouts({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      홈 레이아웃
      <div>{children}</div>
    </div>
  );
}
