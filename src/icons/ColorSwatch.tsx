import * as React from "react";
import type { SVGProps } from "react";
const SvgColorSwatch = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#color-swatch_svg__a)"
    >
      <path d="M19 3h-4a2 2 0 0 0-2 2v12a4 4 0 1 0 8 0V5a2 2 0 0 0-2-2" />
      <path d="m13 7.351-2-2a2 2 0 0 0-2.829 0L5.343 8.18a2 2 0 0 0 0 2.828l9 9" />
      <path d="M7.3 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12M17 17v.01" />
    </g>
    <defs>
      <clipPath id="color-swatch_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgColorSwatch;
