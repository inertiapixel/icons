import * as React from "react";
import type { SVGProps } from "react";
const SvgFireExtinguisher = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fire-extinguisher_svg__a)"
    >
      <path d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9a4 4 0 0 1 4-4M9 16h6M12 7V4M16 5l-4-1 4-1M12 4H9a3 3 0 0 0-3 3" />
    </g>
    <defs>
      <clipPath id="fire-extinguisher_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFireExtinguisher;
