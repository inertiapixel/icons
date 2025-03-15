import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#eye_svg__a)">
      <path
        fill="currentColor"
        d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22.379.045.1.03.083.014.055.014.082.01.1v.11l-.013.111a1 1 0 0 1-.026.11l-.04.108-.035.075-.016.03c-2.764 4.836-6.3 7.38-10.555 7.499L12 20c-4.396 0-8.037-2.549-10.868-7.504a1 1 0 0 1 0-.992C3.962 6.549 7.604 4 12 4m0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      />
    </g>
    <defs>
      <clipPath id="eye_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEye;
