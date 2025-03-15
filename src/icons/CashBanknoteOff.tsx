import * as React from "react";
import type { SVGProps } from "react";
const SvgCashBanknoteOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cash-banknote-off_svg__a)"
    >
      <path d="M9.88 9.876a3 3 0 1 0 4.243 4.243m.58-3.425A3 3 0 0 0 13.29 9.29" />
      <path d="M10 6h9a2 2 0 0 1 2 2v8c0 .294-.064.574-.178.825M18 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1M18 12h.01M6 12h.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="cash-banknote-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCashBanknoteOff;
