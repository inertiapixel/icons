import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficCone = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#traffic-cone_svg__a)"
    >
      <path d="M4 20h16M9.398 10h5.2M7.8 15h8.4M6 20l5-15h2l5 15" />
    </g>
    <defs>
      <clipPath id="traffic-cone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrafficCone;
