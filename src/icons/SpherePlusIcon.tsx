import * as React from "react";
import type { SVGProps } from "react";
const SvgSpherePlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sphere-plus-icon_svg__a)"
    >
      <path d="M3 12c0 1.657 4.03 3 9 3 1.116 0 2.185-.068 3.172-.192m5.724-2.35A1.1 1.1 0 0 0 21 12" />
      <path d="M20.983 12.546a9 9 0 1 0-8.442 8.438M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="sphere-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpherePlusIcon;
