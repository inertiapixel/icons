import React from "react";

export const MoneybagIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68338)">
<path d="M9.5 3H14.5C14.8978 3 15.2794 3.15804 15.5607 3.43934C15.842 3.72064 16 4.10218 16 4.5C16 5.42826 15.6313 6.3185 14.9749 6.97487C14.3185 7.63125 13.4283 8 12.5 8H11.5C10.5717 8 9.6815 7.63125 9.02513 6.97487C8.36875 6.3185 8 5.42826 8 4.5C8 4.10218 8.15804 3.72064 8.43934 3.43934C8.72064 3.15804 9.10218 3 9.5 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17V16C4 13.8783 4.84285 11.8434 6.34315 10.3431C7.84344 8.84285 9.87827 8 12 8C14.1217 8 16.1566 8.84285 17.6569 10.3431C19.1571 11.8434 20 13.8783 20 16V17C20 18.0609 19.5786 19.0783 18.8284 19.8284C18.0783 20.5786 17.0609 21 16 21H8C6.93913 21 5.92172 20.5786 5.17157 19.8284C4.42143 19.0783 4 18.0609 4 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68338">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
