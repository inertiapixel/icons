import * as React from "react";
import type { SVGProps } from "react";
const SvgMicroscope = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#microscope_svg__a)"
    >
      <path d="M5 21h14M6 18h2M7 18v3M9 11l3 3 6-6-3-3zM10.5 12.5 9 14M17 3l3 3M12 21.001a6 6 0 0 0 3.715-10.712" />
    </g>
    <defs>
      <clipPath id="microscope_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMicroscope;
