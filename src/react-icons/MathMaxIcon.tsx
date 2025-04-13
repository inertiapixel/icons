import React from "react";

export const MathMaxIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69151)">
<path d="M5 6C5 6.53043 5.21071 7.03914 5.58579 7.41421C5.96086 7.78929 6.46957 8 7 8C7.53043 8 8.03914 7.78929 8.41421 7.41421C8.78929 7.03914 9 6.53043 9 6C9 5.46957 8.78929 4.96086 8.41421 4.58579C8.03914 4.21071 7.53043 4 7 4C6.46957 4 5.96086 4.21071 5.58579 4.58579C5.21071 4.96086 5 5.46957 5 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 15.0003C3 15.0003 3.616 9.45631 5.332 7.07031"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.63672 7.11328C11.3537 10.4263 14.5187 20.0013 16.9997 20.0013C18.9997 20.0013 20.3327 17.0013 20.9997 11.0013"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69151">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
