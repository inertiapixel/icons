import * as React from "react";
import type { SVGProps } from "react";
const SvgAntennaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#antenna-icon_svg__a)"
    >
      <path d="M20 4v8M16 4.5v7M12 5v16M8 5.5v5M4 6v4M20 8H4" />
    </g>
    <defs>
      <clipPath id="antenna-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAntennaIcon;
