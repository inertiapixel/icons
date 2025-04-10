import React from "react";

export const LetterSIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_70553)">
<path d="M17 8C17 6.93913 16.5786 5.92172 15.8284 5.17157C15.0783 4.42143 14.0609 4 13 4H11C9.93913 4 8.92172 4.42143 8.17157 5.17157C7.42143 5.92172 7 6.93913 7 8C7 9.06087 7.42143 10.0783 8.17157 10.8284C8.92172 11.5786 9.93913 12 11 12H13C14.0609 12 15.0783 12.4214 15.8284 13.1716C16.5786 13.9217 17 14.9391 17 16C17 17.0609 16.5786 18.0783 15.8284 18.8284C15.0783 19.5786 14.0609 20 13 20H11C9.93913 20 8.92172 19.5786 8.17157 18.8284C7.42143 18.0783 7 17.0609 7 16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70553">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
