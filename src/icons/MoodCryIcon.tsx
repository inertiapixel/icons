import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodCryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-cry-icon_svg__a)"
    >
      <path d="M9 10h.01M15 10h.01M9.5 15.25a3.5 3.5 0 0 1 5 0M17.566 17.606a2 2 0 1 0 2.897.03L19 16z" />
      <path d="M20.865 13.517A9 9 0 0 0 21 12a9 9 0 1 0-9 9c.69 0 1.36-.076 2-.222" />
    </g>
    <defs>
      <clipPath id="mood-cry-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodCryIcon;
