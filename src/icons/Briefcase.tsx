import * as React from "react";
import type { SVGProps } from "react";
const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#briefcase_svg__a)">
      <path
        fill="currentColor"
        d="M22 13.478V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.522l.553.277a21 21 0 0 0 18.897-.002zM14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447.724a19 19 0 0 1-16.726.186l-.647-.32-1.18-.59V9a3 3 0 0 1 3-3h2V5a3 3 0 0 1 3-3zm-2 8a1 1 0 0 0-.926 1.383 1 1 0 0 0 1.304.548A1.002 1.002 0 0 0 12 10m2-6h-4a1 1 0 0 0-1 1v1h6V5a1 1 0 0 0-1-1"
      />
    </g>
    <defs>
      <clipPath id="briefcase_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBriefcase;
