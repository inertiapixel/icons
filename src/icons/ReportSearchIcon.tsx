import * as React from "react";
import type { SVGProps } from "react";
const SvgReportSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#report-search-icon_svg__a)"
    >
      <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.697M18 12V7a2 2 0 0 0-2-2h-2" />
      <path d="M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-2-2M8 11h4M8 15h3M14 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M18.5 19.5 21 22" />
    </g>
    <defs>
      <clipPath id="report-search-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReportSearchIcon;
