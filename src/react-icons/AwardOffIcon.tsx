import React from "react";

export const AwardOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84611)">
<path d="M16.719 12.7058C17.6258 11.5512 18.0778 10.1041 17.9893 8.63857C17.9009 7.17306 17.2782 5.79083 16.2391 4.75359C15.2 3.71635 13.8167 3.0961 12.351 3.01027C10.8853 2.92444 9.43904 3.37898 8.28598 4.28784M6.53098 6.52784C6.02759 7.63878 5.87471 8.87675 6.09274 10.0768C6.31076 11.2768 6.88932 12.3819 7.75132 13.2447C8.61332 14.1076 9.71782 14.6873 10.9176 14.9065C12.1174 15.1257 13.3555 14.9741 14.467 14.4718"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14.999L15.4 20.889L16.998 17.656L17.705 17.702M18.813 14.8L17.196 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84611">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
