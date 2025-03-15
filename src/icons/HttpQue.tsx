import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpQue = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#http-que_svg__a)"
    >
      <path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 2-2M6 15l1 1M21 8h-4v8h4M17 12h2.5M10 8v6a2 2 0 0 0 4 0V8" />
    </g>
    <defs>
      <clipPath id="http-que_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHttpQue;
