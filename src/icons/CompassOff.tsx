import * as React from "react";
import type { SVGProps } from "react";
const SvgCompassOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#compass-off_svg__a)"
    >
      <path d="m13 9 3-1-1 3m-1 3-6 2 2-6" />
      <path d="M20.044 16.046A9 9 0 0 0 7.957 3.959M5.639 5.636a9 9 0 1 0 12.724 12.73M12 3v2M12 19v2M3 12h2M19 12h2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="compass-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCompassOff;
