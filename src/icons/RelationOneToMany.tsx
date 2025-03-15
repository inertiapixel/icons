import * as React from "react";
import type { SVGProps } from "react";
const SvgRelationOneToMany = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#relation-one-to-many_svg__a)">
      <path
        fill="currentColor"
        d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-4.2 5.4c-.577-.769-1.8-.361-1.8.6v4a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 15 14v-1l1.2 1.6c.577.769 1.8.361 1.8-.6v-4a1 1 0 0 0-1-1l-.117.007A1 1 0 0 0 16 10v1zM8 9H7a1 1 0 0 0 0 2v3a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m3 3.5a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0-1-1m0-3a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0-1-1"
      />
    </g>
    <defs>
      <clipPath id="relation-one-to-many_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRelationOneToMany;
