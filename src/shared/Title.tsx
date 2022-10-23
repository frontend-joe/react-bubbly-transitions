import { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => (
  <h2 className="animate-in" style={{ animationDelay: "600ms" }}>
    {children}
  </h2>
);
