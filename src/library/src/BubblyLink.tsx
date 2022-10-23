import { FC, MouseEvent, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { BubblyBubbles } from "./BubblyBubbles";

export type BubblyLinkProps = {
  to: string;
  children: ReactNode;
  colorStart?: string;
  colorEnd?: string;
  duration?: number;
};

export const BubblyLink: FC<BubblyLinkProps> = ({
  to,
  children,
  colorStart = "#8f44fd",
  colorEnd = "#ffffff",
  duration = 1250,
}) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    e?.preventDefault();

    if (
      !document.getElementById("react-bubbly-transitions__bubbles") &&
      window.location.pathname !== to
    ) {
      // change the url in address bar
      window.history.pushState("", "", to);

      // get access to wave container
      const container = createRoot(
        document.getElementById("react-bubbly-transitions__container")!
      );

      // show the waves
      container.render(
        <BubblyBubbles
          colorStart={colorStart}
          colorEnd={colorEnd}
          duration={duration}
        />
      );

      // do the route change
      setTimeout(() => navigate(to), duration / 2); // half total animation

      // hide the waves
      setTimeout(() => container.unmount(), duration); // total animation
    }
  };

  return (
    <button
      type="button"
      className={`react-bubbly-transitions__bubbly-link ${
        window.location.pathname === to ? "active" : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
