import React from "react";

export const BrandPatreonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58761)">
<path d="M7.46115 3.10028C10.0762 1.83228 13.6872 1.65428 16.5242 2.59728C19.0922 3.45028 20.9952 5.77227 20.9992 8.40727C21.0032 11.4683 19.0572 13.8993 16.1032 14.6503C14.4102 15.0803 13.7652 15.4003 13.1612 16.2323C12.9232 16.5603 12.7112 16.9773 12.3652 17.7653L12.1452 18.2653C10.9992 20.8663 9.98915 22.0273 7.90915 22.0003C5.67715 21.9703 4.30615 20.2583 3.59615 17.5203C3.13815 15.7523 2.97915 13.7123 3.00215 11.6443C3.04615 7.65128 4.42215 4.57228 7.46215 3.09928L7.46115 3.10028Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58761">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
