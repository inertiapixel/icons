import * as React from "react";
import type { SVGProps } from "react";
const SvgSwordIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sword-icon_svg__a)"
    >
      <path d="M20 4v5l-9 7-4 4-3-3 4-4 7-9zM6.5 11.5l6 6" />
    </g>
    <defs>
      <clipPath id="sword-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwordIcon;
