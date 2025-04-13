import React from "react";

export const BrandFirebaseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82306)">
<path d="M4.53125 17.0493L10.6813 5.32927H10.6612C11.0412 4.58927 11.9412 4.30927 12.6712 4.69927C12.9312 4.83927 13.1513 5.05927 13.2913 5.31927L14.3512 7.32927"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.4692 6.45C16.0492 5.86 16.9992 5.86 17.5792 6.44C17.7992 6.66 17.9392 6.94 17.9892 7.25L19.4892 16.36C19.5892 16.98 19.2892 17.6 18.7292 17.9L12.6592 20.8C12.1992 21.05 11.6492 21.06 11.1992 20.8L5.17921 17.88C4.62921 17.57 4.32921 16.96 4.42921 16.34L6.38921 4.3C6.50921 3.48 7.27921 2.92 8.08921 3.05C8.54921 3.12 8.95921 3.41 9.17921 3.82L10.4192 5.58"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.57031 17.18L15.5003 6.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82306">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
