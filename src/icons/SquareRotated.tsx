import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareRotated = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#square-rotated_svg__a)">
      <path
        fill="currentColor"
        d="m9.795 2.895-6.9 6.9c-1.172 1.17-1.172 3.243 0 4.414l6.9 6.9c1.17 1.172 3.243 1.172 4.414 0l6.9-6.9c1.172-1.171 1.172-3.243 0-4.414l-6.9-6.9c-1.171-1.172-3.243-1.172-4.414 0"
      />
    </g>
    <defs>
      <clipPath id="square-rotated_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSquareRotated;
