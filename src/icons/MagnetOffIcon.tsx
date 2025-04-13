import React from "react";

export const MagnetOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69801)">
<path d="M7 3C7.53043 3 8.03914 3.21071 8.41421 3.58579C8.78929 3.96086 9 4.46957 9 5M9 9V13C8.99981 13.6528 9.21254 14.2878 9.60594 14.8088C9.99933 15.3297 10.5519 15.7081 11.1798 15.8866C11.8077 16.0651 12.4767 16.0338 13.0853 15.7977C13.6939 15.5615 14.2088 15.1333 14.552 14.578M15 11V5C15 4.46957 15.2107 3.96086 15.5858 3.58579C15.9609 3.21071 16.4696 3 17 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V13C20.001 13.8764 19.8577 14.7471 19.576 15.577M18.113 18.161C17.0552 19.414 15.638 20.3117 14.0532 20.7325C12.4683 21.1533 10.7924 21.077 9.25242 20.5138C7.71241 19.9507 6.38264 18.9279 5.44317 17.5839C4.5037 16.2399 3.99991 14.6398 4 13V5C4 4.703 4.065 4.42 4.181 4.167"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69801">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
