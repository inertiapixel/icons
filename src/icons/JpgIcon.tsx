import * as React from "react";
import type { SVGProps } from "react";
const SvgJpgIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#jpg-icon_svg__a)"
    >
      <path d="M21 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1M10 16V8h2a2 2 0 0 1 0 4h-2M3 8h4v6a2 2 0 0 1-2 2H3.5a.5.5 0 0 1-.5-.5V15" />
    </g>
    <defs>
      <clipPath id="jpg-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJpgIcon;
