interface ProfileProps {
    className: string;
}
export default function Profile({ className }: ProfileProps) {
    return (
        <svg className={className} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="inherit" height="inherit" viewBox="0 0 32.000000 32.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M120 270 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34
60 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9 -40 -20z"/>
                <path d="M88 134 c-47 -20 -58 -49 -29 -78 32 -31 170 -31 202 0 29 30 18 58
-32 78 -49 20 -93 20 -141 0z"/>
            </g>
        </svg>




    );
}