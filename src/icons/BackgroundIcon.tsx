import * as React from "react";
import type { SVGProps } from "react";
const SvgBackgroundIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#background-icon_svg__a)"
    >
      <path d="m4 8 4-4M14 4 4 14M4 20 20 4M20 10 10 20M20 16l-4 4" />
    </g>
    <defs>
      <clipPath id="background-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBackgroundIcon;
