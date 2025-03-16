import * as React from "react";
import type { SVGProps } from "react";
const SvgLeafIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#leaf-icon_svg__a)"
    >
      <path d="M5 21c.5-4.5 2.5-8 7-10" />
      <path d="M8.998 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9 0 1 0 3 2 5h3.014" />
    </g>
    <defs>
      <clipPath id="leaf-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLeafIcon;
