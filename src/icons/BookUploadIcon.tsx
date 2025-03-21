import * as React from "react";
import type { SVGProps } from "react";
const SvgBookUploadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#book-upload-icon_svg__a)"
    >
      <path d="M14 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v5" />
      <path d="M11 16H6a2 2 0 0 0-2 2M15 16l3-3 3 3M18 13v9" />
    </g>
    <defs>
      <clipPath id="book-upload-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBookUploadIcon;
