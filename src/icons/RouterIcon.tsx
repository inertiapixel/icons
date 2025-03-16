import * as React from "react";
import type { SVGProps } from "react";
const SvgRouterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#router-icon_svg__a)"
    >
      <path d="M3 15a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM17 17v.01M13 17v.01M15 13v-2M11.75 8.75a4 4 0 0 1 6.5 0M8.5 6.5a8 8 0 0 1 13 0" />
    </g>
    <defs>
      <clipPath id="router-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRouterIcon;
