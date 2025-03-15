import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDebian = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-debian_svg__a)"
    >
      <path d="M12 16.998c-2.397-.943-4-3.153-4-5.635 0-2.19 1.039-3.14 1.604-3.595C12.25 5.635 16 7.498 16 10.998c0 2.5-2.905 2.121-3.5 1.5-.595-.62-1-1.5-.5-2.5" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
    </g>
    <defs>
      <clipPath id="brand-debian_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandDebian;
