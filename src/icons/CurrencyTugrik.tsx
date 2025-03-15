import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyTugrik = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-tugrik_svg__a)"
    >
      <path d="M7 6h10M12 6v13M8 17l8-3M16 10l-8 3" />
    </g>
    <defs>
      <clipPath id="currency-tugrik_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyTugrik;
