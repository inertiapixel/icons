import * as React from "react";
import type { SVGProps } from "react";
const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#highlight_svg__a)"
    >
      <path d="M3 19h4L17.5 8.5a2.829 2.829 0 0 0-4-4L3 15zM12.5 5.5l4 4M4.5 13.5l4 4M21 15v4h-8l4-4z" />
    </g>
    <defs>
      <clipPath id="highlight_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHighlight;
