import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacScorpio = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zodiac-scorpio_svg__a)"
    >
      <path d="M3 4a2 2 0 0 1 2 2v9M5 6a2 2 0 1 1 4 0v9M9 6a2 2 0 1 1 4 0v10a3 3 0 0 0 3 3h5m0 0-3-3m3 3-3 3" />
    </g>
    <defs>
      <clipPath id="zodiac-scorpio_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZodiacScorpio;
