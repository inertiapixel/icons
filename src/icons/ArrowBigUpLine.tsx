import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBigUpLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#arrow-big-up-line_svg__a)">
      <path d="M10.586 3 4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v5a1 1 0 0 0 1 1h6l.117-.007A1 1 0 0 0 16 18v-5h2.586A1.999 1.999 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0M14.999 20a1 1 0 0 1 .117 1.993l-.117.007h-6a1 1 0 0 1-.117-1.993L8.999 20z" />
    </g>
    <defs>
      <clipPath id="arrow-big-up-line_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBigUpLine;
