import React from "react";

export const Blob1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83686)">
<path d="M5.897 20.188C7.567 20.94 9.793 21 12 21C14.207 21 16.434 20.941 18.104 20.188C18.972 19.796 19.718 19.206 20.237 18.332C20.751 17.467 21 16.392 21 15.098C21 12.521 20.017 9.783 18.443 7.682C16.873 5.588 14.61 4 12 4C9.39 4 7.127 5.588 5.557 7.682C3.983 9.783 3 12.522 3 15.098C3 16.393 3.249 17.467 3.763 18.332C4.282 19.206 5.028 19.796 5.897 20.188Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83686">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
