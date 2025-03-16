import * as React from "react";
import type { SVGProps } from "react";
const SvgFoldDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fold-down-icon_svg__a)"
    >
      <path d="M12 11v8m0 0 3-3m-3 3-3-3M9 7h1M14 7h1M19 7h1M4 7h1" />
    </g>
    <defs>
      <clipPath id="fold-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFoldDownIcon;
