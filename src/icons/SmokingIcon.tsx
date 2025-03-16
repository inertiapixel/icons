import * as React from "react";
import type { SVGProps } from "react";
const SvgSmokingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#smoking-icon_svg__a)"
    >
      <path d="M3 14a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM8 13v4M16 5v.5a2 2 0 0 0 2 2 2 2 0 0 1 2 2v.5" />
    </g>
    <defs>
      <clipPath id="smoking-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSmokingIcon;
