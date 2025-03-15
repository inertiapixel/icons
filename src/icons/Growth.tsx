import * as React from "react";
import type { SVGProps } from "react";
const SvgGrowth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#growth_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 15a4.5 4.5 0 0 0-4.5 4.5c0-2.485-1.79-4.5-4-4.5m8.5-4a4.5 4.5 0 0 0-4.5 4.5c0-2.485-1.79-4.5-4-4.5m8.5-4a4.5 4.5 0 0 0-4.5 4.5C12 9.015 10.21 7 8 7m4-3v6"
      />
    </g>
    <defs>
      <clipPath id="growth_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGrowth;
