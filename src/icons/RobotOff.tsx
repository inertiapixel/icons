import * as React from "react";
import type { SVGProps } from "react";
const SvgRobotOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#robot-off_svg__a)"
    >
      <path d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4 0H8a2 2 0 0 1-2-2V6M12 2v2M9 12v9M15 15v6M5 16l4-2M9 18h6M14 8v.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="robot-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRobotOff;
