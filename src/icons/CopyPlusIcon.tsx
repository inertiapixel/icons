import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#copy-plus-icon_svg__a)">
      <path
        fill="currentColor"
        d="M18.333 6A3.667 3.667 0 0 1 22 9.667v8.666A3.667 3.667 0 0 1 18.333 22H9.667A3.667 3.667 0 0 1 6 18.333V9.667A3.667 3.667 0 0 1 9.667 6zM14 10a1 1 0 0 0-1 1v2h-2a1 1 0 0 0-.993.883L10 14a1 1 0 0 0 1 1h2v2a1 1 0 0 0 .883.993L14 18a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .993-.883L18 14a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0-.883-.993zm1-8c1.094 0 1.828.533 2.374 1.514a1.002 1.002 0 0 1-.76 1.48 1 1 0 0 1-.988-.508C15.405 4.088 15.284 4 15 4H5c-.548 0-1 .452-1 1v9.998c0 .32.154.618.407.805l.1.065a.999.999 0 1 1-.99 1.738A3 3 0 0 1 2 15V5c0-1.652 1.348-3 3-3z"
      />
    </g>
    <defs>
      <clipPath id="copy-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCopyPlusIcon;
