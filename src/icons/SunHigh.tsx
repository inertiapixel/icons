import * as React from "react";
import type { SVGProps } from "react";
const SvgSunHigh = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sun-high_svg__a)"
    >
      <path d="M14.83 14.826a3.999 3.999 0 1 0-5.556-5.753 3.999 3.999 0 0 0 5.556 5.753M6.344 17.656 4.93 19.07M6.344 6.344 4.93 4.93M17.656 6.344 19.07 4.93M17.656 17.656l1.414 1.414M4 12H2M12 4V2M20 12h2M12 20v2" />
    </g>
    <defs>
      <clipPath id="sun-high_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunHigh;
