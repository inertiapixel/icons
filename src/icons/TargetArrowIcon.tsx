import * as React from "react";
import type { SVGProps } from "react";
const SvgTargetArrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#target-arrow-icon_svg__a)"
    >
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M12 7a5 5 0 1 0 5 5" />
      <path d="M13 3.056a9 9 0 1 0 7.94 7.945" />
      <path d="M15 6v3h3l3-3h-3V3zM15 9l-3 3" />
    </g>
    <defs>
      <clipPath id="target-arrow-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTargetArrowIcon;
