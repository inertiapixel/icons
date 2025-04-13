import React from "react";

export const WorldPauseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59633)">
<path d="M20.9446 12.9974C21.1514 11.1428 20.7766 9.26985 19.8721 7.63764C18.9676 6.00544 17.5781 4.69475 15.896 3.88696C14.2138 3.07917 12.3221 2.81423 10.4828 3.12882C8.64342 3.4434 6.94733 4.32195 5.62923 5.64287C4.31114 6.96379 3.43623 8.66176 3.12559 10.5018C2.81495 12.3418 3.08393 14.2329 3.89532 15.9133C4.70671 17.5938 6.02038 18.9804 7.65452 19.8814C9.28865 20.7824 11.1624 21.1532 13.0166 20.9424"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H13.5016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.4614 6.14139 15.3428 9.83756 15.01 13.526"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 17V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59633">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
