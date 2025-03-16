import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#moon-off-icon_svg__a)"
    >
      <path d="M7.962 3.95A9 9 0 0 1 12 2.991V3h.393a7.5 7.5 0 0 0-2.07 3.308m-.14 3.84a7.49 7.49 0 0 0 5.575 5.641m3.892-.11q.334-.1.663-.233a9 9 0 0 1-.274.597m-1.695 2.337A9.001 9.001 0 1 1 5.634 5.631M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="moon-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoonOffIcon;
