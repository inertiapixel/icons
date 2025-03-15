import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeCircle2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#code-circle-2_svg__a)"
    >
      <path d="M8.5 13.5 7 12l1.5-1.5M15.5 10.5 17 12l-1.5 1.5" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M13 9.5 11 15" />
    </g>
    <defs>
      <clipPath id="code-circle-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCodeCircle2;
