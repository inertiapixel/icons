import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareDotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#square-dot-icon_svg__a)">
      <path
        fill="currentColor"
        d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 8a2 2 0 0 0-1.995 1.85L10 12l.005.15A2 2 0 1 0 12 10"
      />
    </g>
    <defs>
      <clipPath id="square-dot-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSquareDotIcon;
