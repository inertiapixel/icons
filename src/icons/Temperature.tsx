import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperature = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#temperature_svg__a)"
    >
      <path d="M10 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM10 9h4" />
    </g>
    <defs>
      <clipPath id="temperature_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTemperature;
