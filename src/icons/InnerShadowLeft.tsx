import * as React from "react";
import type { SVGProps } from "react";
const SvgInnerShadowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#inner-shadow-left_svg__a)">
      <path
        fill="currentColor"
        d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142-10.237 3.905-14.142 0-3.905-10.237 0-14.142m3.535 2.12a1 1 0 0 0-1.414 0 7 7 0 0 0 0 9.9 1.002 1.002 0 0 0 1.719-.703 1 1 0 0 0-.305-.71 5 5 0 0 1 0-7.072 1 1 0 0 0 0-1.414"
      />
    </g>
    <defs>
      <clipPath id="inner-shadow-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInnerShadowLeft;
