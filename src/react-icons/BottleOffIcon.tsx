import React from "react";

export const BottleOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83196)">
<path d="M10 5H14V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H11C10.7348 2 10.4804 2.10536 10.2929 2.29289C10.1054 2.48043 10 2.73478 10 3V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3.5C14 5.126 14.507 6.712 15.45 8.037L15.5 8.107C16.4758 9.4777 17.0001 11.1184 17 12.801V13M17 17V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H9C8.46957 21 7.96086 20.7893 7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19V12.8C7.00008 11.2083 7.46968 9.65206 8.35 8.326M9.686 5.696C9.89446 4.98263 10.0002 4.2432 10 3.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 14.8035C7.4 14.6315 7.74568 14.3539 8 14.0005C8.22717 13.684 8.52797 13.4276 8.87642 13.2534C9.22488 13.0791 9.6105 12.9924 10 13.0005C10.3895 12.9924 10.7751 13.0791 11.1236 13.2534C11.472 13.4276 11.7728 13.684 12 14.0005C12.2272 14.317 12.528 14.5735 12.8764 14.7477C13.2249 14.9219 13.6105 15.0087 14 15.0005C14.2949 15.0068 14.5885 14.9587 14.866 14.8585"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83196">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
