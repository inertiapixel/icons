import * as React from "react";
import type { SVGProps } from "react";
const SvgHemisphereOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hemisphere-off-icon_svg__a)"
    >
      <path d="M6.588 6.603C4.41 7.15 3 8.02 3 9c0 1.657 4.03 3 9 3m3.72-.267C18.834 11.26 21 10.215 21 9c0-1.657-4.03-3-9-3q-.995 0-1.93.07" />
      <path d="M3 9a9 9 0 0 0 13.677 7.69m2.165-1.843A8.97 8.97 0 0 0 21 9M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hemisphere-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHemisphereOffIcon;
