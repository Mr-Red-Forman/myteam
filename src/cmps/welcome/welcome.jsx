import { Header } from "./header";
import { WelcomeContent } from "./welcome-content";
import bgPatternHome2 from '../../assets/img/bg-pattern-home-2.svg'


export function Welcome() {
    return (
        <div className="full page-layout welcome">
            <Header />
            <WelcomeContent />
            <div className="img-bottom">
                <img className="imgBottom" src={bgPatternHome2} alt="bgPatternHome2 " />

            </div>

        </div>
    )
}