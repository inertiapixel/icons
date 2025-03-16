import * as React from "react";
import type { SVGProps } from "react";
const SvgCraneOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#crane-off-icon_svg__a)"
    >
      <path d="M6 21h6M9 21V9M9 5V3L8 4M6 6 3 9h6M13 9h8M9 3l10 6M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1-2-2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="crane-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCraneOffIcon;
