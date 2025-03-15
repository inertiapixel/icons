import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wallet_svg__a)"
    >
      <path d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h12a1 1 0 0 1 1 1v3M4 6v12a2 2 0 0 0 2 2h12a1 1 0 0 0 1-1v-3" />
      <path d="M20 12v4h-4a2 2 0 0 1 0-4z" />
    </g>
    <defs>
      <clipPath id="wallet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWallet;
