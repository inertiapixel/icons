import * as React from "react";
import type { SVGProps } from "react";
const SvgPingPongIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ping-pong-icon_svg__a)"
    >
      <path d="M12.719 20.713a7.64 7.64 0 0 1-7.48-12.755l.72-.72a7.64 7.64 0 0 1 9.105-1.283L17.45 3.61a2.08 2.08 0 0 1 3.057 2.815l-.116.126-2.346 2.387a7.64 7.64 0 0 1-1.052 8.864" />
      <path d="M11 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9.3 5.3l9.4 9.4" />
    </g>
    <defs>
      <clipPath id="ping-pong-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPingPongIcon;
