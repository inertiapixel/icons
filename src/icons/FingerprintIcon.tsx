import React from "react";

export const FingerprintIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73688)">
<path d="M18.8984 7C19.8029 8.50118 20.1894 10.2578 19.9984 12V13C19.9973 14.0529 20.2732 15.0875 20.7984 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11V12C16 14.1637 16.7018 16.269 18 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11V13C11.9968 15.8594 12.8693 18.6512 14.5 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 15C8.2447 17.0898 8.85393 19.1206 9.8 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.90042 18.9984C4.22567 16.7287 3.92176 14.3649 4.00042 11.9984V10.9984C3.99659 9.59224 4.36345 8.20992 5.06403 6.99073C5.76461 5.77154 6.77417 4.75854 7.99097 4.05381C9.20777 3.34908 10.5888 2.97752 11.995 2.97656C13.4011 2.97561 14.7827 3.3453 16.0004 4.04838"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73688">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
