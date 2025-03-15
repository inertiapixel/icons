import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#paperclip_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 7-6.5 6.5a2.121 2.121 0 1 0 3 3L18 10a4.243 4.243 0 0 0-6-6l-6.5 6.5a6.364 6.364 0 1 0 9 9L21 13"
      />
    </g>
    <defs>
      <clipPath id="paperclip_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaperclip;
