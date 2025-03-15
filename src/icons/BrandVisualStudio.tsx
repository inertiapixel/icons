import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVisualStudio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-visual-studio_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4 8 2-1 10 13 4-2V6l-4-2L6 17l-2-1z"
      />
    </g>
    <defs>
      <clipPath id="brand-visual-studio_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandVisualStudio;
