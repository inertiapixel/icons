import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangles = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#triangles_svg__a)"
    >
      <path d="M9.973 21h8.052a.975.975 0 0 0 .81-1.517l-4.025-6.048a.972.972 0 0 0-1.622 0l-4.025 6.048A.977.977 0 0 0 9.973 21" />
      <path d="M4.981 16h14.04c.543 0 .98-.442.98-.988a1 1 0 0 0-.155-.534l-7.02-11.023a.975.975 0 0 0-1.649 0l-7.02 11.023a1 1 0 0 0 .294 1.366.97.97 0 0 0 .53.157" />
    </g>
    <defs>
      <clipPath id="triangles_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTriangles;
