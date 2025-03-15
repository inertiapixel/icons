import * as React from "react";
import type { SVGProps } from "react";
const SvgSchoolOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#school-off_svg__a)"
    >
      <path d="M22 9 12 5l-2.136.854M22 9l-6.425 2.57M22 9v6M7 7 2 9l10 4 .697-.279M6 10.602v5.4c0 1.657 2.686 3 6 3 2.334 0 4.357-.666 5.35-1.64m.65-3.36v-3.4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="school-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSchoolOff;
