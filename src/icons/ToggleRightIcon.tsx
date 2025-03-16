import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#toggle-right-icon_svg__a)">
      <path d="M16 9a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 16 9" />
      <path d="M16 5a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5zm0 2H8a5 5 0 1 0 0 10h8a5 5 0 1 0 0-10" />
    </g>
    <defs>
      <clipPath id="toggle-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgToggleRightIcon;
