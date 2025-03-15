import * as React from "react";
import type { SVGProps } from "react";
const SvgWheelchair = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wheelchair_svg__a)"
    >
      <path d="M3 16a5 5 0 1 0 10 0 5 5 0 0 0-10 0M17 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M19.002 17a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6M6 8h11M15 8v6" />
    </g>
    <defs>
      <clipPath id="wheelchair_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWheelchair;
