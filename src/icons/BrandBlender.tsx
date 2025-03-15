import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBlender = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-blender_svg__a)"
    >
      <path d="M9 14c0 1.326.632 2.598 1.757 3.535S13.41 19 15 19s3.117-.527 4.243-1.465C20.368 16.598 21 15.327 21 14s-.632-2.598-1.757-3.536C18.117 9.528 16.59 9 15 9s-3.117.527-4.243 1.464C9.632 11.403 9 12.674 9 14" />
      <path d="M14 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 16l9-6.5M6 9h9M13 5l5.65 5" />
    </g>
    <defs>
      <clipPath id="brand-blender_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandBlender;
