import * as React from "react";
import type { SVGProps } from "react";
const SvgError404Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#error-404-icon_svg__a)"
    >
      <path d="M3 7v4a1 1 0 0 0 1 1h3M7 7v10M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M17 7v4a1 1 0 0 0 1 1h3M21 7v10" />
    </g>
    <defs>
      <clipPath id="error-404-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgError404Icon;
