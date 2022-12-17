import Image from "next/image";

export default function () {
    return (
        <div className="brand__section section--padding pt-0">
            <div className="container">
                <div className="brand__section--inner d-flex justify-content-between align-items-center">
                    <div className="brang__logo--items">
                        <Image width={145} height={38} className="brang__logo--img" src="/b_yamarket.png" alt="brand-logo"/>
                    </div>
                    <div className="brang__logo--items">
                        <Image width={145} height={38} className="brang__logo--img" src="/b_wildberries.png" alt="brand-logo"/>
                    </div>
                    <div className="brang__logo--items">
                        <Image width={145} height={38} className="brang__logo--img" src="/b_ozon.png" alt="brand-logo"/>
                    </div>
                    <div className="brang__logo--items">
                        <Image width={145} height={38} className="brang__logo--img" src="/b_sber.png" alt="brand-logo"/>
                    </div>
                    <div className="brang__logo--items">
                        <Image width={145} height={38} className="brang__logo--img" src="/b_kazan.png" alt="brand-logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}