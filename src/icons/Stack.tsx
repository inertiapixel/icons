import * as React from "react";
import type { SVGProps } from "react";
const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#stack_svg__a)">
      <path
        fill="currentColor"
        d="M20.893 13.553a1 1 0 0 1-.447 1.341l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 .894-1.788l7.553 3.774 7.554-3.775a1 1 0 0 1 1.34.447M12.008 5q.056 0 .11.007l.112.02.086.024.012.006.012.002.029.014.05.019.016.009.012.005 8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 0-1.788l8-4 .01-.005.019-.01.078-.032.01-.002.014-.006.086-.024.11-.02.056-.005z"
      />
    </g>
    <defs>
      <clipPath id="stack_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStack;
