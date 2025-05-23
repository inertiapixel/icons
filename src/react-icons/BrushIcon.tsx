import React from "react";

export const BrushIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80931)">
<path d="M3 21V17C3 16.2089 3.2346 15.4355 3.67412 14.7777C4.11365 14.1199 4.73836 13.6072 5.46927 13.3045C6.20017 13.0017 7.00444 12.9225 7.78036 13.0769C8.55629 13.2312 9.26902 13.6122 9.82843 14.1716C10.3878 14.731 10.7688 15.4437 10.9231 16.2196C11.0775 16.9956 10.9983 17.7998 10.6955 18.5307C10.3928 19.2616 9.88008 19.8864 9.22228 20.3259C8.56448 20.7654 7.79113 21 7 21H3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9992 3C18.145 3.3904 15.4492 4.54414 13.1963 6.33944C10.9433 8.13474 9.21692 10.505 8.19922 13.2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.0008 3C20.6104 5.85418 19.4566 8.55002 17.6613 10.8029C15.866 13.0559 13.4958 14.7823 10.8008 15.8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.6016 9C12.5447 9.89687 14.1047 11.4568 15.0016 13.4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80931">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
