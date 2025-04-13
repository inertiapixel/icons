import React from "react";

export const HeartExclamationIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72259)">
<path d="M15.0313 16.9997L12.0013 19.9997L4.50128 12.5717C4.00658 12.0903 3.61692 11.5117 3.35683 10.8723C3.09673 10.2329 2.97184 9.54664 2.99002 8.85662C3.00819 8.1666 3.16904 7.48782 3.46244 6.86303C3.75583 6.23823 4.17541 5.68094 4.69476 5.22627C5.21411 4.77159 5.82198 4.42938 6.48009 4.22117C7.1382 4.01296 7.83228 3.94327 8.51865 4.01649C9.20501 4.08971 9.86878 4.30425 10.4682 4.64659C11.0675 4.98894 11.5895 5.45169 12.0013 6.00569C12.3996 5.47914 12.8983 5.03671 13.4686 4.70392C14.0388 4.37113 14.6694 4.15458 15.3237 4.06677C15.9781 3.97896 16.6434 4.02163 17.2813 4.19231C17.9191 4.36299 18.5168 4.6583 19.0398 5.06121C19.5629 5.46411 20.001 5.96662 20.3288 6.53974C20.6567 7.11286 20.8677 7.74523 20.9499 8.40036C21.032 9.05549 20.9836 9.72039 20.8074 10.3567C20.6312 10.993 20.3307 11.5881 19.9233 12.1077"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72259">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
