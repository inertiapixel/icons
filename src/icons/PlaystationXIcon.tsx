import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaystationXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#playstation-x-icon_svg__a)"
    >
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.5 8.5l7 7M8.5 15.5l7-7" />
    </g>
    <defs>
      <clipPath id="playstation-x-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaystationXIcon;
