import * as React from "react";
import type { SVGProps } from "react";
const SvgClockCancel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-cancel_svg__a)"
    >
      <path d="M20.997 12.25a9 9 0 1 0-8.718 8.746M16 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0M17 21l4-4" />
      <path d="M12 7v5l2 2" />
    </g>
    <defs>
      <clipPath id="clock-cancel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockCancel;
