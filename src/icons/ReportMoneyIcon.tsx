import * as React from "react";
import type { SVGProps } from "react";
const SvgReportMoneyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#report-money-icon_svg__a)"
    >
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-2-2M14 11h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H10M12 17v1m0-8v1" />
    </g>
    <defs>
      <clipPath id="report-money-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReportMoneyIcon;
