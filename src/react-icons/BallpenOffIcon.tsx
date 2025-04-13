import React from "react";

export const BallpenOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84353)">
<path d="M14 6L21 13L19 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0004 10L5.82843 14.172C5.56578 14.4346 5.35744 14.7464 5.2153 15.0896C5.07316 15.4328 5 15.8006 5 16.172C5 16.5434 5.07316 16.9112 5.2153 17.2544C5.35744 17.5976 5.56578 17.9094 5.82843 18.172C6.09107 18.4346 6.40287 18.643 6.74604 18.7851C7.0892 18.9273 7.45699 19.0004 7.82843 19.0004C8.19986 19.0004 8.56766 18.9273 8.91082 18.7851C9.25398 18.643 9.56578 18.4346 9.82843 18.172L14.0004 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12.0001L20.414 7.58607C20.5998 7.40035 20.7472 7.17983 20.8478 6.93713C20.9483 6.69442 21.0001 6.43429 21.0001 6.17157C21.0001 5.90886 20.9483 5.64872 20.8478 5.40602C20.7472 5.16331 20.5998 4.9428 20.414 4.75707L19.243 3.58607C19.0573 3.40027 18.8368 3.25288 18.5941 3.15232C18.3513 3.05176 18.0912 3 17.8285 3C17.5658 3 17.3057 3.05176 17.0629 3.15232C16.8202 3.25288 16.5997 3.40027 16.414 3.58607L12 8.00007"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 19.9985L5.768 18.2305"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84353">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
