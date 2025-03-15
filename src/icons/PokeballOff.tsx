import * as React from "react";
import type { SVGProps } from "react";
const SvgPokeballOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pokeball-off_svg__a)"
    >
      <path d="M20.039 16.047A9 9 0 0 0 7.954 3.957m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
      <path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57-3.44a3 3 0 0 0-1.41-1.39M3 12h6m7 0h5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="pokeball-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPokeballOff;
