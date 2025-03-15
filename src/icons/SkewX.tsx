import * as React from "react";
import type { SVGProps } from "react";
const SvgSkewX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#skew-x_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 5.203v13.59a1 1 0 0 0 1.184.983l14-2.625a1 1 0 0 0 .816-.983v-8.34a1 1 0 0 0-.816-.983l-14-2.625A1 1 0 0 0 4 5.203"
      />
    </g>
    <defs>
      <clipPath id="skew-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSkewX;
