import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#info-square-icon_svg__a)">
      <path
        fill="currentColor"
        d="M19 2a3 3 0 0 1 2.995 2.824L22 5v14a3 3 0 0 1-2.824 2.995L19 22H5a3 3 0 0 1-2.995-2.824L2 19V5a3 3 0 0 1 2.824-2.995L5 2zm-7 9h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"
      />
    </g>
    <defs>
      <clipPath id="info-square-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInfoSquareIcon;
