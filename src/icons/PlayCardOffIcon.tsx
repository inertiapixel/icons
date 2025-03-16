import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayCardOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#play-card-off-icon_svg__a)"
    >
      <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5M16 18h.01" />
      <path d="M13.716 13.713 12 16.001l-3-4 1.29-1.72M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="play-card-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayCardOffIcon;
