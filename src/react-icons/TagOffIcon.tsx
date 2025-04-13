import React from "react";

export const TagOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62059)">
<path d="M7.14794 7.14453C7.07632 7.21378 7.02711 7.30291 7.00668 7.40042C6.98625 7.49792 6.99553 7.59932 7.03333 7.69149C7.07112 7.78367 7.13569 7.86239 7.2187 7.91748C7.3017 7.97257 7.39932 8.0015 7.49894 8.00053C7.62564 8.00055 7.74758 7.95227 7.83994 7.86553"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.883 3.875C3.60276 4.15333 3.38044 4.48442 3.22889 4.84915C3.07733 5.21389 2.99954 5.60503 3 6V11.172C3.00012 11.7024 3.2109 12.211 3.586 12.586L11.296 20.296C11.748 20.7479 12.3609 21.0017 13 21.0017C13.6391 21.0017 14.2521 20.7479 14.704 20.296L17.5 17.5M19.505 15.495L20.295 14.705C20.5191 14.4812 20.6968 14.2154 20.8181 13.9228C20.9393 13.6303 21.0017 13.3167 21.0017 13C21.0017 12.6833 20.9393 12.3697 20.8181 12.0772C20.6968 11.7846 20.5191 11.5188 20.295 11.295L12.585 3.585C12.2103 3.21076 11.7026 3.00038 11.173 3H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62059">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
