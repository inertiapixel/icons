import * as React from "react";
import type { SVGProps } from "react";
const SvgPointer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pointer_svg__a)">
      <path
        fill="currentColor"
        d="M3.039 4.278 6.943 17.84c.185.837.92 1.516 1.83 1.642l.17.016a2.2 2.2 0 0 0 1.983-1.006l.045-.078 1.4-2.072 4.05 4.05a2.066 2.066 0 0 0 2.924 0l1.047-1.047c.388-.388.606-.913.606-1.461l-.008-.182a2.07 2.07 0 0 0-.598-1.28l-4.047-4.048 2.103-1.412c.726-.385 1.18-1.278 1.053-2.19A2.2 2.2 0 0 0 17.8 6.93L4.276 3.039a1 1 0 0 0-1.236 1.24z"
      />
    </g>
    <defs>
      <clipPath id="pointer_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPointer;
