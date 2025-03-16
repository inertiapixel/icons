import * as React from "react";
import type { SVGProps } from "react";
const SvgCandle1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#candle-1-icon_svg__a)"
    >
      <path d="M9 21h6v-9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zM12 3l1.464 1.638a2 2 0 1 1-3.015.099z" />
    </g>
    <defs>
      <clipPath id="candle-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCandle1Icon;
