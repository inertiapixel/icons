import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationUp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#navigation-up_svg__a)"
    >
      <path d="M16.54 12.843 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l7.266-2.463M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="navigation-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigationUp;
