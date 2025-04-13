import React from "react";

export const BrandVimeoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81270)">
<path d="M3 8.5L4 9.5C4 9.5 5.5 8.398 6 9C6.509 9.609 7.863 16.65 8.5 18C9.056 19.184 10.478 20.89 12.5 19.5C14.5 18 20 14 21 8C21.444 5.339 20 4 18.5 4C16.5 4 14.453 5.202 14 8C16.05 6.746 16.551 9 15.5 11C14.448 13 13.5 14 13 14C12.51 14 12.076 12.835 11.5 10.5C10.91 8.08 11 4 8.5 4C6 4 3 8.5 3 8.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81270">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
