import React from "react";

export const CashOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79925)">
<path d="M13 9H19C19.5304 9 20.0391 9.21071 20.4142 9.58579C20.7893 9.96086 21 10.4696 21 11V17M19 19H9C8.46957 19 7.96086 18.7893 7.58579 18.4142C7.21071 18.0391 7 17.5304 7 17V11C7 10.4696 7.21071 9.96086 7.58579 9.58579C7.96086 9.21071 8.46957 9 9 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5839 12.5898C12.2198 12.9673 12.0186 13.4727 12.0235 13.997C12.0284 14.5214 12.2391 15.0229 12.6102 15.3935C12.9813 15.764 13.4831 15.974 14.0075 15.9782C14.5319 15.9824 15.037 15.7804 15.4139 15.4158"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5H9M5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79925">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
