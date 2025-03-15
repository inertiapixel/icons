import * as React from "react";
import type { SVGProps } from "react";
const SvgPokerChip = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#poker-chip_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0M12 3v4M12 17v4M3 12h4M17 12h4M18.363 5.637l-2.828 2.828M8.465 15.535l-2.828 2.828M5.637 5.637l2.828 2.828M15.535 15.535l2.828 2.828" />
    </g>
    <defs>
      <clipPath id="poker-chip_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPokerChip;
