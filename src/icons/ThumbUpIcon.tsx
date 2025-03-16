import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#thumb-up-icon_svg__a)">
      <path d="M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865 3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3M5 10a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z" />
    </g>
    <defs>
      <clipPath id="thumb-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThumbUpIcon;
