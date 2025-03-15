import * as React from "react";
import type { SVGProps } from "react";
const SvgWindOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wind-off_svg__a)"
    >
      <path d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0-2.34-3.24M3 12h9M16 12h2.5a2.499 2.499 0 0 1 1.801 4.282M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="wind-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWindOff;
