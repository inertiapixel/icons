import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hourglass_svg__a)">
      <path
        fill="currentColor"
        d="M17 2a2 2 0 0 1 1.995 1.85L19 4v2a7 7 0 0 1-3.393 6 7 7 0 0 1 3.388 5.728L19 18v2a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20v-2a7 7 0 0 1 3.393-6 7 7 0 0 1-3.388-5.728L5 6V4a2 2 0 0 1 1.85-1.995L7 2z"
      />
    </g>
    <defs>
      <clipPath id="hourglass_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHourglass;
