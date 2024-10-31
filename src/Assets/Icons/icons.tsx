import React from 'react';

interface IconProps {
    id: string
    color: string;
}

const CustomIcon: React.FC<IconProps> = ({ id, color }) => {
    switch (id) {
        case 'like':
            return (
                <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.23598 4.27155C8.32626 4.06841 8.52771 3.9375 8.75 3.9375C9.49592 3.9375 10.2113 4.23382 10.7387 4.76126C11.2662 5.28871 11.5625 6.00408 11.5625 6.75V9.1875H15.2421C15.5399 9.18462 15.8348 9.24628 16.1065 9.36823C16.3793 9.49065 16.6222 9.67092 16.8184 9.89653C17.0145 10.1222 17.1593 10.3877 17.2427 10.6749C17.3261 10.962 17.346 11.2638 17.3011 11.5594L16.2661 18.3093C16.1915 18.8011 15.9417 19.2495 15.5627 19.5716C15.1846 19.893 14.7033 20.0673 14.2071 20.0625H3.5C2.95299 20.0625 2.42839 19.8452 2.04159 19.4584C1.6548 19.0716 1.4375 18.547 1.4375 18V12.75C1.4375 12.203 1.6548 11.6784 2.04159 11.2916C2.42839 10.9048 2.95299 10.6875 3.5 10.6875H5.38445L8.23598 4.27155ZM6.3125 11.3694L9.09931 5.09904C9.41658 5.16618 9.71043 5.32394 9.94324 5.55676C10.2597 5.87322 10.4375 6.30245 10.4375 6.75V9.75C10.4375 10.0607 10.6893 10.3125 11 10.3125H15.245L15.2514 10.3125C15.3873 10.3109 15.5219 10.3389 15.6459 10.3946C15.7698 10.4502 15.8803 10.5322 15.9694 10.6347C16.0586 10.7373 16.1244 10.858 16.1623 10.9885C16.2002 11.1189 16.2093 11.256 16.1889 11.3903L15.1539 18.1407C15.12 18.3642 15.0064 18.568 14.8341 18.7144C14.6618 18.8609 14.4424 18.9401 14.2164 18.9375L6.3125 18.9375V11.3694ZM5.1875 18.9375V11.8125H3.5C3.25136 11.8125 3.0129 11.9113 2.83709 12.0871C2.66127 12.2629 2.5625 12.5014 2.5625 12.75V18C2.5625 18.2486 2.66127 18.4871 2.83709 18.6629C3.0129 18.8387 3.25136 18.9375 3.5 18.9375H5.1875Z"
                        fill={color}
                    />
                </svg>
            );

        case 'home':
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z"
                        stroke={color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.75 16.5V9H11.25V16.5"
                        stroke={color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );

        case 'message':
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.75 7.62502C14.7526 8.61492 14.5213 9.59144 14.075 10.475C13.5458 11.5338 12.7323 12.4244 11.7256 13.047C10.7189 13.6696 9.55868 13.9996 8.375 14C7.3851 14.0026 6.40859 13.7713 5.525 13.325L1.25 14.75L2.675 10.475C2.2287 9.59144 1.99742 8.61492 2 7.62502C2.00046 6.44134 2.33046 5.28116 2.95304 4.27443C3.57562 3.26771 4.46619 2.4542 5.525 1.92502C6.40859 1.47872 7.3851 1.24744 8.375 1.25002H8.75C10.3133 1.33627 11.7898 1.99609 12.8969 3.10317C14.0039 4.21024 14.6638 5.68676 14.75 7.25002V7.62502Z"
                        stroke={color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case 'notification':
            return (
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 6C12.5 4.80653 12.0259 3.66193 11.182 2.81802C10.3381 1.97411 9.19347 1.5 8 1.5C6.80653 1.5 5.66193 1.97411 4.81802 2.81802C3.97411 3.66193 3.5 4.80653 3.5 6C3.5 11.25 1.25 12.75 1.25 12.75H14.75C14.75 12.75 12.5 11.25 12.5 6Z"
                        stroke={color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>


            );
        case 'comment':
            return (<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.25 2.8125C4.00136 2.8125 3.7629 2.91127 3.58709 3.08709C3.41127 3.2629 3.3125 3.50136 3.3125 3.75V14.392L5.35225 12.3523C5.45774 12.2468 5.60082 12.1875 5.75 12.1875H14.75C14.9986 12.1875 15.2371 12.0887 15.4129 11.9129C15.5887 11.7371 15.6875 11.4986 15.6875 11.25V3.75C15.6875 3.50136 15.5887 3.2629 15.4129 3.08709C15.2371 2.91127 14.9986 2.8125 14.75 2.8125H4.25ZM2.79159 2.29159C3.17839 1.9048 3.70299 1.6875 4.25 1.6875H14.75C15.297 1.6875 15.8216 1.9048 16.2084 2.29159C16.5952 2.67839 16.8125 3.20299 16.8125 3.75V11.25C16.8125 11.797 16.5952 12.3216 16.2084 12.7084C15.8216 13.0952 15.297 13.3125 14.75 13.3125H5.983L3.14775 16.1477C2.98687 16.3086 2.74493 16.3567 2.53474 16.2697C2.32455 16.1826 2.1875 15.9775 2.1875 15.75V3.75C2.1875 3.20299 2.4048 2.67839 2.79159 2.29159Z"
                    fill={color} />
            </svg>);




        default:
            return null;
    }
};

export default CustomIcon; // Default export