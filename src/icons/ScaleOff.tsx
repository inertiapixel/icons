import * as React from "react";
import type { SVGProps } from "react";
const SvgScaleOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#scale-off_svg__a)"
    >
      <path d="M7 20h10M9.453 5.425 12.001 5l6 1M12 3v5m0 4v8M9 12 6 6l-3 6a3 3 0 0 0 6 0M18.874 14.871A3 3 0 0 0 21.001 12l-3-6-2.677 5.355M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="scale-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScaleOff;
