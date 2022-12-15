import Image from "next/image";
import { Main } from "@warmhold:layouts";

export default function Home() {
    return (
        <Main title={'Warmhold X'}>
            <div style={{height: '1000px'}}/>
            <div className="brand__section section--padding pt-0">
                <div className="container">
                    <div className="brand__section--inner d-flex justify-content-between align-items-center">
                        <div className="brang__logo--items">
                            <Image width={145} height={38} className="brang__logo--img" src="/img/logo/brand-logo1.webp" alt="brand-logo"/>
                        </div>
                        <div className="brang__logo--items">
                            <Image width={145} height={38} className="brang__logo--img" src="/img/logo/brand-logo2.webp" alt="brand-logo"/>
                        </div>
                        <div className="brang__logo--items">
                            <Image width={145} height={38} className="brang__logo--img" src="/img/logo/brand-logo3.webp" alt="brand-logo"/>
                        </div>
                        <div className="brang__logo--items">
                            <Image width={145} height={38} className="brang__logo--img" src="/img/logo/brand-logo4.webp" alt="brand-logo"/>
                        </div>
                        <div className="brang__logo--items">
                            <Image width={145} height={38} className="brang__logo--img" src="/img/logo/brand-logo5.webp" alt="brand-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
