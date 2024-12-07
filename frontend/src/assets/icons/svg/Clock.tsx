interface ClockProps {
    className: string;
    // fillColor: string;
}
export default function Clock({ className, /*fillColor*/ }: ClockProps) {
    return (

        <svg className={className} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="clock">
            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M14,15.7c-0.5,0.3-1.1,0.1-1.4-0.4l-1.5-2.8
          C11,12.3,11,12.2,11,12V7c0-0.6,0.4-1,1-1s1,0.4,1,1v4.7l1.4,2.6C14.6,14.8,14.5,15.4,14,15.7z"></path>
        </svg>

    );
};
