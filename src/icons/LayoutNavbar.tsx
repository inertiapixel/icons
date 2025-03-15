import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutNavbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#layout-navbar_svg__a)">
      <path
        fill="currentColor"
        d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm1 6H5v9a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18z"
      />
    </g>
    <defs>
      <clipPath id="layout-navbar_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLayoutNavbar;
