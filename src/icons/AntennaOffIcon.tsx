import * as React from "react";
import type { SVGProps } from "react";
const SvgAntennaOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#antenna-off-icon_svg__a)"
    >
      <path d="M20 4v8M16 4.5v7M12 5v3m0 4v9M8 8v2.5M4 6v4M20 8h-8M8 8H4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="antenna-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAntennaOffIcon;
