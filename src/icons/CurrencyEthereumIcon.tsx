import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyEthereumIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-ethereum-icon_svg__a)"
    >
      <path d="m6 12 6-9 6 9-6 9z" />
      <path d="m6 12 6-3 6 3-6 2z" />
    </g>
    <defs>
      <clipPath id="currency-ethereum-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyEthereumIcon;
