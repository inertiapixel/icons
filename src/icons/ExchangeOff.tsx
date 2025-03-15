import * as React from "react";
import type { SVGProps } from "react";
const SvgExchangeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#exchange-off_svg__a)"
    >
      <path d="M3 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M19 8v5c0 .594-.104 1.164-.294 1.692m-1.692 2.298A4.98 4.98 0 0 1 14 18h-3l3-3M14 21l-3-3M5 16v-5c0-1.632.782-3.082 1.992-4M10 6h3l-3-3M11.5 7.499 12.999 6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="exchange-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgExchangeOff;
