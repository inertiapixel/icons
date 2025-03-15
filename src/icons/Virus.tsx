import * as React from "react";
import type { SVGProps } from "react";
const SvgVirus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#virus_svg__a)"
    >
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0M12 7V3M11 3h2M15.535 8.465l2.828-2.828M17.656 4.93l1.414 1.414M17 12h4M21 11v2M15.535 15.535l2.83 2.828M19.07 17.656l-1.414 1.414M12 17v4M13 21h-2M8.466 15.535l-2.83 2.828M6.343 19.07 4.93 17.656M7 12H3M3 13v-2M8.465 8.465 5.637 5.637M4.93 6.343 6.344 4.93" />
    </g>
    <defs>
      <clipPath id="virus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVirus;
