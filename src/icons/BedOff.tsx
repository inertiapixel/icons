import * as React from "react";
import type { SVGProps } from "react";
const SvgBedOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bed-off_svg__a)"
    >
      <path d="M7 7a2 2 0 1 0 2 2M22 17v-3h-4m-4 0H2M2 8v9M12 12v2h2m4 0h4v-2a3 3 0 0 0-3-3h-6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bed-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBedOff;
