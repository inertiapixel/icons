import * as React from "react";
import type { SVGProps } from "react";
const SvgRepeatOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#repeat-off-icon_svg__a)"
    >
      <path d="M4 12V9a3 3 0 0 1 2.08-2.856M10 6h10m0 0-3-3m3 3-3 3M20 12v3a3 3 0 0 1-.133.886m-1.99 1.984c-.284.086-.58.13-.877.13H4m0 0 3 3m-3-3 3-3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="repeat-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRepeatOffIcon;
