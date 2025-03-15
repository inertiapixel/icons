import * as React from "react";
import type { SVGProps } from "react";
const SvgFreeRights = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#free-rights_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M13.867 9.75c-.246-.48-.708-.768-1.2-.75h-1.334C10.597 9 10 9.67 10 10.5c0 .828.597 1.5 1.333 1.5h1.334c.736 0 1.333.67 1.333 1.5 0 .828-.597 1.499-1.333 1.499h-1.334c-.492.019-.954-.27-1.2-.75M12 7v2M12 15v2M6 6l1.5 1.5M16.5 16.5 18 18" />
    </g>
    <defs>
      <clipPath id="free-rights_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFreeRights;
