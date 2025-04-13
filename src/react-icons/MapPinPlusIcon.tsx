import React from "react";

export const MapPinPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69413)">
<path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.7931 21.3208C12.4253 21.4796 12.0183 21.5243 11.6248 21.4491C11.2313 21.3738 10.8694 21.1821 10.5861 20.8988L6.34213 16.6558C5.38087 15.6942 4.68055 14.5035 4.30731 13.196C3.93408 11.8886 3.90023 10.5076 4.20898 9.18342C4.51772 7.85925 5.15887 6.63563 6.07188 5.62809C6.98489 4.62055 8.13964 3.86233 9.42708 3.42504C10.7145 2.98774 12.0922 2.8858 13.43 3.12884C14.7677 3.37187 16.0215 3.95186 17.0729 4.81405C18.1242 5.67623 18.9385 6.79216 19.4388 8.05645C19.9391 9.32075 20.1089 10.6917 19.9321 12.0398"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69413">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
