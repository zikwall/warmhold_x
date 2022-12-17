import {AddToCartIcon, CompareIcon, QuickViewIcon, WishlistIcon} from "@warmhold:components/product/icons";
import Rating from "@warmhold:components/product/rating";
import {useState} from "react";
import Image from "next/image";

function Product({title, img1, img2, newPrice, oldPrice, discount, rating}: Product) {
    return (
        <article className="product__card">
            <div className="product__card--thumbnail">
                <a className="product__card--thumbnail__link display-block" href="product-details">
                    <Image
                        loading="lazy"
                        width={209} height={170}
                        className="product__card--thumbnail__img product__primary--img"
                        src={img1}
                        alt="product-img"
                    />
                    <Image
                        loading="lazy"
                        width={209} height={170}
                        className="product__card--thumbnail__img product__secondary--img"
                        src={img2}
                        alt="product-img"
                    />
                </a>
                {
                    !!discount && <span className="product__badge">-{discount}%</span>
                }
                <ul className="product__card--action d-flex align-items-center justify-content-center">
                    <li className="product__card--action__list">
                        <QuickViewIcon/>
                    </li>
                    <li className="product__card--action__list">
                        <CompareIcon/>
                    </li>
                    <li className="product__card--action__list">
                        <WishlistIcon/>
                    </li>
                </ul>
            </div>
            <div className="product__card--content">
                <Rating value={rating}/>

                <h3 className="product__card--title">
                    <a href="/product-details">{title}</a>
                </h3>
                <div className="product__card--price">
                    <span className="current__price">₽{newPrice}</span>
                    <span className="old__price"> ₽{oldPrice}</span>
                </div>
                <div className="product__card--footer">
                    <AddToCartIcon/>
                </div>
            </div>
        </article>
    )
}

interface Product {
    title: string;
    img1: string;
    img2: string;
    oldPrice: number;
    newPrice: number;
    discount?: number;
    rating: number;
}

interface ProductTabProps {
    id: string;
    active: boolean;
    products: Array<Product>
}

function ProductTab({id, active, products}: ProductTabProps) {
    return (
        <div id={id} className={["tab-pane fade show", active ? "active" : ""].join(" ")} role="tabpanel">
            <div className="product__wrapper">
                <div className="row mb--n30">
                    {
                        products.map((product, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
                                <Product
                                    title={product.title}
                                    img1={product.img1}
                                    img2={product.img2}
                                    newPrice={product.newPrice}
                                    oldPrice={product.oldPrice}
                                    discount={product.discount}
                                    rating={product.rating}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default function Products() {
    const [current, setCurrent] = useState("recent");

    return (
        <section className="product__section section--padding  pt-0">
            <div className="container">
                <div
                    className="section__heading section__heading--flex border-bottom d-flex justify-content-between mb-30">
                    <h2 className="section__heading--maintitle">Смотреть <span>Товары</span></h2>
                    <ul className="nav tab__btn--wrapper" role="tablist">
                        <li className="tab__btn--item" role="presentation">
                            <button
                                onClick={() => {
                                    setCurrent("recent")
                                }}
                                className="tab__btn--link active"
                                data-bs-toggle="tab"
                                data-bs-target="#recent"
                                type="button" role="tab"
                                aria-selected="true">
                                Новые постуления
                            </button>
                        </li>
                        <li className="tab__btn--item" role="presentation">
                            <button
                                onClick={() => {
                                    setCurrent("bestseller")
                                }}
                                className="tab__btn--link"
                                data-bs-toggle="tab"
                                data-bs-target="#bestseller"
                                type="button" role="tab"
                                aria-selected="false">
                                Бестселлеры
                            </button>
                        </li>
                        <li className="tab__btn--item" role="presentation">
                            <button
                                onClick={() => {
                                    setCurrent("top")
                                }}
                                className="tab__btn--link"
                                data-bs-toggle="tab"
                                data-bs-target="#top"
                                type="button"
                                role="tab"
                                aria-selected="false">
                                Топ
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="product__section--inner">
                    <div className="tab-content" id="nav-tabContent">
                        <ProductTab id={"recent"} active={current == "recent"} products={
                            Array(8).fill({
                                title: 'Контроллер давления Политех РАСШИРЕННЫЙ (плавный пуск), 1/2 дюйма, до 2МПа',
                                img1: 'https://cdn1.ozone.ru/s3/multimedia-y/wc1000/6385153666.jpg',
                                img2: 'https://cdn1.ozone.ru/s3/multimedia-0/wc1000/6495070164.jpg',
                                oldPrice: 4800.00,
                                newPrice: 4500.00,
                                discount: 10,
                                rating: getRandomInt(5),
                            })
                        }/>
                        <ProductTab id={"bestseller"} active={current == "bestseller"} products={
                            Array(8).fill({
                                title: 'Система защиты от протечек воды Neptun Bugatti Base 1/2 дюйма (Нептун Бугатти Бэйс)',
                                img1: 'https://cdn1.ozone.ru/s3/multimedia-v/wc1000/6488749531.jpg',
                                img2: 'https://cdn1.ozone.ru/s3/multimedia-l/wc1000/6488749521.jpg',
                                oldPrice: 23905.00,
                                newPrice: 22709.00,
                                discount: 10,
                                rating: getRandomInt(5),
                            })
                        }/>
                        <ProductTab id={"top"} active={current == "top"} products={
                            Array(8).fill({
                                title: 'Система защиты от протечек воды 1/2 дюйма SPYHEAT ТРИТОН (с двумя шаровыми кранами и 4 датчиками)',
                                img1: 'https://cdn1.ozone.ru/s3/multimedia-v/wc1000/6446780011.jpg',
                                img2: 'https://cdn1.ozone.ru/s3/multimedia-u/wc1000/6446780010.jpg',
                                oldPrice: 14801.00,
                                newPrice: 13411.00,
                                discount: 10,
                                rating: getRandomInt(5),
                            })
                        }/>
                    </div>
                </div>
            </div>
        </section>
    );
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}