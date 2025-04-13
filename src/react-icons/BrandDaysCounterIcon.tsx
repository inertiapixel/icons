import React from "react";

export const BrandDaysCounterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82491)">
<path d="M20.7799 10.0082C20.4231 8.43923 19.6521 6.99457 18.5474 5.8247C17.4427 4.65483 16.0445 3.80252 14.4985 3.35653C12.9525 2.91054 11.3152 2.88718 9.75705 3.28888C8.19894 3.69058 6.77702 4.50266 5.63935 5.64054C4.50169 6.77842 3.68988 8.20049 3.28847 9.75867C2.88705 11.3169 2.91072 12.9542 3.35699 14.5001C3.80327 16.046 4.65584 17.444 5.82591 18.5486C6.99599 19.6531 8.44079 20.4237 10.0099 20.7802"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 21H21V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8V12L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82491">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
