import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterYSmall = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-y-small_svg__a)"
    >
      <path d="m10 8 2 5 2-5M12 16v-3" />
    </g>
    <defs>
      <clipPath id="letter-y-small_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterYSmall;
