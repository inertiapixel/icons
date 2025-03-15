import * as React from "react";
import type { SVGProps } from "react";
const SvgApple = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#apple_svg__a)"
    >
      <path d="M5 14a7 7 0 1 0 14 0 7 7 0 0 0-14 0" />
      <path d="M12 11V5a2 2 0 0 1 2-2h2v1a2 2 0 0 1-2 2h-2" />
      <path d="M10 10.5q2 1 4 0" />
    </g>
    <defs>
      <clipPath id="apple_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApple;
