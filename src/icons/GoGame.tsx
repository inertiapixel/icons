import * as React from "react";
import type { SVGProps } from "react";
const SvgGoGame = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#go-game_svg__a)"
    >
      <path d="M4 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 12h7m4 0h7M3 6h1m4 0h13M3 18h1m4 0h8m4 0h1M6 3v1m0 4v8m0 4v1M12 3v7m0 4v7M18 3v13m0 4v1" />
    </g>
    <defs>
      <clipPath id="go-game_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGoGame;
