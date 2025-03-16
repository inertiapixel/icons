import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarm1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alarm-1-icon_svg__a)"
    >
      <path d="M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0" />
      <path d="M12 10v3h2M7 4 4.25 6M17 4l2.75 2" />
    </g>
    <defs>
      <clipPath id="alarm-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlarm1Icon;
