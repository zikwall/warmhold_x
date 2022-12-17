import dynamic from 'next/dynamic';
import { Suspense } from 'react'
import {Main} from "@warmhold:layouts";

const HeroWithNoSSR = dynamic(() => import('@warmhold:components/hero/swiper'), {
    ssr: false,
    suspense: true,
})

const MarketsWithNoSSR = dynamic(() => import('@warmhold:components/markets'), {
    ssr: false,
    suspense: true,
})

const CategoriesWithNoSSR = dynamic(() => import('@warmhold:components/categories'), {
    ssr: false,
    suspense: true,
})

const ProductsWithNoSSR = dynamic(() => import('@warmhold:components/product/products'), {
    ssr: false,
    suspense: true,
})

export default function Home() {
    return (
        <Main title={'Warmhold X'}>
            <Suspense fallback={`Loading...`}>
                <HeroWithNoSSR/>
            </Suspense>

            <Suspense fallback={`Loading...`}>
                <CategoriesWithNoSSR/>
            </Suspense>

            <Suspense fallback={`Loading...`}>
                <ProductsWithNoSSR/>
            </Suspense>

            <Suspense fallback={`Loading...`}>
                <MarketsWithNoSSR/>
            </Suspense>
        </Main>
    )
}
