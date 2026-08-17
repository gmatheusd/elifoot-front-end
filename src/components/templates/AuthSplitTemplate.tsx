import type { ReactNode } from "react";

type AuthSplitTemplateProps = {
  sidePanel: ReactNode;
  children: ReactNode;
};

export function AuthSplitTemplate({ sidePanel, children }: AuthSplitTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col font-sans md:flex-row">
      {sidePanel}

      <div className="flex flex-1 items-center justify-center bg-white px-6 py-16">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
