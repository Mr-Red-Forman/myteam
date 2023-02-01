import bgPatternHome1 from '../../assets/img/bg-pattern-home-1.svg'


export function WelcomeContent() {
    return (

        <div className="full page-layout welcome-content">
            <img src={bgPatternHome1} alt="bgPatternHome1" />
            <div className="content">
                <div className="statement">
                    find your best
                </div>
                <div className="explanation">
                    <div className="line"></div>
                    <div className="text">

                        Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
                    </div>

                </div>

            </div>
        </div>

    )
}