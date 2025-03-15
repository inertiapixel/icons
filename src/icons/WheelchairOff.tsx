import * as React from "react";
import type { SVGProps } from "react";
const SvgWheelchairOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wheelchair-off_svg__a)"
    >
      <path d="M3 16a5 5 0 1 0 10 0 5 5 0 0 0-10 0M17.584 17.59a2 2 0 0 0 2.833 2.824M14.002 14h-1.4M6 6v5M6 8h2m4 0h5M15 8v3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="wheelchair-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWheelchairOff;
