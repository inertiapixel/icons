import * as React from "react";
import type { SVGProps } from "react";
const SvgMan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#man_svg__a)">
      <path d="M15 8c1.629 0 3.2.787 4.708 2.293a1 1 0 0 1-1.414 1.414c-.848-.848-1.662-1.369-2.444-1.587L15 16.064V21a1 1 0 0 1-2 0v-4h-2v4a1 1 0 0 1-2 0v-4.929l-.85-5.951c-.78.218-1.594.739-2.442 1.587a1 1 0 1 1-1.414-1.414C5.8 8.787 7.374 8 9 8zM12 1a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 12 1" />
    </g>
    <defs>
      <clipPath id="man_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMan;
