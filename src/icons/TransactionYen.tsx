import * as React from "react";
import type { SVGProps } from "react";
const SvgTransactionYen = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#transaction-yen_svg__a)"
    >
      <path d="M15 16h6M15 12l3 4.5M21 12l-3 4.5V21M15 19h6M3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1" />
    </g>
    <defs>
      <clipPath id="transaction-yen_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransactionYen;
