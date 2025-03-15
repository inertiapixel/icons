import * as React from "react";
import type { SVGProps } from "react";
const SvgCashBanknote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cash-banknote_svg__a)">
      <path
        fill="currentColor"
        d="M19 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm-7 4a3 3 0 0 0-2.996 2.85L9 12a3 3 0 1 0 3-3m6.01 2H18a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m-12 0H6a1.002 1.002 0 0 0-.917 1.387A1 1 0 0 0 6.01 13a1 1 0 0 0 0-2"
      />
    </g>
    <defs>
      <clipPath id="cash-banknote_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCashBanknote;
