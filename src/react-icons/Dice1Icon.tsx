import React from "react";

export const Dice1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58229)">
<path d="M18.333 2C20.293 2 21.893 3.537 21.995 5.472L22 5.667V18.333C22 20.293 20.463 21.893 18.528 21.995L18.333 22H5.667C4.72818 22 3.82509 21.64 3.1438 20.9941C2.46252 20.3481 2.05492 19.4655 2.005 18.528L2 18.333V5.667C2 3.707 3.537 2.107 5.472 2.005L5.667 2H18.333ZM12 10.5C11.6022 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12C10.5 12.3978 10.658 12.7794 10.9393 13.0607C11.2206 13.342 11.6022 13.5 12 13.5C12.3978 13.5 12.7794 13.342 13.0607 13.0607C13.342 12.7794 13.5 12.3978 13.5 12C13.5 11.6022 13.342 11.2206 13.0607 10.9393C12.7794 10.658 12.3978 10.5 12 10.5Z" />
</g>
<defs>
<clipPath id="clip0_802_58229">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
