import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingChurch = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-church_svg__a)"
    >
      <path d="M3 21h18M10 21v-4a2 2 0 0 1 4 0v4M10 5h4M12 3v5" />
      <path d="M6 21v-7m-2 2 8-8 8 8m-2-2v7" />
    </g>
    <defs>
      <clipPath id="building-church_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingChurch;
