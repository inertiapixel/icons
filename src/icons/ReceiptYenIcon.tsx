import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptYenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#receipt-yen-icon_svg__a)"
    >
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2zM9 11h6M9 14h6M9 7l3 4.5" />
      <path d="m15 7-3 4.5V16" />
    </g>
    <defs>
      <clipPath id="receipt-yen-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReceiptYenIcon;
