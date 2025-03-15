import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#layout-kanban_svg__a)">
      <path d="M10 3a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zM20 3a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2zM8 7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3zM18 7a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z" />
    </g>
    <defs>
      <clipPath id="layout-kanban_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLayoutKanban;
