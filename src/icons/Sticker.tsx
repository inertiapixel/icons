import * as React from "react";
import type { SVGProps } from "react";
const SvgSticker = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sticker_svg__a)"
    >
      <path d="m20 12-2 .5A6.002 6.002 0 0 1 11.5 6l.5-2z" />
      <path d="M20 12a8 8 0 1 1-8-8" />
    </g>
    <defs>
      <clipPath id="sticker_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSticker;
