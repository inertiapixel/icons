import React from "react";

export const BrandRevolutIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81620)">
<path d="M5 10H8V20H5V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 4H5V7H14.4C14.7978 7 15.1794 7.15804 15.4607 7.43934C15.742 7.72064 15.9 8.10218 15.9 8.5C15.9 8.89782 15.742 9.27936 15.4607 9.56066C15.1794 9.84196 14.7978 10 14.4 10H11V14L15 20H19L14 13H14.5C15.6935 13 16.8381 12.5259 17.682 11.682C18.5259 10.8381 19 9.69347 19 8.5C19 7.30653 18.5259 6.16193 17.682 5.31802C16.8381 4.47411 15.6935 4 14.5 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81620">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
