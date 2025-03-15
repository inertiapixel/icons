import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacPisces = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zodiac-pisces_svg__a)"
    >
      <path d="M5 3a21 21 0 0 1 0 18M18.999 3a21 21 0 0 0 0 18M5 12h14" />
    </g>
    <defs>
      <clipPath id="zodiac-pisces_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZodiacPisces;
