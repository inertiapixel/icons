import * as React from "react";
import type { SVGProps } from "react";
const SvgXdIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#xd-icon_svg__a)"
    >
      <path d="m6 8 4 8M6 16l4-8M14 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
    </g>
    <defs>
      <clipPath id="xd-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgXdIcon;
