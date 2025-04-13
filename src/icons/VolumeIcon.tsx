import React from "react";

export const VolumeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60178)">
<path d="M15 8C15.621 8.46574 16.125 9.06966 16.4721 9.76393C16.8193 10.4582 17 11.2238 17 12C17 12.7762 16.8193 13.5418 16.4721 14.2361C16.125 14.9303 15.621 15.5343 15 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.6992 5C18.7432 5.84365 19.5852 6.91013 20.1637 8.12132C20.7421 9.33252 21.0424 10.6578 21.0424 12C21.0424 13.3422 20.7421 14.6675 20.1637 15.8787C19.5852 17.0899 18.7432 18.1563 17.6992 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15.0002H4C3.73478 15.0002 3.48043 14.8949 3.29289 14.7073C3.10536 14.5198 3 14.2654 3 14.0002V10.0002C3 9.735 3.10536 9.48065 3.29289 9.29311C3.48043 9.10557 3.73478 9.00022 4 9.00022H6L9.5 4.50022C9.5874 4.33045 9.73265 4.19754 9.90949 4.12551C10.0863 4.05348 10.2831 4.04708 10.4643 4.10746C10.6454 4.16784 10.799 4.29103 10.8972 4.45476C10.9955 4.61849 11.0319 4.81196 11 5.00022V19.0002C11.0319 19.1885 10.9955 19.3819 10.8972 19.5457C10.799 19.7094 10.6454 19.8326 10.4643 19.893C10.2831 19.9534 10.0863 19.947 9.90949 19.8749C9.73265 19.8029 9.5874 19.67 9.5 19.5002L6 15.0002Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60178">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
