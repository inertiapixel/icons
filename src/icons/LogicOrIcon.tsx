import * as React from "react";
import type { SVGProps } from "react";
const SvgLogicOrIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#logic-or-icon_svg__a)"
    >
      <path d="M22 12h-6M2 9h7M2 15h7M8 5c10.667 2.1 10.667 12.6 0 14q2.709-7 0-14" />
    </g>
    <defs>
      <clipPath id="logic-or-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogicOrIcon;
