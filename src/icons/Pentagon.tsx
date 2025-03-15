import * as React from "react";
import type { SVGProps } from "react";
const SvgPentagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pentagon_svg__a)">
      <path
        fill="currentColor"
        d="m10.203 2.599-6.96 5.238a3 3 0 0 0-1.045 3.338l2.896 8.765a3 3 0 0 0 2.85 2.059h8.12a3 3 0 0 0 2.841-2.037l2.973-8.764a3 3 0 0 0-1.05-3.37L13.795 2.59l-.09-.061-.019-.01-.106-.07a3 3 0 0 0-3.377.149"
      />
    </g>
    <defs>
      <clipPath id="pentagon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPentagon;
