import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSafariIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-safari-icon_svg__a)"
    >
      <path d="m8 16 2-6 6-2-2 6z" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
    </g>
    <defs>
      <clipPath id="brand-safari-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSafariIcon;
