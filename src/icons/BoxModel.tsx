import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxModel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#box-model_svg__a)"
    >
      <path d="M8 8h8v8H8z" />
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM16 16l3.3 3.3M16 8l3.3-3.3M8 8 4.7 4.7M8 16l-3.3 3.3" />
    </g>
    <defs>
      <clipPath id="box-model_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBoxModel;
