import * as React from "react";
import type { SVGProps } from "react";
const SvgFileExportIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-export-icon_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M11.5 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v5m-5 6h7m0 0-3-3m3 3-3 3" />
    </g>
    <defs>
      <clipPath id="file-export-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileExportIcon;
