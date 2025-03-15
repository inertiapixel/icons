import * as React from "react";
import type { SVGProps } from "react";
const SvgMountainOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mountain-off_svg__a)"
    >
      <path d="M18.281 14.259 14.08 5.387a2.3 2.3 0 0 0-4.158 0l-.165.349M8.468 8.455 3 19.999h17" />
      <path d="m7.5 11 2 2.5 2-2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="mountain-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMountainOff;
