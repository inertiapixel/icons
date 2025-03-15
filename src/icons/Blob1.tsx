import * as React from "react";
import type { SVGProps } from "react";
const SvgBlob1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#blob-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.897 20.188C7.567 20.94 9.793 21 12 21s4.434-.059 6.104-.812c.868-.392 1.614-.982 2.133-1.856.514-.865.763-1.94.763-3.234 0-2.577-.983-5.315-2.557-7.416C16.873 5.588 14.61 4 12 4S7.127 5.588 5.557 7.682C3.983 9.783 3 12.522 3 15.098c0 1.295.249 2.369.763 3.234.519.874 1.265 1.464 2.134 1.856"
      />
    </g>
    <defs>
      <clipPath id="blob-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBlob1;
