import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAzure = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-azure_svg__a)"
    >
      <path d="M6 7.5 2 17h4l6-15zM22 20 15 5l-3 7 4 5-8 3z" />
    </g>
    <defs>
      <clipPath id="brand-azure_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandAzure;
