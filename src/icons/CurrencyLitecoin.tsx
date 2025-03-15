import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyLitecoin = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-litecoin_svg__a)"
    >
      <path d="M17.999 19H9.805a2 2 0 0 1-1.98-2.283L9.499 5M14 9l-9 4" />
    </g>
    <defs>
      <clipPath id="currency-litecoin_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyLitecoin;
