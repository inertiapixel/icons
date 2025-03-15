import * as React from "react";
import type { SVGProps } from "react";
const SvgBook1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#book-1_svg__a)"
    >
      <path d="M3 18.999a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 5.999a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6v13M12 6v13M21 6v13" />
    </g>
    <defs>
      <clipPath id="book-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBook1;
