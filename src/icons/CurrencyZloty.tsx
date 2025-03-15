import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyZloty = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-zloty_svg__a)"
    >
      <path d="M12 18H5l7-7H5M17 18V5M14 14.5l6-3.5" />
    </g>
    <defs>
      <clipPath id="currency-zloty_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyZloty;
