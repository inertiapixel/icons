import * as React from "react";
import type { SVGProps } from "react";
const SvgSausageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sausage-icon_svg__a)"
    >
      <path d="M5.5 5.5A2.5 2.5 0 0 0 3 8c0 7.18 5.82 13 13 13a2.5 2.5 0 0 0 0-5 8 8 0 0 1-8-8 2.5 2.5 0 0 0-2.5-2.5" />
      <path d="M5.196 5.519 3.953 3.53A1 1 0 0 1 4.8 2h1.392a1 1 0 0 1 .848 1.53L5.796 5.52M18.483 18.223l1.988-1.243a1 1 0 0 1 1.53.848v1.392a1 1 0 0 1-1.53.848l-1.99-1.245" />
    </g>
    <defs>
      <clipPath id="sausage-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSausageIcon;
