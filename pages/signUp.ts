import {expect, Locator, Page} from "@playwright/test"
import { CommonElementsForAccess } from "./CommonElementsForAccess";

export class SignUp extends CommonElementsForAccess{


readonly signUpTitle:string = 'Sign Up';
readonly signUpUrl:string = 'https://gobigreviews.com/register';
readonly signUpTermsAndConditionsCheckbox:Locator;
readonly signUpSubscribeCheckbox:Locator;
readonly signUpNameField:Locator;
readonly signUpRepeatPasswordField:Locator;
readonly signUpValidationError:Locator;

constructor (page: Page){

    super(page);
    this.signUpNameField = page.locator('input[name = "name"]');
    this.signUpRepeatPasswordField = page.locator('input[name= "confirm-password"]');
    this.signUpTermsAndConditionsCheckbox = page.locator('input.form-check-input').nth(0);
    this.signUpSubscribeCheckbox= page.locator('input.form-check-input.font-weight-light').nth(0);
    this.signUpValidationError = page.locator('div.text-danger.errors-field');

}

async openSignUpForm(){

    await this.page.goto('https://gobigreviews.com/register');
}

async checkUrlAndTitleSignUpForm(){

    await expect (this.page).toHaveTitle(this.signUpTitle);
    await expect (this.page).toHaveURL(this.signUpUrl);
}

async checkElementsSignUpForm(){

    await expect (this.commonImage).toBeVisible();
    await expect (this.commonTitle).toBeVisible();
    await expect (this.commonDescription).toBeVisible();
    await expect (this.commonVariantGoogle).toBeVisible();
    await expect (this.commonVariantFacebook).toBeVisible();
    await expect (this.signUpNameField).toBeVisible();
    await expect (this.commonEmailField).toBeVisible();
    await expect (this.commonPasswordField).toBeVisible();
    await expect (this.signUpRepeatPasswordField).toBeVisible();
    await expect (this.signUpTermsAndConditionsCheckbox).toBeVisible();
    await expect (this.signUpSubscribeCheckbox).toBeVisible();
    await expect (this.commonMainActionButton).toBeVisible();
    await expect (this.commonSecondaryButton).toBeVisible();
    await expect (this.commonChat).toBeVisible();
}

async checkDisableSignUpButton(){

    await expect(this.commonMainActionButton).toBeDisabled();
}

async checkEnableSignUpButton(){

    await expect(this.commonMainActionButton).toBeEnabled();
}

async fillValuesSignUpForm (name: string, email: string, password: string, repeatPassword: string, accept: boolean, subsribe: boolean){

    await this.signUpNameField.fill(name);
    await expect (this.signUpNameField).toHaveValue(name);

    await this.commonEmailField.fill(email);
    await expect (this.commonEmailField).toHaveValue(email);

    await this.commonPasswordField.fill(password);
    await expect (this.commonPasswordField).toHaveValue(password);

    await this.signUpRepeatPasswordField.fill(repeatPassword);
    await expect (this.signUpRepeatPasswordField).toHaveValue(repeatPassword);

    await this.signUpTermsAndConditionsCheckbox.check();
    await expect (this.signUpTermsAndConditionsCheckbox).toBeChecked();

    await this.signUpSubscribeCheckbox.check();
    await expect (this.signUpSubscribeCheckbox).toBeChecked();
}

async checkSuccessSignUpFlow(){

    await this.commonMainActionButton.click();
    await expect (this.accountButton).toBeVisible();
    await this.accountButton.click();
    await expect (this.accountMenuLogOutButton).toBeVisible();
}

async checkFailSignUpFlow(){

    await this.commonMainActionButton.click();
    await expect(this.signUpValidationError).toBeVisible();
}

}