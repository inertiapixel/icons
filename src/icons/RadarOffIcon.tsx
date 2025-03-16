import * as React from "react";
import type { SVGProps } from "react";
const SvgRadarOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#radar-off-icon_svg__a)"
    >
      <path d="M11.29 11.297a1 1 0 0 0 .71 1.705v8c2.488 0 4.74-1.01 6.37-2.642m1.675-2.32A8.96 8.96 0 0 0 21 12.003h-5M16 8.999a5 5 0 0 0-5.064-1.88M8.47 8.466A5 5 0 0 0 9 16.001" />
      <path d="M20.485 8.999A9 9 0 0 0 7.96 3.967M5.643 5.642a9 9 0 0 0 3.36 14.852M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="radar-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRadarOffIcon;
