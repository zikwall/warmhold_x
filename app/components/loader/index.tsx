interface LoaderProps {
    loaded: boolean;
}

export default function Loader({ loaded }: LoaderProps) {
    const letters = [
        'З', 'А', 'Г', 'Р', 'У', 'З', 'К', 'А',
    ];

    return (
        <div id="preloader" className={[loaded ? "loaded" : ""].join(" ")}>
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="animation-preloader">
                    <div className="spinner"/>
                    <div className="txt-loading">
                        {
                            letters.map((letter, index) => (
                                    <span
                                        key={`${index}_${letter}`}
                                        data-text-preloader={ letter }
                                        className="letters-loading">{ letter }
                                    </span>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}