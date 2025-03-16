import * as React from "react";
import type { SVGProps } from "react";
const SvgSlashesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#slashes-icon_svg__a)"
    >
      <path d="M14 5 4 19M20 5 10 19" />
    </g>
    <defs>
      <clipPath id="slashes-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSlashesIcon;
