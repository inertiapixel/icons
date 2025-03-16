import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSkypeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-skype-icon_svg__a)"
    >
      <path d="M11.999 2.999a9 9 0 0 1 8.603 11.65 4.5 4.5 0 0 1-5.953 5.953A9 9 0 0 1 3.396 9.349a4.5 4.5 0 0 1 5.953-5.954 9 9 0 0 1 2.65-.396" />
      <path d="M8 14.5c.5 2 2.358 2.5 4 2.5 2.905 0 4-1.187 4-2.5 0-1.503-1.927-2.5-4-2.5s-4-1-4-2.5C8 8.187 9.095 7 12 7c1.642 0 3.5.5 4 2.5" />
    </g>
    <defs>
      <clipPath id="brand-skype-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSkypeIcon;
