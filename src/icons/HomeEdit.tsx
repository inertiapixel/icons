import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeEdit = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-edit_svg__a)"
    >
      <path d="M9 21v-6a2 2 0 0 1 2-2h2c.645 0 1.218.305 1.584.78" />
      <path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h4M18.42 15.611a2.1 2.1 0 1 1 2.97 2.97L18 22.001h-3v-3z" />
    </g>
    <defs>
      <clipPath id="home-edit_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeEdit;
