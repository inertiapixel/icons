import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationMinus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#navigation-minus_svg__a)"
    >
      <path d="M17.5 15Q15.652 10.995 12 3L4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l7.266-2.463M16 19h6" />
    </g>
    <defs>
      <clipPath id="navigation-minus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigationMinus;
