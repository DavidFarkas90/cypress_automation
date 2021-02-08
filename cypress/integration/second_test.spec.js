/// <reference types="cypress" />

import { homePage } from '../support/page/homePage';
//import { productListPage } from '../support/page/productListPage';

describe("Second test", () => {
    const homepage =  new homePage()
    //const plp = new productListPage()
    const makeup = "Makeup"
    const face = "Face"
    it("Open product list page", () => {
        homepage.visitHomePage()
        const plp = homepage.useMainNav(makeup)
        homepage.assertMainHeader(makeup)
        plp.useThumbnail(face)
        homepage.assertMainHeader(face)
    })
})  