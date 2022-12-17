import {MarketDropdown} from "@warmhold:components/header/market_dropdown";

function UserActions() {
    return (
        <ul className="header__top--link d-flex align-items-center">
            <li className="header__link--menu">
                <a className="header__link--menu__text" href="/wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round" className=" -heart">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    Избранное
                </a>
            </li>
            <li className="header__link--menu">
                <a className="header__link--menu__text"
                   href="/compare">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                         viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="32"
                              d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"/>
                        <path
                            d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208"
                            fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="32"/>
                    </svg>
                    Сравнение
                </a>
            </li>
        </ul>
    );
}

export function SubHeader() {
    return (
        <div className="header__topbar border-bottom">
            <div className="container">
                <div className="header__topbar--inner d-flex align-items-center justify-content-between">
                    <div className="language__currency style3 d-none d-lg-block">
                        <ul className="d-flex align-items-center">
                            <li className="language__currency--list style2">
                                <MarketDropdown
                                    title={'Ozon'}
                                    icon={'/ozon.ico'}
                                    categories={
                                        [
                                            {
                                                title: 'Контроллеры давления',
                                                link: 'https://www.ozon.ru/seller/warmhold-204870/dom-i-sad-14500/',
                                            },
                                            {
                                                title: 'Системы защиты от протечек',
                                                link: 'https://www.ozon.ru/seller/warmhold-204870/vodosnabzhenie-31846/',
                                            },
                                            {
                                                title: 'Греющие кабели',
                                                link: 'https://www.ozon.ru/seller/warmhold-204870/greyushchiesya-kabeli-30796/',
                                            },
                                            {
                                                title: 'Теплые полы',
                                                link: 'https://www.ozon.ru/seller/warmhold-204870/elektricheskie-teplye-poly-10217/',
                                            },
                                            {
                                                title: 'Трморегуляторы/Термостаты',
                                                link: 'https://www.ozon.ru/seller/warmhold-204870/datchiki-regulyatory-dlya-teplyh-polov-31840/',
                                            },
                                        ]
                                    }
                                />
                            </li>
                            <li className="language__currency--list style2">
                                <MarketDropdown
                                    title={'Yandex'}
                                    icon={'/yandex.png'}
                                    categories={
                                        [
                                            {
                                                title: 'Контроллеры давления', link: '',
                                            },
                                            {
                                                title: 'Системы защиты от протечек', link: '',
                                            },
                                            {
                                                title: 'Греющие кабели', link: '',
                                            },
                                            {
                                                title: 'Теплые полы', link: '',
                                            },
                                        ]
                                    }
                                />
                            </li>
                            <li className="language__currency--list style2">
                                <MarketDropdown
                                    title={'Wildberries'}
                                    icon={'/wildberries.png'}
                                    categories={
                                        [
                                            {
                                                title: 'Контроллеры давления', link: '',
                                            },
                                            {
                                                title: 'Системы защиты от протечек', link: '',
                                            },
                                            {
                                                title: 'Греющие кабели', link: '',
                                            },
                                            {
                                                title: 'Теплые полы', link: '',
                                            },
                                        ]
                                    }
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="header__top--right d-flex align-items-center">
                        <UserActions />
                    </div>
                </div>
            </div>
        </div>
    );
}