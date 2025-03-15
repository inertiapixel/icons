import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowElbowRight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-elbow-right_svg__a)"
    >
      <path d="M21 14V8h-6" />
      <path d="m21 8-9 9-9-9" />
    </g>
    <defs>
      <clipPath id="arrow-elbow-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowElbowRight;
