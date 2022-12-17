import React from "react";

import {TermIcon} from "@warmhold:components/categories/termoreg";
import {CableIcon} from "@warmhold:components/categories/cable";
import {KDIcon} from "@warmhold:components/categories/kd";
import {WaterOneIcon, WaterTwoIcon} from "@warmhold:components/categories/water";
import {WarmIcon} from "@warmhold:components/categories/warm";

interface CategoryProps {
    title: string;
    count: number;
    children: React.ReactNode;
}

function Category({title, count, children}: CategoryProps) {
    return (
        <a className="categories__card--link" href="/">
            {children}
            <h2 className="categories__title">{title}</h2>
            <span className="categories__subtitle">({count} товаров)</span>
        </a>
    )
}

export default function () {
    return (
        <section className="categories__section section--padding">
            <div className="container">
                <div className="row mb--n25">
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-25">
                        <div className="categories__card text-center">
                            <Category
                                title={'Терморегуляторы и термостаты'}
                                count={8}
                            >
                                <span className="categories__icon">
                                   <TermIcon/>
                                </span>
                            </Category>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-25">
                        <div className="categories__card text-center">
                            <Category
                                title={'Греющие кабели SPYHEAT'}
                                count={28}
                            >
                                <span className="categories__icon">
                                    <CableIcon/>
                                </span>
                            </Category>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-25">
                        <div className="categories__card text-center">
                            <Category
                                title={'Контроллеры ПОЛИТЕХ'}
                                count={16}
                            >
                                <span className="categories__icon">
                                    <KDIcon/>
                                </span>
                            </Category>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-25">
                        <div className="categories__card text-center">
                            <Category
                                title={'Системы от протечек NEPTUN'}
                                count={2}
                            >
                                <span className="categories__icon">
                                    <WaterOneIcon/>
                                </span>
                            </Category>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-25">
                        <div className="categories__card text-center">
                            <Category
                                title={'Системы от протечек ТРИТОН'}
                                count={10}
                            >
                                <span className="categories__icon">
                                    <WaterTwoIcon/>
                                </span>
                            </Category>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-25">
                        <div className="categories__card text-center">
                            <Category
                                title={'Теплые полы SPYHEAT'}
                                count={36}
                            >
                                <span className="categories__icon">
                                    <WarmIcon/>
                                </span>
                            </Category>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}