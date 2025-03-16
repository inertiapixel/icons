import * as React from "react";
import type { SVGProps } from "react";
const SvgShapeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shape-off-icon_svg__a)"
    >
      <path d="M3.576 3.598a2 2 0 0 0 2.849 2.808M17 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17.574 17.598a2 2 0 0 0 2.826 2.83M5 7v10M9 5h8M7 19h10M19 7v8M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="shape-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShapeOffIcon;
