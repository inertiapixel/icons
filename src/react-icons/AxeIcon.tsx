import React from "react";

export const AxeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84602)">
<path d="M13 9L20.383 16.418C21.206 17.238 21.206 18.566 20.383 19.385C19.9876 19.7783 19.4527 19.999 18.895 19.999C18.3373 19.999 17.8024 19.7783 17.407 19.385L10 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.65833 15.66L3.33833 12.34C3.19218 12.1937 3.08461 12.0134 3.02525 11.8153C2.9659 11.6172 2.95662 11.4075 2.99824 11.205C3.03986 11.0024 3.13109 10.8133 3.26374 10.6547C3.39639 10.4961 3.56633 10.3728 3.75833 10.296L6.99833 9L12.9983 3L15.9983 6L9.99833 12L8.70233 15.24C8.62551 15.432 8.50227 15.6019 8.34363 15.7346C8.18499 15.8672 7.99592 15.9585 7.79336 16.0001C7.5908 16.0417 7.38108 16.0324 7.18299 15.9731C6.9849 15.9137 6.80463 15.8062 6.65833 15.66Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84602">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
