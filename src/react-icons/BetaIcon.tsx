import React from "react";

export const BetaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83793)">
<path d="M8 22V8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4H12.5C13.4283 4 14.3185 4.36875 14.9749 5.02513C15.6313 5.6815 16 6.57174 16 7.5C16 8.42826 15.6313 9.3185 14.9749 9.97487C14.3185 10.6313 13.4283 11 12.5 11M12.5 11H12M12.5 11C13.39 11 14.26 11.2639 15.0001 11.7584C15.7401 12.2529 16.3169 12.9557 16.6575 13.7779C16.9981 14.6002 17.0872 15.505 16.9135 16.3779C16.7399 17.2508 16.3113 18.0526 15.682 18.682C15.0526 19.3113 14.2508 19.7399 13.3779 19.9135C12.505 20.0872 11.6002 19.9981 10.7779 19.6575C9.95566 19.3169 9.25285 18.7401 8.75839 18.0001C8.26392 17.26 8 16.39 8 15.5V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83793">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
