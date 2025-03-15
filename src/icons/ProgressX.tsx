import * as React from "react";
import type { SVGProps } from "react";
const SvgProgressX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#progress-x_svg__a)"
    >
      <path d="M10 20.778a9 9 0 0 1-2.48-.97M14 3.223a9.003 9.003 0 0 1 0 17.554M4.579 17.092A9 9 0 0 1 3.352 14.5M3.125 10.5c.16-.95.468-1.85.9-2.675l.169-.305M6.906 4.579A9 9 0 0 1 10 3.223M14 14l-4-4M10 14l4-4" />
    </g>
    <defs>
      <clipPath id="progress-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProgressX;
