import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSpeedtest = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-speedtest_svg__a)"
    >
      <path d="M5.636 19.364a9 9 0 1 1 12.728 0M16 9l-4 4" />
    </g>
    <defs>
      <clipPath id="brand-speedtest_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSpeedtest;
