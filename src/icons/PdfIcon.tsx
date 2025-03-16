import * as React from "react";
import type { SVGProps } from "react";
const SvgPdfIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pdf-icon_svg__a)"
    >
      <path d="M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM3 12h2a2 2 0 1 0 0-4H3v8M17 12h3M21 8h-4v8" />
    </g>
    <defs>
      <clipPath id="pdf-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPdfIcon;
