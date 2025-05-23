import React from "react";

export const WorldOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59642)">
<path d="M5.65718 5.6144C3.96789 7.30078 3.01769 9.58916 3.01563 11.9761C3.01357 14.3631 3.9598 16.6531 5.64618 18.3424C7.33256 20.0317 9.62094 20.9819 12.0079 20.984C14.3949 20.986 16.6849 20.0398 18.3742 18.3534M20.0462 16.0314C20.8923 14.3425 21.1856 12.4301 20.8845 10.5653C20.5833 8.70038 19.703 6.97754 18.3683 5.64079C17.0335 4.30405 15.312 3.42118 13.4476 3.11726C11.5832 2.81333 9.67037 3.10376 7.98018 3.9474"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H9.00156M13.0016 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H15.0016M19.0016 15H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4994 3C10.9029 3.95539 10.4027 4.9677 10.0064 6.022M9.15941 9.167C8.47941 13.194 9.25941 17.411 11.4994 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.0067 5.41274 14.8832 8.1653 15.049 11.005M14.842 14.823C14.4733 17.0155 13.6776 19.1142 12.5 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59642">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
