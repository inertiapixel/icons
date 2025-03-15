import * as React from "react";
import type { SVGProps } from "react";
const SvgScoreboard = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#scoreboard_svg__a)"
    >
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 5v2M12 10v1M12 14v1M12 18v1M7 3v2M17 3v2" />
      <path d="M15 10.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 1 0-3 0M6 9h1.5a1.5 1.5 0 0 1 0 3m0 0H7m.5 0a1.5 1.5 0 1 1 0 3H6" />
    </g>
    <defs>
      <clipPath id="scoreboard_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScoreboard;
