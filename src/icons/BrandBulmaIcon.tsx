import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBulmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-bulma-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 16 1-9 5-5 6.5 6-3.5 4 5 5-8 5z"
      />
    </g>
    <defs>
      <clipPath id="brand-bulma-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandBulmaIcon;
