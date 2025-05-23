import React from "react";

export const ContrastOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77884)">
<path d="M12 12V17C13.3197 17.002 14.5863 16.4806 15.522 15.55M16.914 12.927C17.0503 12.2045 17.0256 11.4609 16.8417 10.7491C16.6577 10.0372 16.3191 9.37472 15.8498 8.80873C15.3806 8.24275 14.7923 7.78721 14.1268 7.47457C13.4614 7.16194 12.7352 6.9999 12 7V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.64091 5.63156C3.95175 7.31821 3.00178 9.60679 3 11.9938C2.99822 14.3809 3.94477 16.6709 5.63141 18.3601C7.31806 20.0492 9.60664 20.9992 11.9937 21.001C14.3808 21.0028 16.6707 20.0562 18.3599 18.3696M20.0399 16.0516C20.893 14.3614 21.1914 12.4453 20.8926 10.5757C20.5938 8.70622 19.7131 6.97852 18.3757 5.63846C17.0383 4.2984 15.3123 3.41423 13.4434 3.11173C11.5745 2.80923 9.65775 3.10381 7.96591 3.95356"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77884">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
