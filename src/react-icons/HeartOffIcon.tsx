import React from "react";

export const HeartOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72245)">
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0017 14L19.5017 12.572C19.9926 12.0898 20.3787 11.5115 20.6358 10.8733C20.8929 10.235 21.0155 9.55053 20.996 8.86271C20.9764 8.17488 20.8151 7.4985 20.5221 6.87589C20.2291 6.25328 19.8107 5.69785 19.2932 5.24436C18.7757 4.79087 18.1701 4.44909 17.5144 4.24039C16.8587 4.0317 16.167 3.96059 15.4826 4.03152C14.7981 4.10245 14.1357 4.31389 13.5368 4.65261C12.9378 4.99132 12.4152 5.45002 12.0017 6C11.0517 4.727 9.56165 4 8.00165 4M16.0017 16L12.0017 20L4.50165 12.572C3.84014 11.9284 3.36966 11.1143 3.14233 10.2198C2.915 9.3253 2.93969 8.38533 3.21365 7.504C3.53015 6.5014 4.15609 5.62482 5.00165 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72245">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
