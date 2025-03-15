import * as React from "react";
import type { SVGProps } from "react";
const SvgClockHour8 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clock-hour-8_svg__a)">
      <path
        fill="currentColor"
        d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-1 1v4.464l-2.555 1.704a1 1 0 0 0-.336 1.286l.059.1a1 1 0 0 0 1.387.278l3.027-2.018.087-.07.074-.075.075-.094.052-.08.035-.07.051-.132.031-.135.01-.082L13 12V7a1 1 0 0 0-1-1"
      />
    </g>
    <defs>
      <clipPath id="clock-hour-8_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockHour8;
