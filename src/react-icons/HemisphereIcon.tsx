import React from "react";

export const HemisphereIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72094)">
<path d="M3 9C3 9.39397 3.23279 9.78407 3.68508 10.1481C4.13738 10.512 4.80031 10.8427 5.63604 11.1213C6.47177 11.3999 7.46392 11.6209 8.55585 11.7716C9.64778 11.9224 10.8181 12 12 12C13.1819 12 14.3522 11.9224 15.4442 11.7716C16.5361 11.6209 17.5282 11.3999 18.364 11.1213C19.1997 10.8427 19.8626 10.512 20.3149 10.1481C20.7672 9.78407 21 9.39397 21 9C21 8.60603 20.7672 8.21593 20.3149 7.85195C19.8626 7.48797 19.1997 7.15726 18.364 6.87868C17.5282 6.6001 16.5361 6.37913 15.4442 6.22836C14.3522 6.0776 13.1819 6 12 6C10.8181 6 9.64778 6.0776 8.55585 6.22836C7.46392 6.37913 6.47177 6.6001 5.63604 6.87868C4.80031 7.15726 4.13738 7.48797 3.68508 7.85195C3.23279 8.21593 3 8.60603 3 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9C3 11.3869 3.94821 13.6761 5.63604 15.364C7.32387 17.0518 9.61305 18 12 18C14.3869 18 16.6761 17.0518 18.364 15.364C20.0518 13.6761 21 11.3869 21 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72094">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
