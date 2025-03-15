import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRubel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-rubel_svg__a)"
    >
      <path d="M8 19V5h6a3 3 0 0 1 0 6H6M14 15H6" />
    </g>
    <defs>
      <clipPath id="currency-rubel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyRubel;
