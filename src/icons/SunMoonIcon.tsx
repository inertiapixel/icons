import * as React from "react";
import type { SVGProps } from "react";
const SvgSunMoonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sun-moon-icon_svg__a)"
    >
      <path d="M9.172 14.829a4 4 0 1 1 5.657-5.657" />
      <path d="m11.293 12.707.174.247a7.5 7.5 0 0 0 8.845 2.492A8.998 8.998 0 0 1 5.64 18.36M3 12h1M12 3v1M5.602 5.602l.7.7M3 21 21 3" />
    </g>
    <defs>
      <clipPath id="sun-moon-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunMoonIcon;
