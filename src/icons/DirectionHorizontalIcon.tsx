import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#direction-horizontal-icon_svg__a)"
    >
      <path d="m10 9-3 3 3 3M14 9l3 3-3 3" />
    </g>
    <defs>
      <clipPath id="direction-horizontal-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDirectionHorizontalIcon;
