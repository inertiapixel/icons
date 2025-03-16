import * as React from "react";
import type { SVGProps } from "react";
const SvgWiperIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wiper-icon_svg__a)"
    >
      <path d="M11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 9l5.5 5.5a5 5 0 0 1 7 0L21 9A12 12 0 0 0 3 9M12 18 9.8 5.2" />
    </g>
    <defs>
      <clipPath id="wiper-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWiperIcon;
