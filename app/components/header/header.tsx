import Image from "next/image";
import {SubHeader} from "@warmhold:components/header/head";
import React from "react";

type Item = {
    title: string;
    link: string;
    items?: Array<Item>;
    groups?: Array<Array<Item>>
}

const Menu: Array<Item> = [
    {
        title: 'Главная',
        link: '/',
    },
    {
        title: 'Мазгаин',
        link: '/shop',
        groups: [
            [...Array(5)].map(x => {
                return {
                    title: `Пункт ${x}`,
                    link: `/item_${x}`,
                }
            }),
            [...Array(5)].map(x => {
                return {
                    title: `Пункт1 ${x}`,
                    link: `/item1_${x}`,
                }
            }),
            [...Array(5)].map(x => {
                return {
                    title: `Пункт2 ${x}`,
                    link: `/item2_${x}`,
                }
            }),
            [...Array(5)].map(x => {
                return {
                    title: `Пункт3 ${x}`,
                    link: `/item3_${x}`,
                }
            }),
        ],
    },
];

function buildMenu() {
    return Menu.map((item, index) => {
        if (typeof item.items !== 'undefined') {
            // todo
        }

        if (typeof item.groups !== 'undefined') {
            return (
                <li key={`ul_${index}`} className="header__menu--items mega__menu--items">
                    <a className="header__menu--link" href="/">
                        {item.title}
                        <svg
                            className="menu__arrowdown--icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="7.41"
                            viewBox="0 0 12 7.41">
                            <path
                                d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                                transform="translate(-6 -8.59)"
                                fill="currentColor"
                                opacity="0.7"
                            />
                        </svg>
                    </a>
                    {
                        item.groups.map((group, index2) => (
                            <ul key={`ul_${index}_${index2}`} className="header__mega--menu d-flex">
                                {
                                    group.map((item, index3) => (
                                            <li key={`li_${index}_${index2}_${index3}`}
                                                className="header__mega--sub__menu_li">
                                                <a className="header__mega--sub__menu--title" href={item.link}>
                                                    {item.title}
                                                </a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        ))
                    }
                </li>
            );
        }

        return (
            <li className="header__menu--items">
                <a
                    className="header__menu--link active"
                    href={item.link}>{item.title}
                </a>
            </li>
        );
    })
}

interface MegaMenuBannerProps {
    children: React.ReactNode;
    imageUrl: string;
    actionUrl: string;
}

function MegaMenuBanner({ imageUrl, actionUrl, children }: MegaMenuBannerProps) {
    return (
        <a className="header__mega--menu__banner display-block"
           href={actionUrl}>
            <Image
                width={555}
                height={195}
                className="header__mega--menu__banner--img"
                src={imageUrl}
                alt="banner-menu"
            />
            <div className="banner__content">
                {children}
            </div>
        </a>
    );
}

function MainItems() {
    return (
        <ul className="header__menu--wrapper d-flex">
            <li className="header__menu--items">
                <a className="header__menu--link active" href="/">
                    Главная
                </a>
            </li>

            <li className="header__menu--items mega__menu--items">
                <a className="header__menu--link" href="/">
                    Магазин
                    <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg"
                         width="12" height="7.41" viewBox="0 0 12 7.41">
                        <path d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                              transform="translate(-6 -8.59)" fill="currentColor"
                              opacity="0.7"/>
                    </svg>
                </a>
                <ul className="header__mega--menu d-flex">
                    <li className="header__mega--menu__li">
                        <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                                <b>Контроллеры давления и системы от протечки</b>
                            </li>
                            <br />
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                    Насосы для дачи
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                    Системы защиты от протечек (Neptun)
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                    Системы защиты от протечек (Spyheat)
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="header__mega--menu__li">
                        <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                                <b>Греющие кабели</b>
                            </li>
                            <br />
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                     Для кровли кровля
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                     Для водопровода
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                     Для водостока
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                     Для открытой площадки
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                     для трубопровода
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="header__mega--menu__li">
                        <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                                <b>Теплые полы</b>
                            </li>
                            <br />
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                    Электрический теплый пол
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                    Дополнительный комплект монтажа теплого пола
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="header__mega--menu__li">
                        <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                                <b>Регуляторы</b>
                            </li>
                            <br />
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                    Для теплого пола
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                    Для инфракрасного отопления
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                    Для радиаторного отопления
                                </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                                <a className="header__mega--sub__menu--title" href="/">
                                    Для систем антиобледенения
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="header__mega--menu__li fullscreen__style d-flex">
                        <MegaMenuBanner imageUrl={'/img/banner/banner1.webp'} actionUrl={'/shop?id=1'}>
                            <div className="banner__content">
                                <span className="banner__content--subtitle text__secondary mb-10">20% скидка</span>
                                <h2 className="banner__content--title"><span
                                    className="banner__content--title__inner">Новая</span> ПОСТАВКА
                                </h2>
                                <span className="banner__content--price">₽15.000</span>
                            </div>
                        </MegaMenuBanner>
                        <MegaMenuBanner imageUrl={'/img/banner/banner2.webp'} actionUrl={'/shop?id=2'}>
                            <div className="banner__content right">
                                <span className="banner__badge--style2">20%</span>
                                <h2 className="banner__content--title"><span
                                    className="banner__content--title__inner"> НА </span> ВСЕ <br/> ТОВАРЫ
                                </h2>
                            </div>
                        </MegaMenuBanner>
                    </li>
                </ul>
            </li>
            <li className="header__menu--items">
                <a className="header__menu--link" href="contact.html">
                    Контакты
                </a>
            </li>
        </ul>
    );
}

function HeaderSticky() {
    return (
        <div className="main__header header__sticky">
            <div className="container">
                <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
                    <div className="offcanvas__header--menu__open ">
                        <a className="offcanvas__header--menu__open--btn" href="/"
                           data-offcanvas="">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512">
                                <path fill="currentColor" stroke="currentColor" strokeLinecap="round"
                                      strokeMiterlimit="10" strokeWidth="32"
                                      d="M80 160h352M80 256h352M80 352h352"
                                />
                            </svg>
                            <span className="visually-hidden">Offcanvas Menu Open</span>
                        </a>
                    </div>
                    <div className="main__logo">
                        <h1 className="main__logo--title">
                            <a className="main__logo--link" href="/">
                                <Image
                                    width={178}
                                    height={50}
                                    className="main__logo--img" src="/WARMHOLD.png" alt="logo-img"
                                />
                            </a>
                        </h1>
                    </div>

                    <div className="header__menu d-none d-lg-block header__sticky--block">
                        <nav className="header__menu--navigation">
                            <MainItems />
                        </nav>
                    </div>
                    <div className="header__account header__sticky--none">
                        <ul className="header__account--wrapper d-flex align-items-center">
                            <li className="header__account--items d-none d-lg-block">
                                <a className="header__account--btn" href="my-account.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round" className=" -user">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    <span className="visually-hidden">Мой аккаунт</span>
                                </a>
                            </li>
                            <li className="header__account--items d-none d-lg-block">
                                <a className="header__account--btn" href="wishlist.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round" className=" -heart">
                                        <path
                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                                    </svg>
                                    <span className="items__count">3</span>
                                </a>
                            </li>
                            <li className="header__account--items header__minicart--items">
                                <a className="header__account--btn minicart__open--btn" href="/"
                                   data-offcanvas="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.706" height="22.534"
                                         viewBox="0 0 14.706 13.534">
                                        <g transform="translate(0 0)">
                                            <g>
                                                <path data-name="Path 16787"
                                                      d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                                      transform="translate(0 -463.248)" fill="currentColor"/>
                                                <path data-name="Path 16788"
                                                      d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                                      transform="translate(-1.191 -466.622)" fill="currentColor"/>
                                                <path data-name="Path 16789"
                                                      d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                                      transform="translate(-2.875 -466.622)" fill="currentColor"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="items__count">2</span>
                                    <span className="minicart__btn--text">Корзина <br/> <span
                                        className="minicart__btn--text__price">₽13782.34</span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__account header__sticky--block">
                        <ul className="header__account--wrapper d-flex align-items-center">
                            <li className="header__account--items d-none d-lg-block">
                                <a className="header__account--btn" href="my-account.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round" className=" -user">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    <span className="visually-hidden">Мой аккаунт</span>
                                </a>
                            </li>
                            <li className="header__account--items d-none d-lg-block">
                                <a className="header__account--btn" href="wishlist.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round" className=" -heart">
                                        <path
                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                                    </svg>
                                    <span className="items__count">3</span>
                                </a>
                            </li>
                            <li className="header__account--items header__minicart--items">
                                <a className="header__account--btn minicart__open--btn" href="/"
                                   data-offcanvas="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.706" height="22.534"
                                         viewBox="0 0 14.706 13.534">
                                        <g transform="translate(0 0)">
                                            <g>
                                                <path data-name="Path 16787"
                                                      d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                                      transform="translate(0 -463.248)" fill="currentColor"/>
                                                <path data-name="Path 16788"
                                                      d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                                      transform="translate(-1.191 -466.622)" fill="currentColor"/>
                                                <path data-name="Path 16789"
                                                      d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                                      transform="translate(-2.875 -466.622)" fill="currentColor"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="items__count">2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Offcanvas() {
    return (
        <div className="offcanvas__header">
            <div className="offcanvas__inner">
                <div className="offcanvas__logo">
                    <a className="offcanvas__logo_link" href="/">
                        <Image
                            width={158}
                            height={36}
                            className="main__logo--img" src="/WARMHOLD.png" alt="logo-img"
                        />
                    </a>
                    <button className="offcanvas__close--btn" data-offcanvas="">close</button>
                </div>
                <nav className="offcanvas__menu">
                    <ul className="offcanvas__menu_ul">
                        <li className="offcanvas__menu_li active">
                            <a className="offcanvas__menu_item" href="/">Главная</a>
                        </li>
                        <li className="offcanvas__menu_li">
                            <a className="offcanvas__menu_item" href="/contacts">Контакты</a>
                        </li>
                    </ul>
                    <div className="offcanvas__account--items">
                        <a className="offcanvas__account--items__btn d-flex align-items-center" href="/login">
                            <span className="offcanvas__account--items__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="32"/><path
    d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
    fill="none" stroke="currentColor" strokeMiterlimit="10"
    strokeWidth="32"/></svg>
                            </span>
                            <span className="offcanvas__account--items__label">Вход / Регистрация</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

function OffcanvasToolbar() {
    return (
        <div className="offcanvas__stikcy--toolbar">
            <ul className="d-flex justify-content-between">
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn" href="/">
                    <span className="offcanvas__stikcy--toolbar__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="21.51" height="21.443"
                             viewBox="0 0 22 17"><path fill="currentColor"
    d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"/></svg>
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Главная</span>
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn" href="/shop">
                    <span className="offcanvas__stikcy--toolbar__icon">
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18.51" height="17.443"
                             viewBox="0 0 448 512"><path
    d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z"/></svg>
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Товары</span>
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn minicart__open--btn" href="#"
                       data-offcanvas="">
                        <span className="offcanvas__stikcy--toolbar__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.706" height="22.534"
                                 viewBox="0 0 14.706 13.534">
                                <g transform="translate(0 0)">
                                  <g>
                                    <path data-name="Path 16787"
    d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
    transform="translate(0 -463.248)" fill="currentColor"/>
                                    <path data-name="Path 16788"
    d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
    transform="translate(-1.191 -466.622)" fill="currentColor"/>
                                    <path data-name="Path 16789"
    d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
    transform="translate(-2.875 -466.622)" fill="currentColor"/>
                                  </g>
                                </g>
                            </svg>
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Корзина</span>
                        <span className="items__count">3</span>
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn" href="/wishlist">
                        <span className="offcanvas__stikcy--toolbar__icon" style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className=" -heart"><path
    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Избранное</span>
                        <span className="items__count">3</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default function () {
    return (
        <header className="header__section">
            <SubHeader/>
            <HeaderSticky />
            <div className="header__bottom d-none d-lg-block">
                <div className="container">
                    <div
                        className="header__bottom--inner__style3 position__relative d-flex align-items-center justify-content-between">
                        <div className="header__menu header__menu--style4">
                            <nav className="header__menu--navigation">
                                <MainItems />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <Offcanvas />
            <OffcanvasToolbar />
        </header>
    );
}