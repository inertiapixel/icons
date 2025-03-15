import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowAutofitLeft = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-autofit-left_svg__a)"
    >
      <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8M20 18H3M6 15l-3 3 3 3" />
    </g>
    <defs>
      <clipPath id="arrow-autofit-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowAutofitLeft;
