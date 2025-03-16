import * as React from "react";
import type { SVGProps } from "react";
const SvgAppWindowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#app-window-icon_svg__a)">
      <path
        fill="currentColor"
        d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM6.01 7l-.127.007A1 1 0 0 0 6 9l.127-.007A1 1 0 0 0 6.01 7m3 0-.127.007A1 1 0 0 0 9 9l.127-.007A1 1 0 0 0 9.01 7"
      />
    </g>
    <defs>
      <clipPath id="app-window-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAppWindowIcon;
