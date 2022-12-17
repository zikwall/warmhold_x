import Image from "next/image";
import React, {useState} from "react";
import {CloseWrapper} from "@warmhold:hooks";

export type MarketCategory = {
    title: string;
    link: string;
}

export interface MarketDropdownProps {
    title: string;
    icon: string;
    categories: Array<MarketCategory>
}

export function MarketDropdown({title, icon, categories}: MarketDropdownProps) {
    const [active, setActive] = useState(false);

    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setActive(!active);
    };

    const onClose = () => setActive(false);

    return (
        <CloseWrapper onEscapeOutside={onClose}>
            <a onClick={onClick}
               className={["account__currency--link text-black", active ? "active" : ""].join(" ")} href="#">
                <Image
                    width={17}
                    height={12}
                    className="currency__link--icon"
                    src={icon}
                    alt="currency"
                />
                <span>{title} </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.797"
                    height="6.05"
                    viewBox="0 0 9.797 6.05">
                    <path
                        d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                        opacity="0.7"
                    />
                </svg>
            </a>
            <div className={["dropdown__currency", active ? "active" : ""].join(" ")}>
                <ul>
                    {
                        categories.map((category, index) => (
                            <li key={`market_cat_${index}`} className="currency__items">
                                <a className="currency__text" target={'_blank'} href={category.link}>{category.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </CloseWrapper>
    );
}