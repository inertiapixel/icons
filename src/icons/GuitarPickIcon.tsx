import * as React from "react";
import type { SVGProps } from "react";
const SvgGuitarPickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#guitar-pick-icon_svg__a)">
      <path
        fill="currentColor"
        d="M12 2c-1.613 0-2.882.104-3.825.323l-.23.057C4.926 3.088 3 4.883 3 8c0 3.367 1.939 8.274 4.22 11.125q.48.6 1.03 1.158l.367.36a4.904 4.904 0 0 0 6.752.011q.758-.715 1.41-1.528C19.27 16.013 21 11.832 21 8c0-3.025-1.813-4.806-4.71-5.562l-.266-.066C15.088 2.122 13.743 2 12 2"
      />
    </g>
    <defs>
      <clipPath id="guitar-pick-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGuitarPickIcon;
