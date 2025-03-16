import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#link-off-icon_svg__a)"
    >
      <path d="m9 15 3-3m2-2 1-1M11 6l.463-.536a5 5 0 0 1 7.071 7.072L18 13M3 3l18 18M13 18l-.397.534a5.07 5.07 0 0 1-7.127 0 4.97 4.97 0 0 1 0-7.071L6 11" />
    </g>
    <defs>
      <clipPath id="link-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinkOffIcon;
