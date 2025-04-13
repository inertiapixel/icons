import React from "react";

export const BookmarkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58900)">
<path d="M14 2C15.3261 2 16.5979 2.52678 17.5355 3.46447C18.4732 4.40215 19 5.67392 19 7V21C19 21.181 18.9509 21.3587 18.8579 21.514C18.7648 21.6693 18.6314 21.7965 18.4718 21.8819C18.3121 21.9673 18.1323 22.0078 17.9515 21.999C17.7707 21.9902 17.5956 21.9325 17.445 21.832L12 18.202L6.556 21.832C6.4133 21.9275 6.2484 21.9847 6.0772 21.9979C5.906 22.0112 5.73426 21.9802 5.57853 21.9079C5.4228 21.8355 5.28832 21.7243 5.18804 21.5849C5.08776 21.4455 5.02507 21.2827 5.006 21.112L5 21V7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2H14Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58900">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
