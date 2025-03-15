import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#diamond_svg__a)">
      <path
        fill="currentColor"
        d="M18 4a1 1 0 0 1 .783.378l.074.108 3 5a1 1 0 0 1-.032 1.078l-.08.103-8.53 9.533a1.7 1.7 0 0 1-1.215.51c-.4 0-.785-.14-1.11-.417l-.135-.126-8.5-9.5A1 1 0 0 1 2.083 9.6l.06-.115 3.013-5.022.064-.09a1 1 0 0 1 .155-.154l.09-.064.087-.05.05-.023.06-.025.11-.032.111-.02L6 4zM9.114 7.943a1 1 0 0 0-1.37.343l-.6 1-.06.116a1 1 0 0 0 .176 1.07l2 2.2.09.088a1 1 0 0 0 1.323-.02l.087-.09a1 1 0 0 0-.02-1.323l-1.5-1.65.217-.363.055-.103a1 1 0 0 0-.398-1.268"
      />
    </g>
    <defs>
      <clipPath id="diamond_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiamond;
