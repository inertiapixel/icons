import * as React from "react";
import type { SVGProps } from "react";
const SvgTiltShift = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tilt-shift_svg__a)"
    >
      <path d="M8.56 3.691a9 9 0 0 0-2.92 1.95M3.69 8.559a9 9 0 0 0-.69 3.44M3.691 15.441a9 9 0 0 0 1.95 2.92M8.559 20.309a9 9 0 0 0 3.44.69M15.441 20.31a9 9 0 0 0 2.92-1.95M20.309 15.44a9 9 0 0 0 .69-3.44M20.31 8.56a9 9 0 0 0-1.95-2.92M15.44 3.69A9 9 0 0 0 12 3M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="tilt-shift_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTiltShift;
