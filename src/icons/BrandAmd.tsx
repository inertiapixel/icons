import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAmd = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-amd_svg__a)"
    >
      <path d="M16 16V9c0-.566-.434-1-1-1H8L3 3h17c.566 0 1 .434 1 1v17z" />
      <path d="M11.293 20.707 16 16H9a1 1 0 0 1-1-1V8l-4.707 4.707a1 1 0 0 0-.293.707V20a1 1 0 0 0 1 1h6.586a1 1 0 0 0 .707-.293" />
    </g>
    <defs>
      <clipPath id="brand-amd_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandAmd;
