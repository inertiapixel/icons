import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftFromArcIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-left-from-arc-icon_svg__a)"
    >
      <path d="M9 12h12M17 16l4-4-4-4M12 3a9 9 0 1 0 0 18" />
    </g>
    <defs>
      <clipPath id="arrow-left-from-arc-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowLeftFromArcIcon;
