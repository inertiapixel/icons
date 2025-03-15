import * as React from "react";
import type { SVGProps } from "react";
const SvgDogBowl = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dog-bowl_svg__a)"
    >
      <path d="m10 15 5.586-5.586A2 2 0 1 1 19 8a2 2 0 1 1-1.413 3.414L14 15" />
      <path d="M12.001 13 8.415 9.413A2 2 0 1 0 5.001 8a2 2 0 1 0 1.413 3.414L10.001 15M3 20h18c-.175-1.671-.046-3.345-2-5H5q-2 1.5-2 5" />
    </g>
    <defs>
      <clipPath id="dog-bowl_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDogBowl;
