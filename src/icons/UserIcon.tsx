import * as React from "react";
import type { SVGProps } from "react";
const SvgUserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#user-icon_svg__a)">
      <path d="M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5z" />
    </g>
    <defs>
      <clipPath id="user-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserIcon;
