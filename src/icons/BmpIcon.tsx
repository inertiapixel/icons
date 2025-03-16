import * as React from "react";
import type { SVGProps } from "react";
const SvgBmpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bmp-icon_svg__a)"
    >
      <path d="M18 16V8h2a2 2 0 0 1 0 4h-2M4 12a2 2 0 1 0 0-4H2v8h2a2 2 0 1 0 0-4m0 0H2M9 16V8l3 6 3-6v8" />
    </g>
    <defs>
      <clipPath id="bmp-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBmpIcon;
