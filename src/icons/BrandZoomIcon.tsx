import React from "react";

export const BrandZoomIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81065)">
<path d="M17.0117 9.385V14.513L21.0007 18V6L17.0117 9.385Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.887 6H13.967C15.435 6 17 7.203 17 8.803V16.999C17.0024 17.2606 16.9013 17.5126 16.7186 17.6999C16.5359 17.8873 16.2866 17.9948 16.025 17.999H5.652C3.985 17.999 3 16.499 3 14.999L3.01 6.999C2.99119 6.87265 3.00004 6.74373 3.03596 6.62114C3.07187 6.49855 3.13398 6.38522 3.218 6.289C3.301 6.19397 3.40431 6.11883 3.52029 6.06914C3.63627 6.01946 3.76195 5.99651 3.888 6.002L3.887 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81065">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
