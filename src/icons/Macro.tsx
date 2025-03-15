import * as React from "react";
import type { SVGProps } from "react";
const SvgMacro = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#macro_svg__a)">
      <path
        fill="currentColor"
        d="M17.994 2.889 18 3v3a6 6 0 0 1-5 5.916v4.186A6.98 6.98 0 0 1 18 14a1 1 0 0 1 1 1 7 7 0 1 1-14 0 1 1 0 0 1 1-1c1.96 0 3.731.805 5.002 2.103L11 11.918A6 6 0 0 1 6 6V3a1 1 0 0 1 1.555-.832l2.317 1.544 1.42-1.42a1 1 0 0 1 1.32-.082l.095.083 1.42 1.419 2.318-1.544a1 1 0 0 1 1.55.72M7.13 16.129l.03.134a5.01 5.01 0 0 0 3.71 3.61 5 5 0 0 0-3.74-3.744m9.742.002-.134.03a5.01 5.01 0 0 0-3.61 3.71 5 5 0 0 0 3.744-3.74"
      />
    </g>
    <defs>
      <clipPath id="macro_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMacro;
