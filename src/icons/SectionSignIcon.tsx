import * as React from "react";
import type { SVGProps } from "react";
const SvgSectionSignIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#section-sign-icon_svg__a)"
    >
      <path d="M9.172 19A3 3 0 1 0 12 15M14.828 5a3 3 0 1 0-2.83 4" />
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    </g>
    <defs>
      <clipPath id="section-sign-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSectionSignIcon;
