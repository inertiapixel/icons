import * as React from "react";
import type { SVGProps } from "react";
const SvgSpiralOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#spiral-off_svg__a)"
    >
      <path d="M10 12.058a1.9 1.9 0 0 0 .614.743c.682.46 1.509.374 2.164-.02m1.103-2.92a3.3 3.3 0 0 0-2.256-2.254m-3.385.634a4.15 4.15 0 0 0-1.347 1.646c-1.095 2.432.29 5.248 2.71 6.246 1.955.806 4.097.35 5.65-.884m1.745-2.268.043-.103c1.36-3.343-.557-7.134-3.896-8.41-1.593-.61-3.27-.599-4.79-.113m-2.58 1.408a7.6 7.6 0 0 0-2.267 3.128c-1.63 4.253.823 9.024 5.082 10.576 3.21 1.17 6.676.342 9.124-1.738m1.869-2.149A9.36 9.36 0 0 0 21 11.064M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="spiral-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpiralOff;
