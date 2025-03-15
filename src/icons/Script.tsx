import * as React from "react";
import type { SVGProps } from "react";
const SvgScript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#script_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20H6a3 3 0 0 1 0-6h11a3 3 0 0 0 0 6m0 0h1a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8"
      />
    </g>
    <defs>
      <clipPath id="script_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScript;
