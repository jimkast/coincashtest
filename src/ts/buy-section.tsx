import * as React from 'react';


export interface SecBuyAnythingData {
    title: string;
    subtitle: string;
    icoPromos: IconPromoItem[];
    imgPromos: ImgPromoItem[];
}
export function SecBuyAnything(o: SecBuyAnythingData) {
    return <section className="home-sec">
        <div className="wrapper">
        <div className="text-center">
                <h2 className="sec-title">{o.title}</h2>
                <p className="subtitle">{o.subtitle}</p>
            </div>
            <section className="home-gap">
                <ul className="promo-icon-items clearfix">
                    {o.icoPromos.map((p, i) => <li key={i} className="promo-icon-item"><PromoIconItem text={p.text} svgPath={p.svgPath}/></li>)}
                </ul>
            </section>
            {o.imgPromos.map((p, i) => <PromoHorizontalItem key={i} img={p.img} title={p.title} subtitle={p.subtitle} imgPosition={p.imgPosition}/>)}
        </div>
    </section>
}

export interface IconPromoItem {
    svgPath: string;
    text: string;
}
export function PromoIconItem(o: IconPromoItem) {
    return <div className="promo-icon-item-wrap">
        <svg className="promo-ico">
            <use href={o.svgPath}></use>
        </svg>
        <p className="promo-item-text">{o.text}</p>
    </div>
}


export interface ImgPromoItem {
    img: string;
    title: string;
    subtitle: string;
    imgPosition?: 'left' | 'right'
}
export function PromoHorizontalItem(o: ImgPromoItem) {
    return <section className={'tbl-mb-collapse promo-hor-item clearfix ' + (o.imgPosition === 'right' ? 'promo-hor-item-right' : 'promo-hor-item-left')}>
        <div className="tbl-cell promo-hor-item-img-wrap promo-hor-item-img-wrap-left">
            <img src={o.img} alt=""/>
        </div>
        <div className="tbl-cell promo-hor-item-text">
            <h2 className="h2">{o.title}</h2>
            <p className="subtitle">{o.subtitle}</p>
        </div>
        {o.imgPosition === 'right' ? <div className="tbl-cell promo-hor-item-img-wrap promo-hor-item-img-wrap-right">
            <img src={o.img} alt=""/>
        </div> : ''}
    </section>
}
