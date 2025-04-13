import React from "react";

export const BrandFoursquareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82275)">
<path d="M6.99819 3H16.9982C17.6422 3 18.1082 3.696 17.9762 4.33L15.9922 14.189C15.9452 14.4191 15.8198 14.6257 15.6374 14.7736C15.455 14.9215 15.227 15.0015 14.9922 15H12.7382C12.4302 15 12.1382 15.141 11.9452 15.382L7.80119 20.632C7.20219 21.384 5.99219 20.963 5.99219 20V4C5.99219 3.436 6.43219 3 6.99219 3H6.99819Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82275">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
