import * as React from "react";
import type { SVGProps } from "react";
const SvgHandOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hand-off_svg__a)"
    >
      <path d="m3 3 18 18M8.002 13.5V8m.44-3.562a1.5 1.5 0 0 1 2.56 1.062m0 0V7m0-1.5v-2a1.502 1.502 0 0 1 2.074-1.386 1.5 1.5 0 0 1 .926 1.386V10m-3 1.008V12m3-6.5a1.5 1.5 0 1 1 3 0V12m0-4.5a1.5 1.5 0 1 1 3 0V16a6 6 0 0 1-6 6h-2c-2.114-.292-3.956-1.397-5-3l-2.7-5.25a1.7 1.7 0 0 1 2.75-2l.9 1.75" />
    </g>
    <defs>
      <clipPath id="hand-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandOff;
