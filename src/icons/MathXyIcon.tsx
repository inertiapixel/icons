import * as React from "react";
import type { SVGProps } from "react";
const SvgMathXyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-xy-icon_svg__a)"
    >
      <path d="m14 9 3 5.063M4 9l6 6M4 15l6-6M20 9l-4.8 9" />
    </g>
    <defs>
      <clipPath id="math-xy-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathXyIcon;
