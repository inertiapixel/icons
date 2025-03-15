import * as React from "react";
import type { SVGProps } from "react";
const SvgTrashOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#trash-off_svg__a)"
    >
      <path d="m3 3 18 18M4 7h3m4 0h9M10 11v6M14 14v3M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l.077-.923M18.383 14.373 18.999 7M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    </g>
    <defs>
      <clipPath id="trash-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrashOff;
