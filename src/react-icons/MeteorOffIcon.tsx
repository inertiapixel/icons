import React from "react";

export const MeteorOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68509)">
<path d="M9.74983 5.761L12.9998 3L11.9998 8L20.9998 3L15.9998 12H20.9998L18.5328 14.536M16.5498 16.576L14.1088 19.086C13.4918 19.7043 12.7564 20.192 11.9467 20.5197C11.137 20.8475 10.2695 21.0087 9.39605 20.9937C8.52262 20.9787 7.66119 20.7877 6.8632 20.4323C6.06522 20.0769 5.34707 19.5643 4.75165 18.9251C4.15623 18.2859 3.69575 17.5332 3.39775 16.7121C3.09974 15.8909 2.9703 15.0181 3.01718 14.1458C3.06405 13.2735 3.28628 12.4196 3.67057 11.6352C4.05486 10.8507 4.59334 10.1517 5.25383 9.58L7.57583 7.608"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 14.5C7 15.163 7.26339 15.7989 7.73223 16.2678C8.20107 16.7366 8.83696 17 9.5 17C10.163 17 10.7989 16.7366 11.2678 16.2678C11.7366 15.7989 12 15.163 12 14.5C12 13.837 11.7366 13.2011 11.2678 12.7322C10.7989 12.2634 10.163 12 9.5 12C8.83696 12 8.20107 12.2634 7.73223 12.7322C7.26339 13.2011 7 13.837 7 14.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68509">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
