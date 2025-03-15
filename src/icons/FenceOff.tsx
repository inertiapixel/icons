import * as React from "react";
import type { SVGProps } from "react";
const SvgFenceOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fence-off_svg__a)"
    >
      <path d="M12 12H4v4h12m4 0v-4h-4M6 16v4h4v-4M10 12v-2m0-4L8 4M6 6v6M14 16v4h4v-2M18 12V6l-2-2-2 2v4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="fence-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFenceOff;
