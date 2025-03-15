import * as React from "react";
import type { SVGProps } from "react";
const SvgCapture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#capture_svg__a)">
      <path d="M8 3a1 1 0 0 1 .117 1.993L8 5H6a1 1 0 0 0-.993.883L5 6v2a1 1 0 0 1-1.993.117L3 8V6a3 3 0 0 1 2.824-2.995L6 3zM4 15a1 1 0 0 1 .993.883L5 16v2a1 1 0 0 0 .883.993L6 19h2a1 1 0 0 1 .117 1.993L8 21H6a3 3 0 0 1-2.995-2.824L3 18v-2a1 1 0 0 1 1-1M17.999 3a3 3 0 0 1 2.995 2.824l.005.176v2a1 1 0 0 1-1.993.117L18.999 8V6a1 1 0 0 0-.883-.993L17.999 5h-2a1 1 0 0 1-.117-1.993L15.999 3zM19.999 15a1 1 0 0 1 .993.883l.007.117v2a3 3 0 0 1-2.824 2.995l-.176.005h-2a1 1 0 0 1-.117-1.993l.117-.007h2a1 1 0 0 0 .993-.883l.007-.117v-2a1 1 0 0 1 1-1M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8" />
    </g>
    <defs>
      <clipPath id="capture_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCapture;
