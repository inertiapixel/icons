import React from "react";

export const BookmarkEditIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83546)">
<path d="M12 17L6 21V7C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10 3H14C15.0609 3 16.0783 3.42143 16.8284 4.17157C17.5786 4.92172 18 5.93913 18 7V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.42 15.6112C18.615 15.4162 18.8465 15.2615 19.1013 15.156C19.3561 15.0504 19.6292 14.9961 19.905 14.9961C20.1808 14.9961 20.4539 15.0504 20.7087 15.156C20.9635 15.2615 21.195 15.4162 21.39 15.6112C21.585 15.8062 21.7397 16.0377 21.8452 16.2925C21.9508 16.5473 22.0051 16.8204 22.0051 17.0962C22.0051 17.372 21.9508 17.6451 21.8452 17.8999C21.7397 18.1547 21.585 18.3862 21.39 18.5812L18 22.0012H15V19.0012L18.42 15.6112Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83546">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
