import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowAutofitRight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-autofit-right_svg__a)"
    >
      <path d="M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8M4 18h17M18 15l3 3-3 3" />
    </g>
    <defs>
      <clipPath id="arrow-autofit-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowAutofitRight;
