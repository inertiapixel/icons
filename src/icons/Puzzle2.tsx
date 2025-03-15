import * as React from "react";
import type { SVGProps } from "react";
const SvgPuzzle2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#puzzle-2_svg__a)"
    >
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M12 4v2.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5V12M12 12v1.5a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5V20M20 12h-2.5a.5.5 0 0 1-.5-.5 1.5 1.5 0 1 0-3 0 .5.5 0 0 1-.5.5H12M12 12h-1.5a.5.5 0 0 0-.5.5 1.5 1.5 0 0 1-3 0 .5.5 0 0 0-.5-.5H4" />
    </g>
    <defs>
      <clipPath id="puzzle-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPuzzle2;
