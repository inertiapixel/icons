import * as React from "react";
import type { SVGProps } from "react";
const SvgCubeUnfolded = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cube-unfolded_svg__a)"
    >
      <path d="M2 15h10v5h5v-5h5v-5H12V5H7v5H2z" />
      <path d="M7 15v-5h5v5h5v-5" />
    </g>
    <defs>
      <clipPath id="cube-unfolded_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCubeUnfolded;
