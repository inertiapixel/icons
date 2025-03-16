import * as React from "react";
import type { SVGProps } from "react";
const SvgRippleOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ripple-off-icon_svg__a)"
    >
      <path d="M3 6.999q1.372-.915 2.746-1.272m4.212.22q1.02.37 2.042 1.052 4.5 3 9 0M3 17q4.5-3 9 0 3.138 2.093 6.276 1.266M3 12q4.5-3 9 0m5.482 1.429Q19.241 13.173 21 12M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ripple-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRippleOffIcon;
