import * as React from "react";
import type { SVGProps } from "react";
const SvgGpsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gps-icon_svg__a)">
      <path
        fill="currentColor"
        d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-.086 5.066c.372-.837-.483-1.692-1.32-1.32l-9 4-.108.055c-.75.44-.611 1.609.271 1.83l3.418.853.855 3.419c.23.922 1.498 1.032 1.884.163z"
      />
    </g>
    <defs>
      <clipPath id="gps-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGpsIcon;
