import * as React from "react";
import type { SVGProps } from "react";
const SvgCricketIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cricket-icon_svg__a)"
    >
      <path d="m11.106 18.791-1 .992a4.159 4.159 0 0 1-6.038-5.715l.157-.166 8.282-8.4 1.5 1.5 3.45-3.392a2.08 2.08 0 0 1 3.057 2.815l-.116.126-3.39 3.45 1.5 1.5-3.669 3.617M10.5 7.5l6 6" />
      <path d="M11 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    </g>
    <defs>
      <clipPath id="cricket-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCricketIcon;
