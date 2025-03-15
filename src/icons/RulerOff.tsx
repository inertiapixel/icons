import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ruler-off_svg__a)"
    >
      <path d="M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4m-3.713.299A1 1 0 0 0 11 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5c0-.284.118-.54.308-.722M4 8h2M4 12h3M4 16h2M12 4v3M16 4v2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ruler-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRulerOff;
