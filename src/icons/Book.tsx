import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#book_svg__a)">
      <path
        fill="currentColor"
        d="M12.088 4.819a10 10 0 0 1 9.412.314 1 1 0 0 1 .493.748l.007.118v13a1 1 0 0 1-1.5.866 8 8 0 0 0-8 0 1 1 0 0 1-1 0 8 8 0 0 0-7.733-.148l-.327.18-.103.044-.049.016-.11.026-.061.01-.117.006h-.042l-.11-.012-.077-.014-.108-.032-.126-.056-.095-.056-.089-.067-.06-.056-.073-.082-.064-.09-.022-.035-.032-.06-.044-.103-.016-.05-.026-.11-.01-.06-.004-.05L2 19v-13a1 1 0 0 1 .5-.866 10 10 0 0 1 9.412-.314l.088.044z"
      />
    </g>
    <defs>
      <clipPath id="book_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBook;
