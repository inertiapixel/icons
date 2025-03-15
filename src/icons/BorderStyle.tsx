import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderStyle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#border-style_svg__a)"
    >
      <path d="M4 20V6a2 2 0 0 1 2-2h14M20 8v.01M20 12v.01M20 16v.01M8 20v.01M12 20v.01M16 20v.01M20 20v.01" />
    </g>
    <defs>
      <clipPath id="border-style_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBorderStyle;
