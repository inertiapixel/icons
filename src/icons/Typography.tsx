import * as React from "react";
import type { SVGProps } from "react";
const SvgTypography = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#typography_svg__a)"
    >
      <path d="M4 20h3M14 20h7M6.898 15h6.9M10.2 6.3 16 20M5 20l6-16h2l7 16" />
    </g>
    <defs>
      <clipPath id="typography_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTypography;
