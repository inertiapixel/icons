import * as React from "react";
import type { SVGProps } from "react";
const SvgAccessibleOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#accessible-off_svg__a)"
    >
      <path d="m10 16.5 2-3m0 0 2 3m-2-3V12m2.627-1.376L15 10.5m-6 0 2.231.744M20.044 16.046A9 9 0 0 0 7.957 3.959M5.639 5.636a9 9 0 1 0 12.724 12.73" />
      <path d="M12 8a.5.5 0 1 0-.5-.5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="accessible-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAccessibleOff;
