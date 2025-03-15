import * as React from "react";
import type { SVGProps } from "react";
const SvgClover = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clover_svg__a)"
    >
      <path d="m12 10.001-3.396-3.44a2.104 2.104 0 0 1 0-2.95 2.04 2.04 0 0 1 2.912 0l.485.39.485-.39a2.04 2.04 0 0 1 2.912 0 2.104 2.104 0 0 1 0 2.95zM12 14l-3.396 3.44a2.104 2.104 0 0 0 0 2.95 2.04 2.04 0 0 0 2.912 0L12 20l.485.39a2.04 2.04 0 0 0 2.912 0 2.104 2.104 0 0 0 0-2.95zM14 12l3.44-3.396a2.104 2.104 0 0 1 2.95 0 2.04 2.04 0 0 1 0 2.912L20 12l.39.485a2.04 2.04 0 0 1 0 2.912 2.104 2.104 0 0 1-2.95 0zM10.001 12l-3.44-3.396a2.104 2.104 0 0 0-2.95 0 2.04 2.04 0 0 0 0 2.912l.39.485-.39.485a2.04 2.04 0 0 0 0 2.912 2.104 2.104 0 0 0 2.95 0z" />
    </g>
    <defs>
      <clipPath id="clover_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClover;
