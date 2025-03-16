import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitResistorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circuit-resistor-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 12h2l2-5 3 10 3-10 3 10 3-10 1.5 5H22"
      />
    </g>
    <defs>
      <clipPath id="circuit-resistor-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitResistorIcon;
