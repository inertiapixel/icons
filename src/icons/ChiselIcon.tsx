import React from "react";

export const ChiselIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_79396)">
<path d="M14 14L15.5 15.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.347 15.5745L20.427 17.6535C20.7945 18.0212 21.001 18.5199 21.0009 19.0398C21.0008 19.5598 20.7942 20.0584 20.4265 20.426C20.0587 20.7935 19.56 21 19.0401 20.9999C18.5202 20.9998 18.0215 20.7932 17.654 20.4255L15.574 18.3465C15.2064 17.9787 14.9999 17.48 15 16.9601C15.0001 16.4402 15.2067 15.9415 15.5745 15.574C15.9422 15.2064 16.4409 14.9999 16.9608 15C17.4808 15.0001 17.9794 15.2067 18.347 15.5745Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6L6 3L13.414 10.414C13.7891 10.789 13.9999 11.2976 14 11.828V14H11.828C11.2976 13.9999 10.789 13.7891 10.414 13.414L3 6Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79396">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
