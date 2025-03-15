import * as React from "react";
import type { SVGProps } from "react";
const SvgPill = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pill_svg__a)"
    >
      <path d="m4.5 12.5 8-8a4.95 4.95 0 0 1 7 7l-8 8a4.95 4.95 0 1 1-7-7M8.5 8.5l7 7" />
    </g>
    <defs>
      <clipPath id="pill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPill;
