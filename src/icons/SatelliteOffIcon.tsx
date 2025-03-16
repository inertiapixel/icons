import * as React from "react";
import type { SVGProps } from "react";
const SvgSatelliteOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#satellite-off-icon_svg__a)"
    >
      <path d="m7.707 3.707 5.586 5.586M12 12l-1.293 1.293a1 1 0 0 1-1.414 0L3.707 7.707a1 1 0 0 1 0-1.414L5 5M6 10l-3 3 3 3 3-3M10 6l3-3 3 3-3 3M12 12l1.5 1.5M14.5 16.999c.69 0 1.316-.28 1.769-.733M15 21c1.654 0 3.151-.67 4.237-1.752m1.507-2.507A6 6 0 0 0 21 15M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="satellite-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSatelliteOffIcon;
