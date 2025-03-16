import * as React from "react";
import type { SVGProps } from "react";
const SvgXxxIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#xxx-icon_svg__a)"
    >
      <path d="m10 8 4 8M10 16l4-8M17 8l4 8M17 16l4-8M3 8l4 8M3 16l4-8" />
    </g>
    <defs>
      <clipPath id="xxx-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgXxxIcon;
