import * as React from "react";
import type { SVGProps } from "react";
const SvgOvalVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#oval-vertical-icon_svg__a)">
      <path
        fill="currentColor"
        d="M12 5C6.543 5 2 8.028 2 12s4.543 7 10 7 10-3.028 10-7-4.543-7-10-7"
      />
    </g>
    <defs>
      <clipPath id="oval-vertical-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOvalVerticalIcon;
