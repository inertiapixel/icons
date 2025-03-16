import * as React from "react";
import type { SVGProps } from "react";
const SvgAngleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#angle-icon_svg__a)"
    >
      <path d="M21 19H3l9-15M20.613 15.172h.015M19.516 11.77h.015M17.715 8.672h.015M15.414 5.973h.015" />
    </g>
    <defs>
      <clipPath id="angle-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAngleIcon;
