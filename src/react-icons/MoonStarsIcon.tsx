import React from "react";

export const MoonStarsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67974)">
<path d="M12.0017 3.00019C12.1337 3.00019 12.2647 3.00019 12.3947 3.00019C11.1101 4.19389 10.2843 5.80003 10.061 7.53941C9.83772 9.27879 10.231 11.0414 11.1725 12.5209C12.1139 14.0004 13.5441 15.1032 15.2143 15.6377C16.8846 16.1721 18.6893 16.1043 20.3147 15.4462C19.6895 16.9507 18.6675 18.2572 17.3579 19.2264C16.0483 20.1957 14.5002 20.7912 12.8786 20.9496C11.2571 21.1079 9.623 20.8231 8.15062 20.1256C6.67825 19.428 5.42285 18.3439 4.51832 16.9888C3.6138 15.6337 3.09409 14.0585 3.01462 12.4312C2.93515 10.8038 3.29892 9.18548 4.06711 7.7487C4.8353 6.31192 5.9791 5.11061 7.3765 4.27292C8.7739 3.43523 10.3725 2.99258 12.0017 2.99219V3.00019Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4C17 4.53043 17.2107 5.03914 17.5858 5.41421C17.9609 5.78929 18.4696 6 19 6C18.4696 6 17.9609 6.21071 17.5858 6.58579C17.2107 6.96086 17 7.46957 17 8C17 7.46957 16.7893 6.96086 16.4142 6.58579C16.0391 6.21071 15.5304 6 15 6C15.5304 6 16.0391 5.78929 16.4142 5.41421C16.7893 5.03914 17 4.53043 17 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 11H21M20 10V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67974">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
