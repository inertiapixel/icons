import * as React from "react";
import type { SVGProps } from "react";
const SvgGiftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gift-icon_svg__a)">
      <path
        fill="currentColor"
        d="M11 14v8H7a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1-3 3h-4v-8zM16.5 2a3.5 3.5 0 0 1 3.163 5H20a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-7V7h-2v5H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h.337A3.5 3.5 0 0 1 4 5.5C4 3.569 5.567 2 7.483 2c1.755-.03 3.312 1.093 4.381 2.935l.136.243c1.033-1.914 2.56-3.114 4.291-3.175zm-9 2a1.5 1.5 0 1 0 0 3h3.143C9.902 5.097 8.694 3.98 7.5 4m8.983 0c-1.18-.02-2.385 1.097-3.126 3H16.5a1.5 1.5 0 0 0-.017-3"
      />
    </g>
    <defs>
      <clipPath id="gift-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGiftIcon;
