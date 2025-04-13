import React from "react";

export const TargetArrowIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62000)">
<path d="M11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7C11.0111 7 10.0444 7.29324 9.22215 7.84265C8.39991 8.39206 7.75904 9.17295 7.3806 10.0866C7.00217 11.0002 6.90315 12.0055 7.09608 12.9755C7.289 13.9454 7.76521 14.8363 8.46447 15.5355C9.16373 16.2348 10.0546 16.711 11.0246 16.9039C11.9945 17.0969 12.9998 16.9978 13.9134 16.6194C14.827 16.241 15.6079 15.6001 16.1574 14.7779C16.7068 13.9556 17 12.9889 17 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.9995 3.05612C11.1456 2.84813 9.27281 3.2214 7.6403 4.12429C6.00778 5.02718 4.69618 6.41507 3.88694 8.09598C3.07769 9.77688 2.81079 11.6677 3.12316 13.507C3.43552 15.3462 4.31172 17.0429 5.63054 18.3624C6.94936 19.6819 8.64562 20.5589 10.4847 20.8722C12.3238 21.1855 14.2147 20.9195 15.896 20.1111C17.5774 19.3027 18.9659 17.9918 19.8696 16.3598C20.7733 14.7277 21.1476 12.8552 20.9405 11.0011"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6V9H18L21 6H18V3L15 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 9L12 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62000">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
