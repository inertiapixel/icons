import React from "react";

export const BrandRedhatIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81632)">
<path d="M6 10.5L7.436 6.5C7.754 5.624 8.164 5.198 8.795 5.198C9.014 5.198 9.849 5.563 10.675 5.781C11.5 6 11.408 5.452 11.583 5.294C11.759 5.136 11.938 5 12.193 5C12.435 5 12.746 5.048 13.885 5.448C14.644 5.715 15.378 6.022 16.089 6.37C17.264 6.952 17.515 7.283 17.684 7.877L18.5 12.5C20.586 13.398 22 14.857 22 16.182C22 17.867 20.8 20 16.043 20C9.837 20 2 15.958 2 12.68C2 11.636 3.333 10.91 6 10.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10.5C6 11.469 10.39 14 15.5 14C16.814 14 18.5 14.063 18.5 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81632">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
