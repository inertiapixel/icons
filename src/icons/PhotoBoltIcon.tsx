import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoBoltIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-bolt-icon_svg__a)"
    >
      <path d="M15 8h.01M13.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5" />
      <path d="m3 16.002 5-5c.928-.893 2.072-.893 3 0l4 4" />
      <path d="m14 14.002 1-1c.669-.643 1.45-.823 2.18-.54M19 16l-2 3h4l-2 3" />
    </g>
    <defs>
      <clipPath id="photo-bolt-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoBoltIcon;
