import * as React from "react";
import type { SVGProps } from "react";
const SvgGeometry = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#geometry_svg__a)"
    >
      <path d="m7 21 4-12m2 0 1.48 4.439m.949 2.847L17 21M10 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 12c1.526 2.955 4.588 5 8 5 3.41 0 6.473-2.048 8-5M12 5V3" />
    </g>
    <defs>
      <clipPath id="geometry_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGeometry;
