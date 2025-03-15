import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabaseX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#database-x_svg__a)"
    >
      <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
      <path d="M4 6v6c0 1.657 3.582 3 8 3q.807 0 1.57-.058M20 13.5V6" />
      <path d="M4 12v6c0 1.657 3.582 3 8 3q.577 0 1.132-.03M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="database-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDatabaseX;
