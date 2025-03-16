import * as React from "react";
import type { SVGProps } from "react";
const SvgFoldUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fold-up-icon_svg__a)"
    >
      <path d="M12 13V5m0 0L9 8m3-3 3 3M9 17h1M14 17h1M19 17h1M4 17h1" />
    </g>
    <defs>
      <clipPath id="fold-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFoldUpIcon;
