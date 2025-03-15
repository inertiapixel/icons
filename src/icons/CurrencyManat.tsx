import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyManat = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-manat_svg__a)"
    >
      <path d="M7 19v-7a5 5 0 1 1 10 0v7M12 5v14" />
    </g>
    <defs>
      <clipPath id="currency-manat_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyManat;
