import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#thumb-down-icon_svg__a)">
      <path d="M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173.005-.177-.02-.196-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866 3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3M5 14.008a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005z" />
    </g>
    <defs>
      <clipPath id="thumb-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThumbDownIcon;
