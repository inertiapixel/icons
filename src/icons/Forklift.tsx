import * as React from "react";
import type { SVGProps } from "react";
const SvgForklift = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#forklift_svg__a)"
    >
      <path d="M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 17h5" />
      <path d="M3 17v-6h13v6M5 11V7h4M9 11V5h4l3 6M22 15h-3V5M16 13h3" />
    </g>
    <defs>
      <clipPath id="forklift_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgForklift;
