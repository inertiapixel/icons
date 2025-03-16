import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowElbowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-elbow-left-icon_svg__a)"
    >
      <path d="M3 14V8h6" />
      <path d="m3 8 9 9 9-9" />
    </g>
    <defs>
      <clipPath id="arrow-elbow-left-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowElbowLeftIcon;
