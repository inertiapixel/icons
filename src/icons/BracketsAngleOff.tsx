import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsAngleOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brackets-angle-off_svg__a)"
    >
      <path d="M8 4h.01M6.453 6.473 3 11.999l5 8M16 4l5 8-1.917 3.067M17.535 17.543 16 19.999M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="brackets-angle-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBracketsAngleOff;
