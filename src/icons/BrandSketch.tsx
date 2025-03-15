import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSketch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-sketch_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3.262 10.878 8 8.789c.4.44 1.091.44 1.491 0l8-8.79c.313-.344.349-.86.087-1.243L17.303 4.44a1 1 0 0 0-.823-.436H7.554a1 1 0 0 0-.823.436l-3.54 5.192c-.263.385-.227.9.087 1.246z"
      />
    </g>
    <defs>
      <clipPath id="brand-sketch_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSketch;
