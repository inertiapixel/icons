import * as React from "react";
import type { SVGProps } from "react";
const SvgTexIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tex-icon_svg__a)"
    >
      <path d="M9 8V7H3v1M6 15V7M21 15l-5-8M16 15l5-8M14 11h-4v8h4M10 15h3" />
    </g>
    <defs>
      <clipPath id="tex-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTexIcon;
