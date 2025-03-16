import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderSymlinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#folder-symlink-icon_svg__a)"
    >
      <path d="M3 21v-4a3 3 0 0 1 3-3h5" />
      <path d="m8 17 3-3-3-3" />
      <path d="M3 11V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8" />
    </g>
    <defs>
      <clipPath id="folder-symlink-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFolderSymlinkIcon;
