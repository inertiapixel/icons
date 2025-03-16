import * as React from "react";
import type { SVGProps } from "react";
const SvgServerBoltIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#server-bolt-icon_svg__a)"
    >
      <path d="M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM15 20H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h12M7 8v.01M7 16v.01M20 15l-2 3h3l-2 3" />
    </g>
    <defs>
      <clipPath id="server-bolt-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgServerBoltIcon;
