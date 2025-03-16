import * as React from "react";
import type { SVGProps } from "react";
const SvgWashHandIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wash-hand-icon_svg__a)"
    >
      <path d="M3.484 8.965q.252.031.514.035c.79.009 1.54-.178 2-.5.426-.296.777-.5 1.5-.5h1M16 8l.615.034c.552.067 1.046.23 1.385.466.461.322 1.21.509 2 .5q.256-.002.503-.034M14.001 10.5l.586.578a1.516 1.516 0 0 0 2 0c.476-.433.55-1.112.176-1.622L15.001 7c-.37-.506-1.33-1-2-1H9.884a1 1 0 0 0-.992.876l-.499 3.986A3.86 3.86 0 0 0 11.001 15a2.28 2.28 0 0 0 3-2.162z" />
      <path d="m3 6 1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6" />
    </g>
    <defs>
      <clipPath id="wash-hand-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWashHandIcon;
