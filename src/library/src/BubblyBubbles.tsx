import { FC } from "react";
import "./styles.css";

type Props = {
  colorStart: string;
  colorEnd: string;
  duration: number;
};

export const BubblyBubbles: FC<Props> = ({
  colorStart,
  colorEnd,
  duration,
}) => {
  return (
    <div id="react-bubbly-transitions__bubbles">
      <div
        style={{ animationDuration: `${duration}ms`, background: colorStart }}
        className="react-bubbly-transitions__first"
      />
      <div
        style={{ animationDuration: `${duration}ms`, background: colorEnd }}
        className="react-bubbly-transitions__second"
      />
    </div>
  );
};
