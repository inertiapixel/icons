import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#code-icon_svg__a)"
    >
      <path d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
    </g>
    <defs>
      <clipPath id="code-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCodeIcon;
