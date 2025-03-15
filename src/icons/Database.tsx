import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabase = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#database_svg__a)"
    >
      <path d="M4 6c0 .796.843 1.559 2.343 2.121S9.878 9 12 9s4.157-.316 5.657-.879S20 6.796 20 6s-.843-1.559-2.343-2.121S14.122 3 12 3s-4.157.316-5.657.879S4 5.204 4 6" />
      <path d="M4 6v6c0 .796.843 1.559 2.343 2.121S9.878 15 12 15s4.157-.316 5.657-.879S20 12.796 20 12V6" />
      <path d="M4 12v6c0 .796.843 1.559 2.343 2.121S9.878 21 12 21s4.157-.316 5.657-.879S20 18.796 20 18v-6" />
    </g>
    <defs>
      <clipPath id="database_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDatabase;
