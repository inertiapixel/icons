import * as React from "react";
import type { SVGProps } from "react";
const SvgCube = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cube_svg__a)"
    >
      <path d="M21 16.009V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.009a2.02 2.02 0 0 0-2 0L4 6.275c-.619.354-1 1.01-1 1.718v8.017c0 .71.381 1.363 1 1.718l7 4.008a2.02 2.02 0 0 0 2 0l7-4.008c.619-.355 1-1.01 1-1.718M12 22V12M12 12l8.73-5.04M3.27 6.96 12 12" />
    </g>
    <defs>
      <clipPath id="cube_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCube;
