import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#coins-icon_svg__a)"
    >
      <path d="M9 14c0 1.657 2.686 3 6 3s6-1.343 6-3-2.686-3-6-3-6 1.343-6 3" />
      <path d="M9 14v4c0 1.656 2.686 3 6 3s6-1.344 6-3v-4M3 6c0 1.072 1.144 2.062 3 2.598s4.144.536 6 0S15 7.072 15 6s-1.144-2.062-3-2.598-4.144-.536-6 0S3 4.928 3 6" />
      <path d="M3 6v10c0 .888.772 1.45 2 2" />
      <path d="M3 11c0 .888.772 1.45 2 2" />
    </g>
    <defs>
      <clipPath id="coins-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoinsIcon;
