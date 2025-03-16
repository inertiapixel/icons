import * as React from "react";
import type { SVGProps } from "react";
const SvgYinYang1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#yin-yang-1-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M12 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 1 1 0 9" />
      <path
        fill="currentColor"
        d="M12 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      />
    </g>
    <defs>
      <clipPath id="yin-yang-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgYinYang1Icon;
