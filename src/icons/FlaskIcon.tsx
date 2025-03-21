import * as React from "react";
import type { SVGProps } from "react";
const SvgFlaskIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#flask-icon_svg__a)">
      <path
        fill="currentColor"
        d="M14.999 2a1 1 0 0 1 0 2v4.826l3.932 10.814.034.077a1.7 1.7 0 0 1-.002 1.193l-.07.162a1.7 1.7 0 0 1-1.213.911l-.181.017h-11l-.181-.017a1.702 1.702 0 0 1-1.285-2.266l.039-.09L8.999 8.823V4a1 1 0 0 1 0-2zm-2 2h-2v4h2z"
      />
    </g>
    <defs>
      <clipPath id="flask-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlaskIcon;
