import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#zoom-in_svg__a)">
      <path
        fill="currentColor"
        d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-4.943-4.944a8 8 0 0 1-12.49-6.332L2 10l.005-.285A8 8 0 0 1 14 3.072M10 6a1 1 0 0 0-.993.883L9 7v2H7l-.117.007a1 1 0 0 0 0 1.986L7 11h2v2l.007.117a1 1 0 0 0 1.986 0L11 13v-2h2l.117-.007a1 1 0 0 0 0-1.986L13 9h-2V7l-.007-.117A1 1 0 0 0 10 6"
      />
    </g>
    <defs>
      <clipPath id="zoom-in_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZoomIn;
