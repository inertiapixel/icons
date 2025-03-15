import * as React from "react";
import type { SVGProps } from "react";
const SvgGaugeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gauge-off_svg__a)"
    >
      <path d="M20.039 16.052A9 9 0 0 0 7.972 3.95M5.639 5.636a9 9 0 0 0 12.73 12.726" />
      <path d="M11.283 11.305a1 1 0 1 0 1.419 1.41M14 10l2-2M7 12c0-1.386.564-2.64 1.475-3.546m2.619-1.372Q11.536 7 12 7M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="gauge-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGaugeOff;
