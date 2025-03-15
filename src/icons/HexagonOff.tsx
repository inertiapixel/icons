import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hexagon-off_svg__a)"
    >
      <path d="m8.693 4.689 2.336-1.39a2.06 2.06 0 0 1 2 0l6 3.573H19a2 2 0 0 1 1 1.747v6.536c0 .246-.045.485-.13.707m-2.16 1.847-4.739 3.027a2 2 0 0 1-1.942 0l-6-3.833A2 2 0 0 1 4 15.156V8.619A2 2 0 0 1 5.029 6.87l1.154-.687M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hexagon-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagonOff;
