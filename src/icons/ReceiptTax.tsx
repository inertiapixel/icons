import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptTax = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#receipt-tax_svg__a)"
    >
      <path d="m9 14 6-6" />
      <path
        fill="currentColor"
        d="M9.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M14.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      />
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2-2 2-2-2-2 2-2-2z" />
    </g>
    <defs>
      <clipPath id="receipt-tax_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReceiptTax;
