import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyframes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#keyframes_svg__a)">
      <path d="M7.999 4a2.6 2.6 0 0 0-2 .957l-4.355 5.24a2.85 2.85 0 0 0-.007 3.598l4.368 5.256c.499.6 1.224.949 1.994.949a2.6 2.6 0 0 0 2-.957l4.355-5.24a2.85 2.85 0 0 0 .007-3.598L9.993 4.949A2.6 2.6 0 0 0 7.999 4M16.382 4.214a1 1 0 0 1 1.32.074l.084.094 4.576 5.823c.808.993.848 2.396.13 3.419l-.12.158-4.586 5.836a1 1 0 0 1-1.644-1.132l.072-.104 4.596-5.85a.84.84 0 0 0 .06-.978l-.07-.1-4.586-5.836a1 1 0 0 1 .168-1.404" />
      <path d="M12.382 4.214a1 1 0 0 1 1.32.074l.084.094 4.576 5.823c.808.993.848 2.396.13 3.419l-.12.158-4.586 5.836a1 1 0 0 1-1.644-1.132l.072-.104 4.596-5.85a.84.84 0 0 0 .06-.978l-.07-.1-4.586-5.836a1 1 0 0 1 .168-1.404" />
    </g>
    <defs>
      <clipPath id="keyframes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKeyframes;
