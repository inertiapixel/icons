import * as React from "react";
import type { SVGProps } from "react";
const SvgColorSwatchOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#color-swatch-off_svg__a)"
    >
      <path d="M13 13v4a4 4 0 0 0 6.832 2.825M21 17V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4" />
      <path d="m13 7.352-2-2a2 2 0 0 0-2.11-.461M6.76 6.765 5.342 8.18a2 2 0 0 0 0 2.828l9 9" />
      <path d="M7.3 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12M17 17v.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="color-swatch-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgColorSwatchOff;
