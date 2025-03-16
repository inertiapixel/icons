import * as React from "react";
import type { SVGProps } from "react";
const SvgMailForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mail-forward-icon_svg__a)"
    >
      <path d="M12 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5" />
      <path d="m3 6 9 6 9-6M15 18h6M18 15l3 3-3 3" />
    </g>
    <defs>
      <clipPath id="mail-forward-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMailForwardIcon;
