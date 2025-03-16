import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaystationSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#playstation-square-icon_svg__a)"
    >
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
      <path d="M8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
    </g>
    <defs>
      <clipPath id="playstation-square-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaystationSquareIcon;
