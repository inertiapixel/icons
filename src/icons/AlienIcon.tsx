import * as React from "react";
import type { SVGProps } from "react";
const SvgAlienIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#alien-icon_svg__a)">
      <path
        fill="currentColor"
        d="M12.006 2c4.942 0 8.288 2.503 8.85 6.444a12.88 12.88 0 0 1-2.163 9.308 11.8 11.8 0 0 1-3.51 3.356c-1.982 1.19-4.376 1.19-6.373-.008a11.8 11.8 0 0 1-3.49-3.34 12.8 12.8 0 0 1-2.17-9.306C3.714 4.504 7.06 2 12.006 2m1.913 14.6a1 1 0 0 0-1.317-.517l-.146.055a1.5 1.5 0 0 1-1.054-.055l-.11-.04a1 1 0 0 0-.69 1.874 3.5 3.5 0 0 0 2.8 0 1 1 0 0 0 .517-1.317m-5.304-6.39a1 1 0 0 0-1.32 1.497l2 2 .094.083a1 1 0 0 0 1.32-1.497l-2-2zm8.094.083a1 1 0 0 0-1.414 0l-2 2-.083.094a1 1 0 0 0 1.497 1.32l2-2 .083-.094a1 1 0 0 0-.083-1.32"
      />
    </g>
    <defs>
      <clipPath id="alien-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlienIcon;
