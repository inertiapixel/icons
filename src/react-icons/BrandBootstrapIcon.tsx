import React from "react";

export const BrandBootstrapIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82665)">
<path d="M2 12C2.53043 12 3.03914 11.7893 3.41421 11.4142C3.78929 11.0391 4 10.5304 4 10V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V10C20 10.5304 20.2107 11.0391 20.5858 11.4142C20.9609 11.7893 21.4696 12 22 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12C2.53043 12 3.03914 12.2107 3.41421 12.5858C3.78929 12.9609 4 13.4696 4 14V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V14C20 13.4696 20.2107 12.9609 20.5858 12.5858C20.9609 12.2107 21.4696 12 22 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 16V8H12.5C13.0304 8 13.5391 8.21071 13.9142 8.58579C14.2893 8.96086 14.5 9.46957 14.5 10C14.5 10.5304 14.2893 11.0391 13.9142 11.4142C13.5391 11.7893 13.0304 12 12.5 12H9H13C13.5304 12 14.0391 12.2107 14.4142 12.5858C14.7893 12.9609 15 13.4696 15 14C15 14.5304 14.7893 15.0391 14.4142 15.4142C14.0391 15.7893 13.5304 16 13 16H9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82665">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
