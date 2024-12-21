import {expect, Locator, Page} from "@playwright/test"

export class CommonElementsForAccess {

readonly page:Page;
readonly commonImage:Locator;
readonly commonTitle:Locator;
readonly commonDescription:Locator;
readonly commonVariantGoogle:Locator;
readonly commonVariantFacebook:Locator;
readonly commonEmailField:Locator;
readonly commonPasswordField:Locator;
readonly commonMainActionButton:Locator;
readonly commonSecondaryButton:Locator;
readonly commonChat:Locator;
readonly accountButton:Locator;
readonly accountMenuLogOutButton:Locator;


constructor (page: Page){

    this.page = page;
    this.commonImage = page.locator('a.btn-link.mb-7.d-block.mx-auto.w-auto');
    this.commonTitle = page.locator('h1.text-gray-900.fw-bolder.mb-3');
    this.commonDescription = page.locator('div.text-gray-500.fw-semibold.fs-6').nth(0);
    this.commonVariantGoogle = page.locator('a.btn.btn-flex.btn-outline.btn-text-gray-700.btn-active-color-primary.bg-state-light.flex-center.text-nowrap.w-100').nth(0);
    this.commonVariantFacebook = page.locator('a.btn.btn-flex.btn-outline.btn-text-gray-700.btn-active-color-primary.bg-state-light.flex-center.text-nowrap.w-100').nth(1);
    this.commonEmailField = page.locator('input[name = "email"]');
    this.commonPasswordField = page.locator('input[name = "password"]');
    this.commonMainActionButton = page.locator('button.btn.btn-primary');
    this.commonSecondaryButton = page.locator('a.link-primary.fw-semibold');
    this.commonChat = page.locator('iframe[title="chat widget"]').nth(3);
    this.accountButton = page.getByRole('button', { name: 'GoBigReview-user' });
    this.accountMenuLogOutButton = page.locator('a.menu-link.button-logout');

}

}