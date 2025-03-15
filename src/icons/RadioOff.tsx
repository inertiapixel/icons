import * as React from "react";
import type { SVGProps } from "react";
const SvgRadioOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#radio-off_svg__a)"
    >
      <path d="M14 3 9.014 5M6.139 6.15l-1.51.604A1 1 0 0 0 4 7.682v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 .708-.294M20 16.005v-8a1 1 0 0 0-1-1h-8m-4 0H4.5M4 12h8m4 0h4M7 12v-2M13 16v.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="radio-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRadioOff;
