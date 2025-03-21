import * as React from "react";
import type { SVGProps } from "react";
const SvgWalletOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wallet-off-icon_svg__a)"
    >
      <path d="M17 8V5a1 1 0 0 0-1-1H8m-3.412.584A2 2 0 0 0 6 8h2m4 0h6a1 1 0 0 1 1 1v3" />
      <path d="M19 19a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
      <path d="M16 12h4v4m-4 0a2 2 0 0 1-2-2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="wallet-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWalletOffIcon;
