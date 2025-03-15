import * as React from "react";
import type { SVGProps } from "react";
const SvgOctagonOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#octagon-off_svg__a)"
    >
      <path d="M19.027 19.003a2 2 0 0 1-.65.444l-5.575 2.39a2.04 2.04 0 0 1-1.604 0l-5.575-2.39a2.04 2.04 0 0 1-1.07-1.07l-2.388-5.574a2.04 2.04 0 0 1 0-1.604l2.389-5.575c.103-.24.25-.457.433-.64m2.689-1.31 3.522-1.51a2.04 2.04 0 0 1 1.604 0l5.575 2.39c.48.207.863.59 1.07 1.07l2.388 5.575c.22.512.22 1.092 0 1.604l-1.51 3.522M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="octagon-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOctagonOff;
