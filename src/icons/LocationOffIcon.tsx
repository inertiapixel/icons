import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#location-off-icon_svg__a)"
    >
      <path d="M10.72 6.712 21 3l-3.723 10.313m-1.056 2.925L14.5 21a.551.551 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1l4.775-1.724M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="location-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocationOffIcon;
