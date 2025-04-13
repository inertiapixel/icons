import React from "react";

export const GiftOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72866)">
<path d="M12 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V11C21 11.2652 20.8946 11.5196 20.7071 11.7071C20.5196 11.8946 20.2652 12 20 12H16M12 12H4C3.73478 12 3.48043 11.8946 3.29289 11.7071C3.10536 11.5196 3 11.2652 3 11V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12V15M19 19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.50025 8.00043C7.13269 8.00047 6.76965 7.91946 6.43698 7.76317C6.1043 7.60688 5.81018 7.37916 5.57557 7.09622C5.34095 6.81329 5.17161 6.4821 5.0796 6.12625C4.98759 5.77039 4.97518 5.39863 5.04325 5.03743M7.06625 3.03743C7.20625 3.01443 7.35225 3.00043 7.50025 3.00043C9.47425 2.96643 11.2602 4.95043 12.0002 8.00043C12.7402 4.95043 14.5262 2.96643 16.5002 3.00043C17.1633 3.00043 17.7992 3.26382 18.268 3.73266C18.7369 4.2015 19.0002 4.83739 19.0002 5.50043C19.0002 6.16347 18.7369 6.79936 18.268 7.2682C17.7992 7.73704 17.1633 8.00043 16.5002 8.00043"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72866">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
