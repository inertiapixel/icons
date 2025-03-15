import * as React from "react";
import type { SVGProps } from "react";
const SvgBreadOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bread-off_svg__a)"
    >
      <path d="m8 4 10 .005V4a3 3 0 0 1 2 5.235V16m-.59 3.418c-.36.36-.86.582-1.41.582H6a2 2 0 0 1-2-2V9.236a3 3 0 0 1 .418-4.785M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bread-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBreadOff;
