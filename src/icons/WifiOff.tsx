import * as React from "react";
import type { SVGProps } from "react";
const SvgWifiOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wifi-off_svg__a)"
    >
      <path d="M12 18h.01M9.172 15.171a4 4 0 0 1 5.656 0M6.344 12.343a7.96 7.96 0 0 1 3.864-2.14m4.163.155a7.97 7.97 0 0 1 3.287 2M3.516 9.517A12 12 0 0 1 7.06 7.062m3.1-.92a12 12 0 0 1 10.326 3.374M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="wifi-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWifiOff;
