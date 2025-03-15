import * as React from "react";
import type { SVGProps } from "react";
const SvgSchool = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#school_svg__a)"
    >
      <path d="M22 9 12 5 2 9l10 4zm0 0v6" />
      <path d="M6 10.602v5.4c0 .795.632 1.558 1.757 2.12 1.126.564 2.652.88 4.243.88s3.117-.316 4.243-.88C17.368 17.56 18 16.798 18 16.003v-5.4" />
    </g>
    <defs>
      <clipPath id="school_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSchool;
