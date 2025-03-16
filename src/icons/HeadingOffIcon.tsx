import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadingOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heading-off-icon_svg__a)"
    >
      <path d="M7 12h5m4 0h1M7 7v12M17 5v8m0 4v2M15 19h4M15 5h4M5 19h4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="heading-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeadingOffIcon;
