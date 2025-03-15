import * as React from "react";
import type { SVGProps } from "react";
const SvgIroning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ironing_svg__a)">
      <path
        fill="currentColor"
        d="M16.459 5a4 4 0 0 1 3.945 3.343l.577 3.464.81 4.865A2 2 0 0 1 19.82 19H3a1 1 0 0 1-1-1 8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 7H9a1 1 0 0 1 0-2z"
      />
    </g>
    <defs>
      <clipPath id="ironing_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIroning;
