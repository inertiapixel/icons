import React from "react";

export const BrandBandlabIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82731)">
<path d="M6.88485 7L4.34885 11.907C2.32785 15.752 1.84985 20.682 8.16985 21H14.9778C19.8378 20.793 22.9668 18.025 19.5848 11.907L16.5968 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.0763 4H9.94032L13.6183 12.768M13.6183 12.768C14.1653 13.908 14.4653 14.59 13.7803 15.444C13.7273 15.537 12.4483 17.351 10.7273 16.939C9.90232 16.752 9.34332 16.013 9.40732 15.199C9.44732 14.289 10.0273 13.482 10.8953 13.125C11.7428 12.7224 12.6956 12.5981 13.6183 12.768Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82731">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
