import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldLongitudeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-longitude-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M11.499 3a11.2 11.2 0 0 0 0 18M12.5 3a11.2 11.2 0 0 1 0 18M12 3v18" />
    </g>
    <defs>
      <clipPath id="world-longitude-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldLongitudeIcon;
