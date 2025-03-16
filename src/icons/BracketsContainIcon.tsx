import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsContainIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brackets-contain-icon_svg__a)"
    >
      <path d="M7 4H3v16h4M17 4h4v16h-4M8 16h.01M12 16h.01M16 16h.01" />
    </g>
    <defs>
      <clipPath id="brackets-contain-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBracketsContainIcon;
