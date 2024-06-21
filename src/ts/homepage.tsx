import * as React from "react";
import {Header, SecBlueSlogan} from "./header";
import {Footer} from "./footer";
import {SecBuyAnything, SecBuyAnythingData} from "./buy-section";

export function HomePage(o: SecBuyAnythingData & {blueSlogan: string}) {
    return <>
        <Header/>
        <SecBlueSlogan text={o.blueSlogan}/>
        <SecBuyAnything title={o.title} subtitle={o.title} icoPromos={o.icoPromos} imgPromos={o.imgPromos}/>
        <Footer/>
    </>
}

