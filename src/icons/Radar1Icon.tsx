import * as React from "react";
import type { SVGProps } from "react";
const SvgRadar1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#radar-1-icon_svg__a)"
    >
      <path d="M21 12h-8a1 1 0 1 0-1 1v8a9 9 0 0 0 9-9" />
      <path d="M16 9a5 5 0 1 0-7 7" />
      <path d="M20.486 9.002A9 9 0 1 0 9.004 20.497" />
    </g>
    <defs>
      <clipPath id="radar-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRadar1Icon;
