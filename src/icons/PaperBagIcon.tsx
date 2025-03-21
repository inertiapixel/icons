import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperBagIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#paper-bag-icon_svg__a)"
    >
      <path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888A5 5 0 0 1 20 13.18V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5.82a5 5 0 0 1 .528-2.236L6 8V5a2 2 0 0 1 2-2" />
      <path d="M12 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 21a2 2 0 0 0 2-2v-5.82a5 5 0 0 0-.528-2.236L6 8M11 7h2" />
    </g>
    <defs>
      <clipPath id="paper-bag-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaperBagIcon;
