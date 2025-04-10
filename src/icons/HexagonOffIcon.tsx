import React from "react";

export const HexagonOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_71918)">
<path d="M8.693 4.68864L11.029 3.29864C11.3348 3.12841 11.679 3.03906 12.029 3.03906C12.379 3.03906 12.7232 3.12841 13.029 3.29864L19.029 6.87164H19C19.3062 7.04844 19.5601 7.30327 19.7358 7.61016C19.9115 7.91705 20.0026 8.26504 20 8.61864V15.1546C20 15.4006 19.955 15.6396 19.87 15.8616M17.71 17.7086L12.971 20.7356C12.674 20.9006 12.3398 20.9872 12 20.9872C11.6602 20.9872 11.326 20.9006 11.029 20.7356L5.029 16.9026C4.71736 16.7296 4.45763 16.4764 4.27671 16.1692C4.0958 15.862 4.00026 15.5121 4 15.1556V8.61864C4.00008 8.26199 4.09553 7.91186 4.27646 7.60451C4.45739 7.29717 4.71721 7.04379 5.029 6.87064L6.183 6.18364" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71918">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
