import * as React from "react";
import type { SVGProps } from "react";
const SvgPointerUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pointer-up-icon_svg__a)"
    >
      <path d="m15.984 13.428-1.206-1.206 3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093 1.217 1.217M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="pointer-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPointerUpIcon;
