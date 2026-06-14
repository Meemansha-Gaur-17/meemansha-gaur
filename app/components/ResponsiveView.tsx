import type { ReactNode } from "react";

interface ResponsiveViewProps {
  mobile: ReactNode;
  desktop: ReactNode;
}

export default function ResponsiveView({ mobile, desktop }: ResponsiveViewProps) {
  return (
    <>
      <div className="lg:hidden">{mobile}</div>
      <div className="hidden lg:block">{desktop}</div>
    </>
  );
}
