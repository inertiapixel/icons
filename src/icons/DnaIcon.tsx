import * as React from "react";
import type { SVGProps } from "react";
const SvgDnaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dna-icon_svg__a)"
    >
      <path d="M14.83 14.826a3.999 3.999 0 1 0-5.556-5.753 3.999 3.999 0 0 0 5.556 5.753" />
      <path d="M9.173 20.485a4 4 0 0 0-5.657-5.657M14.828 3.516a4 4 0 1 0 5.657 5.657" />
    </g>
    <defs>
      <clipPath id="dna-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDnaIcon;
