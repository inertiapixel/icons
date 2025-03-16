import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid4X4Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#grid-4x4-icon_svg__a)"
    >
      <path d="M3 6h18M3 12h18M3 18h18M6 3v18M12 3v18M18 3v18" />
    </g>
    <defs>
      <clipPath id="grid-4x4-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGrid4X4Icon;
