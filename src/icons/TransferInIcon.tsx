import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferInIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#transfer-in-icon_svg__a)"
    >
      <path d="M4 18v3h16V7l-8-4-8 4v3M4 14h9" />
      <path d="m10 11 3 3-3 3" />
    </g>
    <defs>
      <clipPath id="transfer-in-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransferInIcon;
