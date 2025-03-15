import * as React from "react";
import type { SVGProps } from "react";
const SvgPizzaOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pizza-off_svg__a)"
    >
      <path d="M10.313 6.277 12 3l5.34 10.376m2.477 6.463A19.1 19.1 0 0 1 12 21.5c-3.04 0-5.952-.714-8.5-1.983L8.934 8.958" />
      <path d="M5.379 15.867a14.94 14.94 0 0 0 6.815 1.634c1.56 0 3.105-.24 4.582-.713M11 13.998v-.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="pizza-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPizzaOff;
