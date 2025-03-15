import * as React from "react";
import type { SVGProps } from "react";
const SvgTrekking = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#trekking_svg__a)"
    >
      <path d="M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 21l2-4M13 21v-4l-3-3 1-6 3 4 3 2" />
      <path d="m10 14-1.828-1.218a2 2 0 0 1-.83-2.15l.28-1.117A2 2 0 0 1 9.56 8H11l4 1 3-2M17 12v9M16 20h2" />
    </g>
    <defs>
      <clipPath id="trekking_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrekking;
