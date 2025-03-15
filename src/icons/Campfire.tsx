import * as React from "react";
import type { SVGProps } from "react";
const SvgCampfire = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#campfire_svg__a)">
      <path d="M19.759 16.03a1 1 0 0 1 .597 1.904l-.111.035-16 4a1 1 0 0 1-.597-1.905l.11-.035z" />
      <path d="M3.03 16.757a1 1 0 0 1 1.098-.749l.115.022 16 4a1 1 0 0 1-.37 1.962l-.116-.022-16-4a1 1 0 0 1-.727-1.213M13.553 2.105C9.379 4.191 7 7.463 7 11a5 5 0 0 0 10 0c0-1.047-.188-1.808-.606-2.705l-.169-.345-.33-.647C15.274 6.062 15 4.964 15 3a1 1 0 0 0-1.447-.894" />
    </g>
    <defs>
      <clipPath id="campfire_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCampfire;
