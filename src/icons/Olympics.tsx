import * as React from "react";
import type { SVGProps } from "react";
const SvgOlympics = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#olympics_svg__a)"
    >
      <path d="M3 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0M15 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M6 15a3 3 0 1 0 6 0 3 3 0 0 0-6 0M12 15a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    </g>
    <defs>
      <clipPath id="olympics_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOlympics;
