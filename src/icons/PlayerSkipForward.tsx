import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayerSkipForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#player-skip-forward_svg__a)">
      <path d="M3 5v14a1 1 0 0 0 1.504.864l12-7a1 1 0 0 0 0-1.728l-12-7A1 1 0 0 0 3 5M20 4a1 1 0 0 1 .993.883L21 5v14a1 1 0 0 1-1.993.117L19 19V5a1 1 0 0 1 1-1" />
    </g>
    <defs>
      <clipPath id="player-skip-forward_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayerSkipForward;
