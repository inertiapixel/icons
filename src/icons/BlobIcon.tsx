import * as React from "react";
import type { SVGProps } from "react";
const SvgBlobIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#blob-icon_svg__a)">
      <path
        fill="currentColor"
        d="M12 3c2.78 0 5.349 1.556 7.243 4.083C20.97 9.388 22 12.34 22 15.098c0 1.47-.293 2.717-.903 3.745-.602 1.014-1.479 1.758-2.582 2.256-1.593.719-3.333.901-6.515.901s-4.922-.182-6.515-.9c-1.103-.499-1.98-1.243-2.582-2.257C2.293 17.815 2 16.569 2 15.098c0-2.758 1.03-5.71 2.757-8.015C6.651 4.556 9.22 3 12 3"
      />
    </g>
    <defs>
      <clipPath id="blob-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBlobIcon;
