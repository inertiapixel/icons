import * as React from "react";
import type { SVGProps } from "react";
const SvgFlower = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flower_svg__a)"
    >
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M12 2a3 3 0 0 1 3 3q0 .843-.776 2.64L13.5 9l1.76-1.893q.749-.899 1.27-1.205a2.967 2.967 0 0 1 4.07 1.099 3.01 3.01 0 0 1-1.09 4.098q-.561.326-1.846.535L15 12l2.4.326c1 .145 1.698.337 2.11.576a3.01 3.01 0 0 1 .327 4.977 2.97 2.97 0 0 1-3.307.219q-.521-.303-1.27-1.205L13.5 15l.724 1.36Q15 18.159 15 19a3 3 0 0 1-6 0q.001-.843.776-2.64L10.5 15l-1.76 1.893q-.748.9-1.27 1.205A2.97 2.97 0 0 1 3.4 17a3.01 3.01 0 0 1 1.09-4.098q.561-.327 1.846-.536L9 12l-2.4-.325c-1-.145-1.698-.337-2.11-.576a3.01 3.01 0 0 1-.326-4.978A2.97 2.97 0 0 1 7.47 5.9q.522.304 1.27 1.205L10.5 9Q9 5.562 9 5a3 3 0 0 1 3-3" />
    </g>
    <defs>
      <clipPath id="flower_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlower;
