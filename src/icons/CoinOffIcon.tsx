import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#coin-off-icon_svg__a)"
    >
      <path d="M14.8 9.001a2 2 0 0 0-1.8-1h-1M9.18 9.172a2 2 0 0 0 1.82 2.83h1m2.824 2.821A2 2 0 0 1 13 16.001h-2a2 2 0 0 1-1.8-1" />
      <path d="M20.044 16.046A9 9 0 0 0 7.957 3.959M5.639 5.636a9 9 0 1 0 12.724 12.73M12 6v2m0 8v2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="coin-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoinOffIcon;
