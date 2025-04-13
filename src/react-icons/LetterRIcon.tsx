import React from "react";

export const LetterRIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70559)">
<path d="M7 20V4H12.5C13.6935 4 14.8381 4.47411 15.682 5.31802C16.5259 6.16193 17 7.30653 17 8.5C17 9.69347 16.5259 10.8381 15.682 11.682C14.8381 12.5259 13.6935 13 12.5 13H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13L17 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70559">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
