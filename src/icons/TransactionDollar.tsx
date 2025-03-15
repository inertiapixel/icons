import * as React from "react";
import type { SVGProps } from "react";
const SvgTransactionDollar = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#transaction-dollar_svg__a)"
    >
      <path d="M20.8 13.001a2 2 0 0 0-1.8-1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1M18 11v10M3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1" />
    </g>
    <defs>
      <clipPath id="transaction-dollar_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransactionDollar;
