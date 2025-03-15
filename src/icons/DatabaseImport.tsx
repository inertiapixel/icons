import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabaseImport = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#database-import_svg__a)"
    >
      <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
      <path d="M4 6v6c0 1.657 3.582 3 8 3 .856 0 1.68-.05 2.454-.144M20 12V6" />
      <path d="M4 12v6c0 1.657 3.582 3 8 3q.256 0 .51-.006M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="database-import_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDatabaseImport;
