import * as React from "react";
import type { SVGProps } from "react";
const SvgSunElectricity = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sun-electricity_svg__a)"
    >
      <path d="M12 16a4 4 0 1 1 0-8M3 12h1M12 3v1M12 20v1M5.602 5.602l.7.7M6.302 17.7l-.7.7M20 7l-3 5h4l-3 5" />
    </g>
    <defs>
      <clipPath id="sun-electricity_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunElectricity;
