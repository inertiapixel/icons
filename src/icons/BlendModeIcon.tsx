import React from "react";

export const BlendModeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_83696)">
<path d="M8 9.5C8 11.2239 8.68482 12.8772 9.90381 14.0962C11.1228 15.3152 12.7761 16 14.5 16C16.2239 16 17.8772 15.3152 19.0962 14.0962C20.3152 12.8772 21 11.2239 21 9.5C21 7.77609 20.3152 6.12279 19.0962 4.90381C17.8772 3.68482 16.2239 3 14.5 3C12.7761 3 11.1228 3.68482 9.90381 4.90381C8.68482 6.12279 8 7.77609 8 9.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14.5C3 16.2239 3.68482 17.8772 4.90381 19.0962C6.12279 20.3152 7.77609 21 9.5 21C11.2239 21 12.8772 20.3152 14.0962 19.0962C15.3152 17.8772 16 16.2239 16 14.5C16 12.7761 15.3152 11.1228 14.0962 9.90381C12.8772 8.68482 11.2239 8 9.5 8C7.77609 8 6.12279 8.68482 4.90381 9.90381C3.68482 11.1228 3 12.7761 3 14.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83696">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
