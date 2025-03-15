import * as React from "react";
import type { SVGProps } from "react";
const SvgHeading = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heading_svg__a)"
    >
      <path d="M7 12h10M7 5v14M17 5v14M15 19h4M15 5h4M5 19h4M5 5h4" />
    </g>
    <defs>
      <clipPath id="heading_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeading;
