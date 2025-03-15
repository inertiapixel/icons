import * as React from "react";
import type { SVGProps } from "react";
const SvgTools = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tools_svg__a)"
    >
      <path d="M3 21h4L20 8a2.829 2.829 0 0 0-4-4L3 17zM14.5 5.5l4 4" />
      <path d="M12 8 7 3 3 7l5 5M7 8 5.5 9.5M16 12l5 5-4 4-5-5M16 17l-1.5 1.5" />
    </g>
    <defs>
      <clipPath id="tools_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTools;
