import * as React from "react";
import type { SVGProps } from "react";
const SvgTournament = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tournament_svg__a)"
    >
      <path d="M2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0M18 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M2 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M2 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6" />
      <path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2M14 10h4" />
    </g>
    <defs>
      <clipPath id="tournament_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTournament;
