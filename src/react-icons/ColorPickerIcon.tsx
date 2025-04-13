import React from "react";

export const ColorPickerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78072)">
<path d="M11 7L17 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16.0015L15.7 4.30148C15.8869 4.11826 16.1382 4.01562 16.4 4.01562C16.6618 4.01562 16.9131 4.11826 17.1 4.30148L19.7 6.90148C19.8832 7.08841 19.9859 7.33973 19.9859 7.60148C19.9859 7.86323 19.8832 8.11455 19.7 8.30148L8 20.0015H4V16.0015Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78072">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
