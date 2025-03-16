import * as React from "react";
import type { SVGProps } from "react";
const SvgButterflyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#butterfly-icon_svg__a)"
    >
      <path d="M12 18.176a3 3 0 1 1-4.952-2.449l-.025.023A4.502 4.502 0 0 1 8.506 7c1.414 0 2.675.652 3.5 1.671a4.5 4.5 0 1 1 4.983 7.079 2.999 2.999 0 0 1-2.207 5.243A3 3 0 0 1 12.006 18zM12 19V9M9 3l3 2 3-2" />
    </g>
    <defs>
      <clipPath id="butterfly-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgButterflyIcon;
