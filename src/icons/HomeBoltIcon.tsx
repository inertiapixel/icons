import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeBoltIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-bolt-icon_svg__a)"
    >
      <path d="m19 10-7-7-9 9h2v7a2 2 0 0 0 2 2h7.5" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2c.661 0 1.248.32 1.612.815M19 14l-2 4h4l-2 4" />
    </g>
    <defs>
      <clipPath id="home-bolt-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeBoltIcon;
