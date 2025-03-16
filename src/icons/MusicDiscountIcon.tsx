import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicDiscountIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#music-discount-icon_svg__a)"
    >
      <path d="M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9 17V4h10v9M9 8h10M16 21l5-5M21 21v.01M16 16v.01" />
    </g>
    <defs>
      <clipPath id="music-discount-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMusicDiscountIcon;
