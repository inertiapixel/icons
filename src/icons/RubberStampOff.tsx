import * as React from "react";
import type { SVGProps } from "react";
const SvgRubberStampOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rubber-stamp-off_svg__a)"
    >
      <path d="M8.273 8.273c.805 2.341 2.857 5.527-1.484 5.527C4.421 13.8 3 13.8 3 17.85h14.85M5 21h14M3 3l18 18M8.71 4.722A3.99 3.99 0 0 1 12 3a4 4 0 0 1 4 4c0 .992-.806 2.464-1.223 3.785m6.198 6.196c-.182-2.883-1.332-3.153-3.172-3.178" />
    </g>
    <defs>
      <clipPath id="rubber-stamp-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRubberStampOff;
