import * as React from "react";
import type { SVGProps } from "react";
const SvgFileTypeHtml = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-type-html_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M2 21v-6M5 15v6M2 18h3M20 15v6h2M13 21v-6l2 3 2-3v6M7.5 15h3M9 15v6" />
    </g>
    <defs>
      <clipPath id="file-type-html_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileTypeHtml;
