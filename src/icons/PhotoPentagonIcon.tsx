import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoPentagonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-pentagon-icon_svg__a)"
    >
      <path d="m13.163 2.167 8.02 5.828c.695.504.985 1.397.72 2.212l-3.064 9.43a1.98 1.98 0 0 1-1.881 1.367H7.042a1.98 1.98 0 0 1-1.881-1.367l-3.064-9.43a1.98 1.98 0 0 1 .719-2.212l8.02-5.828a1.98 1.98 0 0 1 2.327 0M15 8h.01" />
      <path d="m4 15.002 4-4c.928-.893 2.072-.893 3 0l5 5M14 14.002l1-1c.928-.893 2.072-.893 3 0l2 2" />
    </g>
    <defs>
      <clipPath id="photo-pentagon-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoPentagonIcon;
