import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingLighthouse = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-lighthouse_svg__a)"
    >
      <path d="m12 3 2 3 2 15H8l2-15zM8 9h8M3 11l2-2-2-2M21 11l-2-2 2-2" />
    </g>
    <defs>
      <clipPath id="building-lighthouse_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingLighthouse;
