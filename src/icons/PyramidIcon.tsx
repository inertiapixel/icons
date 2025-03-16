import * as React from "react";
import type { SVGProps } from "react";
const SvgPyramidIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pyramid-icon_svg__a)"
    >
      <path d="M11.106 21.788a2 2 0 0 0 1.789 0l8.092-4.054c.538-.27.718-.951.385-1.452l-8.54-13.836a.998.998 0 0 0-1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452zM12 2v20" />
    </g>
    <defs>
      <clipPath id="pyramid-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPyramidIcon;
