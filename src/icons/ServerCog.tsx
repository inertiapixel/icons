import * as React from "react";
import type { SVGProps } from "react";
const SvgServerCog = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#server-cog_svg__a)"
    >
      <path d="M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM12 20H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h10.5M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M18 14.5V16M18 20v1.5M21.033 16.25l-1.299.75M16.269 19l-1.3.75M14.969 16.25l1.3.75M19.734 19l1.3.75M7 8v.01M7 16v.01" />
    </g>
    <defs>
      <clipPath id="server-cog_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgServerCog;
