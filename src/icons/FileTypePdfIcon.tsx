import * as React from "react";
import type { SVGProps } from "react";
const SvgFileTypePdfIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-type-pdf-icon_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M5 18h1.5a1.5 1.5 0 1 0 0-3H5v6M17 18h2M20 15h-3v6M11 15v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
    </g>
    <defs>
      <clipPath id="file-type-pdf-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileTypePdfIcon;
