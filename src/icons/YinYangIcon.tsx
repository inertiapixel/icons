import * as React from "react";
import type { SVGProps } from "react";
const SvgYinYangIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#yin-yang-icon_svg__a)">
      <path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M8 5.072A8 8 0 0 0 12 20l.2-.005a4 4 0 0 0 0-7.99L12 12a4 4 0 0 1-.2-7.995L12 4c-1.404 0-2.784.37-4 1.072M12 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
      <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </g>
    <defs>
      <clipPath id="yin-yang-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgYinYangIcon;
