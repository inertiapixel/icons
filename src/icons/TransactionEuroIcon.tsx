import * as React from "react";
import type { SVGProps } from "react";
const SvgTransactionEuroIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#transaction-euro-icon_svg__a)"
    >
      <path d="M21 12.8c-.523-.502-1.172-.8-1.875-.8C17.398 12 16 13.791 16 16s1.398 4 3.125 4c.703 0 1.352-.298 1.874-.8M15 16h4M3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1" />
    </g>
    <defs>
      <clipPath id="transaction-euro-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransactionEuroIcon;
