import React from 'react';

type SideArrowIconProps = {
    width?: number;
    height?: number;
    color?: string;
};

const SideArrowIcon: React.FC<SideArrowIconProps> = ({ width = 8, height = 7, color = '#C40C0C' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 8 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.56076 2.98928C8.01856 3.14031 8.01856 3.78789 7.56076 3.93893L0.872305 6.14555C0.353364 6.31675 -0.0247557 5.65052 0.388312 5.29277L2.06358 3.84185C2.2938 3.64245 2.29379 3.2853 2.06355 3.08592L0.38875 1.63559C-0.0243559 1.27786 0.353758 0.611581 0.872717 0.782793L7.56076 2.98928Z"
                fill={color}
            />
        </svg>
    );
};

export default SideArrowIcon;
