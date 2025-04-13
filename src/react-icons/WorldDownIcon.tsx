import React from "react";

export const WorldDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59695)">
<path d="M20.9856 12.5083C21.0887 10.6869 20.6358 8.87722 19.6869 7.31906C18.7381 5.7609 17.3381 4.52788 15.6726 3.78344C14.0071 3.03899 12.1547 2.81827 10.3608 3.15053C8.56703 3.4828 6.91655 4.35235 5.62816 5.64394C4.33977 6.93553 3.47431 8.58817 3.1465 10.3828C2.81868 12.1774 3.044 14.0293 3.79257 15.693C4.54115 17.3566 5.77763 18.7535 7.33814 19.6985C8.89865 20.6435 10.7095 21.0919 12.5306 20.9844"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H14.5016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.813 6.706 15.57 10.857 14.77 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 22L16 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59695">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
