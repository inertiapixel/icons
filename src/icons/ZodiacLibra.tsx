import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacLibra = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zodiac-libra_svg__a)"
    >
      <path d="M5 20h14M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" />
    </g>
    <defs>
      <clipPath id="zodiac-libra_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZodiacLibra;
