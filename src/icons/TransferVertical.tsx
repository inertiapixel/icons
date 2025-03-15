import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferVertical = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#transfer-vertical_svg__a)"
    >
      <path d="M10 4v16l-6-5.5M14 20V4l6 5.5" />
    </g>
    <defs>
      <clipPath id="transfer-vertical_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransferVertical;
