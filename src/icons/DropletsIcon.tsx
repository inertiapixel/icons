import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#droplets-icon_svg__a)"
    >
      <path d="M4.073 20.301a2.999 2.999 0 0 0 4.526-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L3.4 16.503a3 3 0 0 0 .672 3.798M16.073 20.301a2.999 2.999 0 0 0 4.526-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L15.4 16.503a3 3 0 0 0 .67 3.798zM10.073 10.301a2.999 2.999 0 0 0 4.526-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L9.4 6.503a3 3 0 0 0 .672 3.798" />
    </g>
    <defs>
      <clipPath id="droplets-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDropletsIcon;
