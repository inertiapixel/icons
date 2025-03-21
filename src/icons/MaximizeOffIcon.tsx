import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximizeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#maximize-off-icon_svg__a)"
    >
      <path d="M4 8.002v-2c0-.551.223-1.05.584-1.412M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20.002h2c.545 0 1.04-.218 1.4-.572M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="maximize-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMaximizeOffIcon;
