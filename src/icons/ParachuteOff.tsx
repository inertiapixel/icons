import * as React from "react";
import type { SVGProps } from "react";
const SvgParachuteOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#parachute-off_svg__a)"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10-1.737 0-3.37.443-4.794 1.222m-2.28 1.71A9.97 9.97 0 0 0 2 12" />
      <path d="M22 12c0-1.66-1.46-3-3.25-3-1.63 0-2.973 1.099-3.212 2.54m-.097-.09c-.23-1.067-1.12-1.935-2.29-2.284m-3.445.568C8.967 10.284 8.5 11.094 8.5 12c0-1.66-1.46-3-3.25-3C3.45 9 2 10.34 2 12M2 12l10 10-3.5-10M14.582 14.622 12 21.998l4.992-4.992m2.014-2.014 3-3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="parachute-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgParachuteOff;
