import * as React from "react";
import type { SVGProps } from "react";
const SvgHospitalCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hospital-circle-icon_svg__a)"
    >
      <path d="M10 16V8M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M14 16V8M10 12h4" />
    </g>
    <defs>
      <clipPath id="hospital-circle-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHospitalCircleIcon;
