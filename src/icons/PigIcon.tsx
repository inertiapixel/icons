import * as React from "react";
import type { SVGProps } from "react";
const SvgPigIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pig-icon_svg__a)"
    >
      <path d="M15 11v.01M15.998 3v3.803A6.02 6.02 0 0 1 18.656 10h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V18.5a1.5 1.5 0 0 1-3 0v-.583q-.496.083-1 .083h-4q-.504 0-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027A6 6 0 0 1 8.997 6h2.5z" />
    </g>
    <defs>
      <clipPath id="pig-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPigIcon;
