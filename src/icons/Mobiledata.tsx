import * as React from "react";
import type { SVGProps } from "react";
const SvgMobiledata = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mobiledata_svg__a)"
    >
      <path d="M16 12V4M8 20v-8M13 7l3-3 3 3M5 17l3 3 3-3" />
    </g>
    <defs>
      <clipPath id="mobiledata_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMobiledata;
