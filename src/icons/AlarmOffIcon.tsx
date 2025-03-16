import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alarm-off-icon_svg__a)"
    >
      <path d="M7.586 7.568a7 7 0 1 0 9.833 9.864m1.35-2.645a7 7 0 0 0-8.536-8.56" />
      <path d="M12 12v1h1M5.261 5.266 4.25 6M17 4l2.75 2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="alarm-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlarmOffIcon;
