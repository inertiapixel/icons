import React from "react";

export const Beer1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83941)">
<path d="M9 21H15C15.2652 21 15.5196 20.8946 15.7071 20.7071C15.8946 20.5196 16 20.2652 16 20V16.375C16 14.978 16.29 13.6 16.845 12.35L17.155 11.65C17.711 10.4 18 9.397 18 8V4C18 3.73478 17.8946 3.48043 17.7071 3.29289C17.5196 3.10536 17.2652 3 17 3H7C6.73478 3 6.48043 3.10536 6.29289 3.29289C6.10536 3.48043 6 3.73478 6 4V8C6 9.397 6.29 10.4 6.845 11.65L7.155 12.35C7.71444 13.618 8.00228 14.9891 8 16.375V20C8 20.2652 8.10536 20.5196 8.29289 20.7071C8.48043 20.8946 8.73478 21 9 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83941">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
