import * as React from "react";
import type { SVGProps } from "react";
const SvgClockPlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-plus_svg__a)"
    >
      <path d="M20.984 12.535a9 9 0 1 0-8.468 8.45M16 19h6M19 16v6" />
      <path d="M12 7v5l3 3" />
    </g>
    <defs>
      <clipPath id="clock-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockPlus;
