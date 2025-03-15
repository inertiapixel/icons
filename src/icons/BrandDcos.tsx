import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDcos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-dcos_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 6 3 18V6m18 0H3m18 0-9 14L3 6m18 0v10L3 6"
      />
    </g>
    <defs>
      <clipPath id="brand-dcos_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandDcos;
