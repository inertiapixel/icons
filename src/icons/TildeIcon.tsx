import * as React from "react";
import type { SVGProps } from "react";
const SvgTildeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#tilde-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12c0-1.657 1.592-3 3.556-3s3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3S20 13.657 20 12"
      />
    </g>
    <defs>
      <clipPath id="tilde-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTildeIcon;
