import * as React from "react";
import type { SVGProps } from "react";
const SvgNeedleThreadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#needle-thread-icon_svg__a)"
    >
      <path d="M2.998 20.999q-1-1 11.785-16.709a3.5 3.5 0 1 1 5.078 4.791Q4 21.999 2.998 20.999M17.5 6.5l-1 1" />
      <path d="M17 7c-2.333-2.667-3.5-4-5-4s-2 1-2 2c0 4 8.161 8.406 6 11-1.056 1.268-3.363 1.285-5.75.808M5.739 15.425C4.346 14.86 2 13.5 2 12M19.5 9.5 21 11" />
    </g>
    <defs>
      <clipPath id="needle-thread-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNeedleThreadIcon;
