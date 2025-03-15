import * as React from "react";
import type { SVGProps } from "react";
const SvgMathYPlusY = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-y-plus-y_svg__a)"
    >
      <path d="m2 9 3 5.063M8 9l-4.8 9M16 9l3 5.063M22 9l-4.8 9M10 12h4M12 10v4" />
    </g>
    <defs>
      <clipPath id="math-y-plus-y_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathYPlusY;
