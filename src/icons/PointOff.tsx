import * as React from "react";
import type { SVGProps } from "react";
const SvgPointOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#point-off_svg__a)"
    >
      <path d="M9.152 9.194a4 4 0 0 0 5.697 5.617M16.002 12a4 4 0 0 0-4-4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="point-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPointOff;
