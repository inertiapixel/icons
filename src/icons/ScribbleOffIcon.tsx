import * as React from "react";
import type { SVGProps } from "react";
const SvgScribbleOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#scribble-off-icon_svg__a)"
    >
      <path d="M3 15c2 3 4 4 7 4 1.95 0 4.324-1.268 5.746-3.256m1.181-2.812A6 6 0 0 0 17 12c0-4-3-7-6-7-.642 0-1.239.069-1.78.201M6.728 6.716C6.258 7.333 6 8.102 6 9c0 2.5 2 5 6 5 .597 0 1.203-.055 1.808-.156m3.102-.921C19.145 11.97 21.062 10.5 22 9M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="scribble-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScribbleOffIcon;
