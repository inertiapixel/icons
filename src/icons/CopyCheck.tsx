import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#copy-check_svg__a)">
      <path
        fill="currentColor"
        d="M18.333 6A3.667 3.667 0 0 1 22 9.667v8.666A3.667 3.667 0 0 1 18.333 22H9.667A3.667 3.667 0 0 1 6 18.333V9.667A3.667 3.667 0 0 1 9.667 6zM15 2c1.094 0 1.828.533 2.374 1.514a1.002 1.002 0 0 1-.76 1.48 1 1 0 0 1-.988-.508C15.405 4.088 15.284 4 15 4H5c-.548 0-1 .452-1 1v9.998c0 .32.154.618.407.805l.1.065a.999.999 0 1 1-.99 1.738A3 3 0 0 1 2 15V5c0-1.652 1.348-3 3-3zm1.293 9.293L13 14.585l-1.293-1.292a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414"
      />
    </g>
    <defs>
      <clipPath id="copy-check_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCopyCheck;
