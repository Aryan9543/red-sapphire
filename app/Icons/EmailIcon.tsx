
import React from 'react';

type EmailIconProps = {
    width?: number;
    height?: number;
    color?: string;
};

const EmailIcon: React.FC<EmailIconProps> = ({ width = 12, height = 9, color = '#C40C0C' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 6.75C6.375 6.75 6.77344 6.63281 7.10156 6.375L12 2.57812V7.875C12 8.50781 11.4844 9 10.875 9H1.125C0.492188 9 0 8.50781 0 7.875V2.57812L4.875 6.375C5.20312 6.63281 5.60156 6.75 6 6.75ZM0.375 1.92188C0.140625 1.73438 0 1.42969 0 1.125C0 0.515625 0.492188 0 1.125 0H10.875C11.4844 0 12 0.515625 12 1.125C12 1.42969 11.8359 1.73438 11.6016 1.92188L6.63281 5.78906C6.25781 6.07031 5.71875 6.07031 5.34375 5.78906L0.375 1.92188Z"
                fill={color}
            />
        </svg>
    );
};

export default EmailIcon;
