import * as React from "react";
import type { SVGProps } from "react";
const SvgArtboard1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#artboard-1_svg__a)"
    >
      <path d="M8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM3 8h1M3 16h1M8 3v1M16 3v1M20 8h1M20 16h1M8 20v1M16 20v1" />
    </g>
    <defs>
      <clipPath id="artboard-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArtboard1;
