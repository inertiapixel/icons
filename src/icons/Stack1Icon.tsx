import * as React from "react";
import type { SVGProps } from "react";
const SvgStack1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stack-1-icon_svg__a)"
    >
      <path d="m12 6-8 4 8 4 8-4zM4 14l8 4 8-4" />
    </g>
    <defs>
      <clipPath id="stack-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStack1Icon;
