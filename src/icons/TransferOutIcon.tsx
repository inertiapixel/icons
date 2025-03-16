import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferOutIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#transfer-out-icon_svg__a)"
    >
      <path d="M4 19v2h16V7l-8-4-8 4v2M13 14H4" />
      <path d="m7 11-3 3 3 3" />
    </g>
    <defs>
      <clipPath id="transfer-out-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransferOutIcon;
