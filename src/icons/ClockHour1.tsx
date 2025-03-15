import * as React from "react";
import type { SVGProps } from "react";
const SvgClockHour1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clock-hour-1_svg__a)">
      <path
        fill="currentColor"
        d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-5.401 9.576.052.02.08.027.08.019.072.01L12 13l.076-.003.135-.02.082-.02.103-.04.073-.034.078-.046.06-.042.08-.07.083-.087.062-.083 2-3a1.001 1.001 0 0 0-1.664-1.11l-.168.25V7a1 1 0 0 0-.883-.993L12 6a1 1 0 0 0-1 1v5.026l.009.105.02.107.04.129.048.102.046.078.042.06.069.08.088.083.083.062.09.053z"
      />
    </g>
    <defs>
      <clipPath id="clock-hour-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockHour1;
