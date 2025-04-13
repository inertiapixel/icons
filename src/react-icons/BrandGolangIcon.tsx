import React from "react";

export const BrandGolangIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82223)">
<path d="M15.6949 14.3049C16.7559 15.3649 18.6479 15.1929 19.9209 13.9209C21.1929 12.6479 21.3649 10.7559 20.3049 9.6949C19.2439 8.6349 17.3519 8.8069 16.0789 10.0789C14.8069 11.3519 14.6349 13.2439 15.6949 14.3049Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.6799 9.23289C11.5959 8.73589 10.1349 9.04189 9.08889 10.0789C7.80489 11.3519 7.63189 13.2439 8.70089 14.3049C9.77089 15.3649 11.6789 15.1929 12.9619 13.9209C13.4948 13.4007 13.8569 12.7307 13.9999 11.9999H11.5729"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 15H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12H2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82223">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
