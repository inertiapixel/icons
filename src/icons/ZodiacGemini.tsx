import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacGemini = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zodiac-gemini_svg__a)"
    >
      <path d="M3 3a21 21 0 0 0 18 0M3 20.999a21 21 0 0 1 18 0M7 4.5v15M17 4.5v15" />
    </g>
    <defs>
      <clipPath id="zodiac-gemini_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZodiacGemini;
