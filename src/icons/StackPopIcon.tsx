import * as React from "react";
import type { SVGProps } from "react";
const SvgStackPopIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stack-pop-icon_svg__a)"
    >
      <path d="M7 9.5 4 11l8 4 8-4-3-1.5M4 15l8 4 8-4M12 11V4M9 7l3-3 3 3" />
    </g>
    <defs>
      <clipPath id="stack-pop-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStackPopIcon;
