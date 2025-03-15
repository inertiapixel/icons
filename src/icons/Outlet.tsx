import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlet = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#outlet_svg__a)"
    >
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path
        fill="currentColor"
        d="M9 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M15 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      />
    </g>
    <defs>
      <clipPath id="outlet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOutlet;
