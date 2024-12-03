import { Logo, Keyboard, Crown, About, Settings } from "@icons/SvgAll";

export function TopUI() {
    return (
        <header className="top-ui">
            <div className="top-ui-content">
                <a className="logo-link">
                    <Logo className={"logo-svg"} />
                    <h1 className="title"> monkeytype </h1>
                </a>
                <a className="button-link start-test">
                    <Keyboard className="svg" />
                </a>
                <a className="button-link leaderboards">
                    <Crown className="svg" />
                </a>
                <a className="button-link about">
                    <About className="svg" />
                </a>
                <a className="button-link settings">
                    <Settings className="svg" />
                </a>

            </div>
        </header>
    );
};