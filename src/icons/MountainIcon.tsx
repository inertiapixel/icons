import * as React from "react";
import type { SVGProps } from "react";
const SvgMountainIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mountain-icon_svg__a)"
    >
      <path d="M3 19.999h18L14.079 5.387a2.3 2.3 0 0 0-4.158 0z" />
      <path d="m7.5 11 2 2.5L12 11l2 3 2.5-2" />
    </g>
    <defs>
      <clipPath id="mountain-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMountainIcon;
