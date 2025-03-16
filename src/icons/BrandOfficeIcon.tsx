import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandOfficeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-office-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 18h9V6L8 8v5l-4 2V7l9-4 7 2v13l-7 3z"
      />
    </g>
    <defs>
      <clipPath id="brand-office-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandOfficeIcon;
