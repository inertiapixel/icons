import * as React from "react";
import type { SVGProps } from "react";
const SvgBlendMode = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#blend-mode_svg__a)"
    >
      <path d="M8 9.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0" />
      <path d="M3 14.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0" />
    </g>
    <defs>
      <clipPath id="blend-mode_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBlendMode;
