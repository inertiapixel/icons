import * as React from "react";
import type { SVGProps } from "react";
const SvgFileReportIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-report-icon_svg__a)"
    >
      <path d="M13 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M17 13v4h4M12 3v4a1 1 0 0 0 1 1h4" />
      <path d="M11.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v2m0 3v4" />
    </g>
    <defs>
      <clipPath id="file-report-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileReportIcon;
