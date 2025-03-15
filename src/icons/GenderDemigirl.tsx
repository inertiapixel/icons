import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderDemigirl = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gender-demigirl_svg__a)"
    >
      <path d="M7 9a5 5 0 1 0 10 0A5 5 0 0 0 7 9M12 14v7M9 18h3" />
    </g>
    <defs>
      <clipPath id="gender-demigirl_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGenderDemigirl;
