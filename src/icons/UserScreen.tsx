import * as React from "react";
import type { SVGProps } from "react";
const SvgUserScreen = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#user-screen_svg__a)"
    >
      <path d="M19.03 17.818A3 3 0 0 0 21 15V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8c0 1.317.85 2.436 2.03 2.84" />
      <path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0M8 21a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
    </g>
    <defs>
      <clipPath id="user-screen_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserScreen;
