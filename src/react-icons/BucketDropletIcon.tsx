import React from "react";

export const BucketDropletIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80904)">
<path d="M4.9994 16L6.4644 17.638C6.72582 17.919 6.90085 18.2694 6.9686 18.6472C7.03635 19.0249 6.99396 19.4143 6.84649 19.7686C6.69902 20.123 6.45269 20.4274 6.13692 20.6456C5.82114 20.8638 5.44925 20.9865 5.06564 20.9991C4.68202 21.0117 4.30288 20.9136 3.97348 20.7166C3.64407 20.5196 3.3783 20.232 3.2079 19.8881C3.0375 19.5442 2.96967 19.1585 3.01249 18.7771C3.05531 18.3956 3.20698 18.0346 3.4494 17.737L4.9994 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.7372 9.73745C16.0362 7.43745 16.9672 4.64245 15.8182 3.49245C14.6682 2.34245 11.8732 3.27545 9.57419 5.57445C7.27419 7.87345 6.34319 10.6694 7.49219 11.8184C8.64219 12.9684 11.4382 12.0364 13.7372 9.73745Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.49219 11.8182C7.85419 12.1802 8.26019 12.4942 8.70019 12.7522L15.5952 16.7992C16.6732 17.3562 17.8502 16.7242 19.2872 15.2872C20.7242 13.8502 21.3572 12.6732 20.7992 11.5952C20.4272 10.8772 19.0792 8.57819 16.7522 4.70019C16.4934 4.25948 16.1796 3.85354 15.8182 3.49219"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80904">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
