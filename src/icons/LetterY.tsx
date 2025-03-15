import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterY = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-y_svg__a)"
    >
      <path d="m7 4 5 9 5-9M12 13v7" />
    </g>
    <defs>
      <clipPath id="letter-y_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterY;
