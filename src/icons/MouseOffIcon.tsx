import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mouse-off-icon_svg__a)"
    >
      <path d="M7.733 3.704A4 4 0 0 1 10 3h4a4 4 0 0 1 4 4v7m-.1 3.895A4 4 0 0 1 14 21h-4a4 4 0 0 1-4-4V7q0-.451.096-.874M12 7v1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="mouse-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMouseOffIcon;
