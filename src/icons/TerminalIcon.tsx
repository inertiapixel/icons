import * as React from "react";
import type { SVGProps } from "react";
const SvgTerminalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#terminal-icon_svg__a)"
    >
      <path d="m5 7 5 5-5 5M12 19h7" />
    </g>
    <defs>
      <clipPath id="terminal-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTerminalIcon;
