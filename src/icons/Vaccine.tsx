import * as React from "react";
import type { SVGProps } from "react";
const SvgVaccine = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#vaccine_svg__a)"
    >
      <path d="m17 3 4 4M19 5l-4.5 4.5M11.5 6.5l6 6M16.5 11.5 10 18H6v-4l6.5-6.5M7.5 12.5 9 14M10.5 9.5 12 11M3 21l3-3" />
    </g>
    <defs>
      <clipPath id="vaccine_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVaccine;
