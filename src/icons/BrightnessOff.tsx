import * as React from "react";
import type { SVGProps } from "react";
const SvgBrightnessOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brightness-off_svg__a)"
    >
      <path d="M12 3v5m0 4v9M5.64 5.632A9 9 0 0 0 18.36 18.37m1.68-2.318A9 9 0 0 0 7.966 3.954M12.5 8.502l4.15-4.15M12 14l1.025-.983m2.065-1.981 4.28-4.106M12 19.602l3.79-3.79m2-2 3.054-3.054M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="brightness-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrightnessOff;
