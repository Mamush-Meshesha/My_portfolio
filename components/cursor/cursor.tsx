"use client";
import { FC } from "react";
import AnimatedCursor from "react-animated-cursor";

interface CursorProps {}

export const Cursor: FC<CursorProps> = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "1px solid #fff",
        }}
        clickables={["a", "button", "select", "input", ".link"]}
      />
    </div>
  );
};
