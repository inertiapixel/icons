import * as React from "react";
import type { SVGProps } from "react";
const SvgGifIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gif-icon_svg__a)"
    >
      <path d="M8 8H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4H7M12 8v8M16 12h3M20 8h-4v8" />
    </g>
    <defs>
      <clipPath id="gif-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGifIcon;
