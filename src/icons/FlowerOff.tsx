import * as React from "react";
import type { SVGProps } from "react";
const SvgFlowerOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flower-off_svg__a)"
    >
      <path d="M9.875 9.883a3 3 0 0 0 4.247 4.238m.581-3.423a3 3 0 0 0-1.418-1.409" />
      <path d="M9 5a3 3 0 1 1 6 0q0 .843-.776 2.64L13.5 9l1.76-1.893q.749-.899 1.27-1.205a2.967 2.967 0 0 1 4.07 1.099 3.01 3.01 0 0 1-1.09 4.098q-.561.326-1.846.535l-1.779.244m.292.282 1.223.166c1 .145 1.698.337 2.11.576a3.01 3.01 0 0 1 1.226 3.832m-2.277 1.733c-.666.1-1.346-.03-1.929-.369q-.521-.303-1.27-1.205L13.5 15l.724 1.36Q15 18.159 15 19a3 3 0 0 1-6 0q.001-.843.776-2.64L10.5 15l-1.76 1.893q-.748.9-1.27 1.205A2.97 2.97 0 0 1 3.4 17a3.01 3.01 0 0 1 1.09-4.098q.561-.327 1.846-.536L9 12l-2.4-.325c-1-.145-1.698-.337-2.11-.576A3.01 3.01 0 0 1 4.3 6.021c.37-.254.792-.42 1.235-.488M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="flower-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlowerOff;
