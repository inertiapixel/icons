import * as React from "react";
import type { SVGProps } from "react";
const SvgDroneOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#drone-off_svg__a)"
    >
      <path d="M14 14h-4v-4M10 10 6.5 6.5M9.959 5.95a3.5 3.5 0 0 0-2.917-2.91m-3.02.988a3.5 3.5 0 0 0 1.98 5.936M14 10l3.5-3.5M18.001 9.964a3.5 3.5 0 1 0-3.966-3.965M14 14l3.5 3.5M14.035 17.998a3.5 3.5 0 0 0 5.936 1.98m.987-3.026a3.5 3.5 0 0 0-2.918-2.913M10 14l-3.5 3.5M6.002 14.035A3.5 3.5 0 1 0 9.968 18M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="drone-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDroneOff;
