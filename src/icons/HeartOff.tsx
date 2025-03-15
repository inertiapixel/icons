import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-off_svg__a)"
    >
      <path d="m3 3 18 18M18.002 14l1.5-1.428A5 5 0 1 0 12.002 6c-.95-1.273-2.44-2-4-2m8 12-4 4-7.5-7.428a5 5 0 0 1-1.288-5.068A4.98 4.98 0 0 1 5.002 5" />
    </g>
    <defs>
      <clipPath id="heart-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartOff;
