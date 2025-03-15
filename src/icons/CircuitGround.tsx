import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitGround = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circuit-ground_svg__a)"
    >
      <path d="M12 13V5M4 13h16M7 16h10M10 19h4" />
    </g>
    <defs>
      <clipPath id="circuit-ground_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitGround;
