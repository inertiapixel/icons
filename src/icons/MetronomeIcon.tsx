import * as React from "react";
import type { SVGProps } from "react";
const SvgMetronomeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#metronome-icon_svg__a)"
    >
      <path d="m14.152 8.188-.72-3.236a2.492 2.492 0 0 0-4.867 0L5.54 18.566A2 2 0 0 0 7.492 21h7.014a2 2 0 0 0 1.952-2.434l-.524-2.357m-4.935 1.79 9-13M19 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="metronome-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMetronomeIcon;
