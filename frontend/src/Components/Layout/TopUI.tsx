import { Logo, Keyboard, Crown, About, Settings, Notifications, Profile } from "@icons/SvgAll";

export function TopUI() {
    const profileName = "bagomed";
    const level = 44;
    return (
        <header className="top-ui">
            <div className="top-ui-content">
                <span className="group left">
                    <a className="logo-link" href="#">
                        <Logo className={"logo-svg"} />
                        <h1 className="title"> monkeytype </h1>
                    </a>
                    <a className="button-link start-test" href="#">
                        <Keyboard className="svg" />
                    </a>
                    <a className="button-link leaderboards" href="#">
                        <Crown className="svg" />
                    </a>
                    <a className="button-link about" href="#">
                        <About className="svg" />
                    </a>
                    <a className="button-link settings" href="#">
                        <Settings className="svg" />
                    </a>
                </span>
                <span className="group right">
                    <a className="button-link notifications">
                        <Notifications className="svg" />
                    </a>
                    <a className="button-link profile">
                        <Profile className="svg" />
                        <span className="profile-name"> {profileName}</span>
                        <div className="level"> {level} </div>
                    </a>
                </span>

            </div>
        </header>
    );
};