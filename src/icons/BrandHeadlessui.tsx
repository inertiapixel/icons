import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandHeadlessui = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-headlessui_svg__a)"
    >
      <path d="m6.743 4.324 7.82-1.267a4.456 4.456 0 0 1 5.111 3.686l1.267 7.82a4.456 4.456 0 0 1-3.686 5.111l-7.82 1.267a4.456 4.456 0 0 1-5.11-3.686l-1.268-7.82a4.456 4.456 0 0 1 3.686-5.11" />
      <path d="m7.251 7.703 7.897-1.28a1 1 0 0 1 1.147.828l.36 2.223-9.562 3.51-.67-4.134a1 1 0 0 1 .828-1.147" />
    </g>
    <defs>
      <clipPath id="brand-headlessui_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandHeadlessui;
