import React from "react";

export const GrillForkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72616)">
<path d="M5 5L16.5 16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.347 16.5745L20.427 17.6535C20.7945 18.0212 21.001 18.5199 21.0009 19.0398C21.0008 19.5598 20.7942 20.0584 20.4265 20.426C20.0587 20.7935 19.56 21 19.0401 20.9999C18.5202 20.9998 18.0215 20.7932 17.654 20.4255L16.574 19.3465C16.2064 18.9787 15.9999 18.48 16 17.9601C16.0001 17.4402 16.2067 16.9415 16.5745 16.574C16.9422 16.2064 17.4409 15.9999 17.9608 16C18.4808 16.0001 18.9794 16.2067 19.347 16.5745Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 7L6.05 10.15C6.59809 10.672 7.32853 10.959 8.08536 10.9498C8.84218 10.9406 9.56541 10.6358 10.1006 10.1006C10.6358 9.56541 10.9406 8.84218 10.9498 8.08536C10.959 7.32853 10.672 6.59809 10.15 6.05L7 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72616">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
