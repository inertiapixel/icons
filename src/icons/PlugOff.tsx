import * as React from "react";
import type { SVGProps } from "react";
const SvgPlugOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plug-off_svg__a)"
    >
      <path d="m16.124 16.092-.177.177a5.811 5.811 0 1 1-8.215-8.215l.16-.16M4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="plug-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlugOff;
