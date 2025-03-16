import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#receipt-off-icon_svg__a)"
    >
      <path d="M5 5v16l3-2 2 2 2-2 2 2 2-2 3 2v-1.99M7 3h10a2 2 0 0 1 2 2v10M11 7h4M9 11h2M13 15h2M15 11v.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="receipt-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReceiptOffIcon;
