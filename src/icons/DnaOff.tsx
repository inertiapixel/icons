import * as React from "react";
import type { SVGProps } from "react";
const SvgDnaOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dna-off_svg__a)"
    >
      <path d="M15.998 12a3.9 3.9 0 0 0-1.172-2.828A4.03 4.03 0 0 0 11.998 8M9.17 9.172a4 4 0 1 0 5.656 5.656" />
      <path d="M9.173 20.485a4 4 0 0 0-5.657-5.657M14.828 3.516a4 4 0 1 0 5.657 5.657M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="dna-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDnaOff;
