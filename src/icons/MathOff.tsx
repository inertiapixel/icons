import * as React from "react";
import type { SVGProps } from "react";
const SvgMathOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-off_svg__a)"
    >
      <path d="m14 19 2.5-2.5M18.5 14.5 20 13M3 3l18 18M19.002 5h-7l-.647 2.262M10.448 10.43 8 18.999l-3-6H3" />
    </g>
    <defs>
      <clipPath id="math-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathOff;
