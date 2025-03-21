import * as React from "react";
import type { SVGProps } from "react";
const SvgMeteorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#meteor-icon_svg__a)"
    >
      <path d="m21 3-5 9h5l-6.891 7.086A6.5 6.5 0 1 1 5.254 9.58L13 3l-1 5z" />
      <path d="M7 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0" />
    </g>
    <defs>
      <clipPath id="meteor-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMeteorIcon;
