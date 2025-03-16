import * as React from "react";
import type { SVGProps } from "react";
const SvgHammerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hammer-icon_svg__a)"
    >
      <path d="M11.415 10 4.03 17.418a2.09 2.09 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0L14.415 13" />
      <path d="m18.12 15.293 2.587-2.586a1 1 0 0 0 0-1.414L13.12 3.707a1 1 0 0 0-1.414 0L9.12 6.293a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0" />
    </g>
    <defs>
      <clipPath id="hammer-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHammerIcon;
