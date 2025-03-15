import * as React from "react";
import type { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#folder_svg__a)">
      <path
        fill="currentColor"
        d="M9 3a1 1 0 0 1 .608.206l.1.087L12.414 6H19a3 3 0 0 1 2.995 2.824L22 9v8a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V6a3 3 0 0 1 2.824-2.995L5 3z"
      />
    </g>
    <defs>
      <clipPath id="folder_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFolder;
