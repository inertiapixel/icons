import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderHermaphrodite = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gender-hermaphrodite_svg__a)"
    >
      <path d="M12 14v7M9 18h6M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
      <path d="M15 3a3 3 0 0 1-6 0" />
    </g>
    <defs>
      <clipPath id="gender-hermaphrodite_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGenderHermaphrodite;
