import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#magnet-icon_svg__a)">
      <path
        fill="currentColor"
        d="M21 9v4a9 9 0 0 1-18 0V9h7v4a2 2 0 0 0 4 0V9zm-3-7a3 3 0 0 1 3 3v2h-7V5a3 3 0 0 1 3-3zM7 2a3 3 0 0 1 3 3v2H3V5a3 3 0 0 1 3-3z"
      />
    </g>
    <defs>
      <clipPath id="magnet-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMagnetIcon;
