import * as React from "react";
import type { SVGProps } from "react";
const SvgPooIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#poo-icon_svg__a)"
    >
      <path d="M10 12h.01M14 12h.01M10 16a3.5 3.5 0 0 0 4 0" />
      <path d="M11 4.001c2 0 3.5 1.5 3.5 4h.164a2.5 2.5 0 0 1 2.196 3.32 3 3 0 0 1 1.615 3.063 3 3 0 0 1-1.299 5.607H7a3 3 0 0 1-1.474-5.613 3 3 0 0 1 1.615-3.062 2.5 2.5 0 0 1 2.195-3.32H9.5c1.5 0 2.5-2 1.5-4z" />
    </g>
    <defs>
      <clipPath id="poo-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPooIcon;
