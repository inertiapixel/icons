import React from "react";

export const PerspectiveIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66726)">
<path d="M6.141 4.16233L18.141 5.87633C18.3794 5.91028 18.5975 6.02911 18.7553 6.21098C18.9131 6.39285 19 6.62555 19 6.86633V17.1323C19 17.3731 18.9131 17.6058 18.7553 17.7877C18.5975 17.9696 18.3794 18.0884 18.141 18.1223L6.141 19.8363C5.9992 19.8565 5.85471 19.846 5.71731 19.8055C5.57992 19.765 5.45283 19.6955 5.34464 19.6016C5.23645 19.5078 5.14969 19.3918 5.09023 19.2614C5.03077 19.1311 5 18.9896 5 18.8463V5.15233C5 5.0091 5.03077 4.86754 5.09023 4.73722C5.14969 4.60691 5.23645 4.4909 5.34464 4.39703C5.45283 4.30316 5.57992 4.23362 5.71731 4.19313C5.85471 4.15264 5.9992 4.14214 6.141 4.16233Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66726">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
