import * as React from "react";
import type { SVGProps } from "react";
const SvgHaze = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#haze_svg__a)"
    >
      <path d="M3 12h1M12 3v1M20 12h1M5.602 5.602l.7.7M18.4 5.602l-.7.7M8 12a4 4 0 1 1 8 0M3 16h18M3 20h18" />
    </g>
    <defs>
      <clipPath id="haze_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHaze;
