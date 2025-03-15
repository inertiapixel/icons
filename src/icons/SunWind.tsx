import * as React from "react";
import type { SVGProps } from "react";
const SvgSunWind = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sun-wind_svg__a)"
    >
      <path d="M14.467 10A4 4 0 1 0 9 15.46M2 12h1M11 3v1M11 20v1M4.602 5.602l.7.7M17.4 5.602l-.7.7M5.302 17.7l-.7.7M15 13h5a2 2 0 0 0 0-4M12 16h5.9670000000000005A2 2 0 1 1 18 20h-.286" />
    </g>
    <defs>
      <clipPath id="sun-wind_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunWind;
