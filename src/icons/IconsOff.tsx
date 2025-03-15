import * as React from "react";
import type { SVGProps } from "react";
const SvgIconsOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#icons-off_svg__a)"
    >
      <path d="M4.01 4.04A3.5 3.5 0 0 0 6.5 9.999c.974 0 1.864-.357 2.5-1m.957-3.044a3.5 3.5 0 0 0-2.905-2.912M2.5 21h8l-4-7zM14 3l7 7M14 10l7-7M18 14h3v3m0 4h-7v-7M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="icons-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconsOff;
