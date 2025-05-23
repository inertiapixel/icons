import React from "react";

export const BrushOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80937)">
<path d="M3 17C3 16.2089 3.2346 15.4355 3.67412 14.7777C4.11365 14.1199 4.73836 13.6072 5.46927 13.3045C6.20017 13.0017 7.00444 12.9225 7.78036 13.0769C8.55629 13.2312 9.26902 13.6122 9.82843 14.1716C10.3878 14.731 10.7688 15.4437 10.9231 16.2196C11.0775 16.9956 10.9983 17.7998 10.6955 18.5307C10.3928 19.2616 9.88008 19.8864 9.22228 20.3259C8.56448 20.7654 7.79113 21 7 21H3V17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9992 3C17.4579 3.48421 14.1807 5.14024 11.6902 7.704M9.89522 9.916C9.20487 10.9414 8.63573 12.0435 8.19922 13.2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.0008 3C20.517 6.53793 18.8636 9.81234 16.3038 12.302M14.1088 14.088C13.0766 14.7856 11.9664 15.3601 10.8008 15.8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80937">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
