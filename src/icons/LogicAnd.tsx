import * as React from "react";
import type { SVGProps } from "react";
const SvgLogicAnd = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#logic-and_svg__a)"
    >
      <path d="M22 12h-5M2 9h5M2 15h5M9 5c6 0 8 3.5 8 7s-2 7-8 7H7V5z" />
    </g>
    <defs>
      <clipPath id="logic-and_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogicAnd;
