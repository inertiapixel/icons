import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeTmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#badge-tm-icon_svg__a)">
      <path
        fill="currentColor"
        d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-9 4H6a1 1 0 0 0 0 2h1v5a1 1 0 0 0 .883.993L8 16a1 1 0 0 0 1-1v-5h1a1 1 0 0 0 .993-.883L11 9a1 1 0 0 0-1-1m8 1c0-.99-1.283-1.378-1.832-.555L15 10.197l-1.168-1.752C13.283 7.622 12 8.011 12 9v6a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 14 15v-2.697l.168.252.08.104a1 1 0 0 0 1.584-.104l.168-.253V15a1 1 0 0 0 2 0z"
      />
    </g>
    <defs>
      <clipPath id="badge-tm-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgeTmIcon;
