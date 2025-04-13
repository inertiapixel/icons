import React from "react";

export const Alien1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86035)">
<path d="M11 17C11.3154 17.1377 11.6559 17.2087 12 17.2087C12.3441 17.2087 12.6846 17.1377 13 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0016 3C7.33762 3 4.60562 5.331 4.13962 8.595C3.67208 11.6098 4.38874 14.6886 6.13962 17.187C6.98229 18.4188 8.07163 19.4622 9.33862 20.251C11.0046 21.251 13.0026 21.251 14.6686 20.251C15.9356 19.4622 17.025 18.4188 17.8676 17.187C19.6114 14.6854 20.3274 11.6095 19.8676 8.595C19.4016 5.33 16.6696 3 12.0056 3H12.0016Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11L10 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 11L14 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86035">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
