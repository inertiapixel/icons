import * as React from "react";
import type { SVGProps } from "react";
const SvgBodyScanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#body-scan-icon_svg__a)"
    >
      <path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2M11 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10 17v-1a2 2 0 0 1 4 0v1M8 10q1 1 2 1h4q1 0 2-1M12 11v3" />
    </g>
    <defs>
      <clipPath id="body-scan-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBodyScanIcon;
