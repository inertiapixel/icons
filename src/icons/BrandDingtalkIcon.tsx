import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDingtalkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-dingtalk-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      <path d="m8 7.5 7.02 2.632a1 1 0 0 1 .567 1.33L14.5 14H16l-5 4 1-4c-3.1.03-3.114-3.139-4-6.5" />
    </g>
    <defs>
      <clipPath id="brand-dingtalk-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandDingtalkIcon;
