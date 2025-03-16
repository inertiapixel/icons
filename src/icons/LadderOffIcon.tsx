import * as React from "react";
import type { SVGProps } from "react";
const SvgLadderOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ladder-off-icon_svg__a)"
    >
      <path d="M8 3v1m0 4v13M16 3v9m0 4v5M8 14h6M8 10h2m4 0h2M10 6h6M8 18h8M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ladder-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLadderOffIcon;
