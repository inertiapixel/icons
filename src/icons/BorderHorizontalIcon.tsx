import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#border-horizontal-icon_svg__a)"
    >
      <path d="M4 12h16M4 4v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M4 8v.01M12 8v.01M20 8v.01M4 16v.01M12 16v.01M20 16v.01M4 20v.01M8 20v.01M12 20v.01M16 20v.01M20 20v.01" />
    </g>
    <defs>
      <clipPath id="border-horizontal-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBorderHorizontalIcon;
