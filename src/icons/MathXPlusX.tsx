import * as React from "react";
import type { SVGProps } from "react";
const SvgMathXPlusX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-x-plus-x_svg__a)"
    >
      <path d="m2 9 6 6M2 15l6-6M16 9l6 6M16 15l6-6M10 12h4M12 10v4" />
    </g>
    <defs>
      <clipPath id="math-x-plus-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathXPlusX;
