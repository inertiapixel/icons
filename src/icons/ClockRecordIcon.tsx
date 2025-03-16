import * as React from "react";
import type { SVGProps } from "react";
const SvgClockRecordIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-record-icon_svg__a)"
    >
      <path d="M20.999 12.3a9 9 0 1 0-8.683 8.695" />
      <path d="M12 7v5l2 2M16 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    </g>
    <defs>
      <clipPath id="clock-record-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockRecordIcon;
