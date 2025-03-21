import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#key-icon_svg__a)">
      <path
        fill="currentColor"
        d="M14.52 2c1.029 0 2.015.409 2.742 1.136l3.602 3.602a3.88 3.88 0 0 1 0 5.483l-2.643 2.643a3.88 3.88 0 0 1-4.941.452l-.105-.078-5.882 5.883a3 3 0 0 1-1.68.843l-.22.027-.221.009H4c-1.014 0-1.867-.759-1.991-1.823L2 20v-1.172c0-.704.248-1.386.73-1.96l.149-.161.414-.414A1 1 0 0 1 4 16h1v-1a1 1 0 0 1 .883-.993L6 14h1v-1a1 1 0 0 1 .206-.608l.087-.1 1.468-1.469-.076-.103a3.9 3.9 0 0 1-.678-1.963L8 8.521c0-1.029.409-2.015 1.136-2.742l2.643-2.643A3.88 3.88 0 0 1 14.52 2m.495 5h-.02a2 2 0 0 0 0 4h.02a2 2 0 0 0 0-4"
      />
    </g>
    <defs>
      <clipPath id="key-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKeyIcon;
