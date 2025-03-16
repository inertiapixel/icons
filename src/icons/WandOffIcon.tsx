import * as React from "react";
import type { SVGProps } from "react";
const SvgWandOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wand-off-icon_svg__a)"
    >
      <path d="M10.5 10.5 3 18l3 3 7.5-7.5m2-2L21 6l-3-3-5.5 5.5M15 6l3 3M8.434 4.395C8.784 4.035 9 3.543 9 3a2 2 0 0 0 2 2c-.554 0-1.055.225-1.417.589M18.418 14.41c.36-.36.582-.86.582-1.41a2 2 0 0 0 2 2c-.555 0-1.056.226-1.419.59M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="wand-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWandOffIcon;
