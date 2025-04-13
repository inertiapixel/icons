import React from "react";

export const OvalVerticalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57694)">
<path d="M12 5C6.543 5 2 8.028 2 12C2 15.972 6.543 19 12 19C17.457 19 22 15.972 22 12C22 8.028 17.457 5 12 5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57694">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
