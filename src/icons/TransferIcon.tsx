import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#transfer-icon_svg__a)"
    >
      <path d="M20 10H4l5.5-6M4 14h16l-5.5 6" />
    </g>
    <defs>
      <clipPath id="transfer-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransferIcon;
