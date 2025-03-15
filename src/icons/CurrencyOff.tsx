import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-off_svg__a)"
    >
      <path d="M18.53 14.523A7 7 0 0 0 9.47 5.47M7.048 7.052a7 7 0 1 0 9.903 9.896M4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="currency-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyOff;
