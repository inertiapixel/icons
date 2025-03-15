import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#globe_svg__a)">
      <path d="M11 4a5 5 0 1 1-4.995 5.217L6 9l.005-.217A5 5 0 0 1 11 4" />
      <path d="M14.133 1.502a1 1 0 0 1 1.365-.37A9.016 9.016 0 1 1 5.094 15.756a1.001 1.001 0 0 1 1.312-1.51 7.016 7.016 0 1 0 8.096-11.378 1 1 0 0 1-.369-1.365" />
      <path d="M11 16a1 1 0 0 1 .993.883L12 17v4a1 1 0 0 1-1.993.117L10 21v-4a1 1 0 0 1 1-1" />
      <path d="M14.999 20a1 1 0 0 1 .117 1.993l-.117.007h-8a1 1 0 0 1-.117-1.993L6.999 20z" />
    </g>
    <defs>
      <clipPath id="globe_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGlobe;
