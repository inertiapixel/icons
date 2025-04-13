import React from "react";

export const PlaneDepartureIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66278)">
<path d="M14.6404 10.2583L19.4704 8.96425C19.7259 8.89047 19.9935 8.86837 20.2576 8.89925C20.5217 8.93013 20.777 9.01336 21.0085 9.14408C21.2401 9.27481 21.4433 9.45039 21.6062 9.66056C21.769 9.87073 21.8884 10.1113 21.9572 10.3681C22.026 10.625 22.0429 10.893 22.0069 11.1564C21.9709 11.4199 21.8828 11.6735 21.7476 11.9025C21.6124 12.1315 21.4329 12.3312 21.2196 12.49C21.0063 12.6488 20.7635 12.7634 20.5054 12.8272L6.01641 16.7102L1.56641 11.6902L4.46341 10.9142L6.91341 12.3282L9.81041 11.5522L6.06741 5.30825L8.96541 4.53125L14.6404 10.2583Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66278">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
