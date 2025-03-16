import * as React from "react";
import type { SVGProps } from "react";
const SvgMailXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mail-x-icon_svg__a)"
    >
      <path d="M13.5 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="m3 7 9 6 9-6M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="mail-x-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMailXIcon;
