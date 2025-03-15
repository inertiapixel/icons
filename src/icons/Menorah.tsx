import * as React from "react";
import type { SVGProps } from "react";
const SvgMenorah = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#menorah_svg__a)"
    >
      <path d="M12 4v16M8 4v2a4 4 0 0 0 8 0V4" />
      <path d="M4 4v2a8 8 0 1 0 16 0V4M10 20h4" />
    </g>
    <defs>
      <clipPath id="menorah_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMenorah;
