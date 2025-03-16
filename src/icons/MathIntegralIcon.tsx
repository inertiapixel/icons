import * as React from "react";
import type { SVGProps } from "react";
const SvgMathIntegralIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#math-integral-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 19a2 2 0 0 0 2 2c2 0 2-4 3-9s1-9 3-9a2 2 0 0 1 2 2"
      />
    </g>
    <defs>
      <clipPath id="math-integral-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathIntegralIcon;
