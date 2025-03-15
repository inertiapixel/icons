import * as React from "react";
import type { SVGProps } from "react";
const SvgId = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#id_svg__a)"
    >
      <path d="M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
      <path d="M7 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 8h2M15 12h2M7 16h10" />
    </g>
    <defs>
      <clipPath id="id_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgId;
