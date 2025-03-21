import * as React from "react";
import type { SVGProps } from "react";
const SvgTrophyOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#trophy-off-icon_svg__a)"
    >
      <path d="M8 21h8M12 17v4M8 4h9M17 4v8q0 .465-.082.905m-1.384 2.632A5 5 0 0 1 7 12V7M3 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="trophy-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrophyOffIcon;
