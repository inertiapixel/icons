import * as React from "react";
import type { SVGProps } from "react";
const SvgReceipt2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#receipt-2_svg__a)"
    >
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" />
      <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 1 1 0 3H10m2 0v1.5m0-9V8" />
    </g>
    <defs>
      <clipPath id="receipt-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReceipt2;
