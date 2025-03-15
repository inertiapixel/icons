import * as React from "react";
import type { SVGProps } from "react";
const SvgBallpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ballpen_svg__a)">
      <path
        fill="currentColor"
        d="M17.827 2a3 3 0 0 1 1.977.743l.145.136 1.17 1.17a3 3 0 0 1 .137 4.1l-.136.144L19.414 10l2.292 2.293a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.497-1.32l.083-.094L19.584 13l-1.586-1.585-7.464 7.464a3.83 3.83 0 0 1-2.474 1.114l-.233.008c-.674 0-1.33-.178-1.905-.508l-1.216 1.214a1 1 0 0 1-1.497-1.32l.083-.094 1.214-1.216a3.83 3.83 0 0 1 .454-4.442l.16-.17L15.706 2.879a3 3 0 0 1 1.923-.873zm0 2a1 1 0 0 0-.608.206l-.1.087L15.414 6l2.586 2.585 1.707-1.706a1 1 0 0 0 .284-.576l.01-.131a1 1 0 0 0-.207-.609l-.087-.099-1.171-1.171A1 1 0 0 0 17.827 4"
      />
    </g>
    <defs>
      <clipPath id="ballpen_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBallpen;
