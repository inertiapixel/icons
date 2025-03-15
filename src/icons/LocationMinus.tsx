import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationMinus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#location-minus_svg__a)"
    >
      <path d="m12 18-2-4-7-3.5a.55.55 0 0 1 0-1L21 3l-4.346 12.038M16 19h6" />
    </g>
    <defs>
      <clipPath id="location-minus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocationMinus;
