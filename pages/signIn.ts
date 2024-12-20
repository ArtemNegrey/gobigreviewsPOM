import {expect, Locator, Page} from "@playwright/test"
import { CommonElementsForAccess } from "./CommonElementsForAccess";

export class SignIn extends CommonElementsForAccess {

    readonly signInTitle:string = 'Sign In';
    readonly signInUrl:string = 'https://gobigreviews.com/login';
    readonly signInRememberMeCheckbox:Locator;
    readonly signInvalidationError:Locator;

    constructor(page: Page) {
        super(page);
        this.signInRememberMeCheckbox = page.locator('input.form-check-input');
        this.signInvalidationError = page.locator('div.text-danger.mb-2');

    }

    async openSignInForm(){

        await this.page.goto('https://gobigreviews.com/login');
    }
    
    async checkUrlAndTitleSignInForm(){
    
        await expect (this.page).toHaveTitle(this.signInTitle);
        await expect (this.page).toHaveURL(this.signInUrl);
    }
    
    async checkElementsSignInForm(){
    
        await expect (this.commonImage).toBeVisible();
        await expect (this.commonTitle).toBeVisible();
        await expect (this.commonDescription).toBeVisible();
        await expect (this.commonVariantGoogle).toBeVisible();
        await expect (this.commonVariantFacebook).toBeVisible();
        await expect (this.commonEmailField).toBeVisible();
        await expect (this.commonPasswordField).toBeVisible();
        await expect (this.signInRememberMeCheckbox).toBeVisible();
        await expect (this.commonMainActionButton).toBeVisible();
        await expect (this.commonSecondaryButton).toBeVisible();
        await expect (this.commonChat).toBeVisible();
    }
    
    async checkDisableSignInButton(){
    
        await expect(this.commonMainActionButton).toBeDisabled();
    }
    
    async checkEnableSignUpButton(){
    
        await expect(this.commonMainActionButton).toBeEnabled();
    }
    
    async fillValuesSignInForm (email: string, password: string, accept: boolean){
    
    
        await this.commonEmailField.fill(email);
        await expect (this.commonEmailField).toHaveValue(email);
    
        await this.commonPasswordField.fill(password);
        await expect (this.commonPasswordField).toHaveValue(password);
    
        await this.signInRememberMeCheckbox.check();
        await expect (this.signInRememberMeCheckbox).toBeChecked();
    }
    
    async checkSuccessSignInFlow(){
    
        await this.commonMainActionButton.click();
        await expect (this.accountButton).toBeVisible();
        await this.accountButton.click();
        await expect (this.accountMenuLogOutButton).toBeVisible();
    }
    
    async checkFailSignInFlow(){
    
        await this.commonMainActionButton.click();
        await expect(this.signInvalidationError).toBeVisible();
    }

}