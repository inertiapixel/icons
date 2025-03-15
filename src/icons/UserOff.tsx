import * as React from "react";
import type { SVGProps } from "react";
const SvgUserOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#user-off_svg__a)"
    >
      <path d="M8.18 8.19a4.01 4.01 0 0 0 2.616 2.627m3.507-.545a4 4 0 1 0-5.59-5.552M6 21v-2a4 4 0 0 1 4-4h4c.412 0 .81.062 1.183.178m2.633 2.618c.12.38.184.785.184 1.204v2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="user-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserOff;
