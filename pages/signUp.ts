import {expect, Locator, Page} from "@playwright/test"

export class SignUp {

readonly page:Page;
readonly title:string = 'Sign Up';
readonly url:string = 'https://gobigreviews.com/register';
readonly signUpImage:Locator;
readonly signUpTitle:Locator;
readonly signUpDescription:Locator;
readonly signUpVariantGoogle:Locator;
readonly signUpVariantFacebook:Locator;
readonly signUpNameField:Locator;
readonly signUpEmailField:Locator;
readonly signUpPasswordField:Locator;
readonly signUpRepeatPasswordField:Locator;
readonly signUpTermsAndConditionsCheckbox:Locator;
readonly signUpSubscribeCheckbox:Locator;
readonly signUpButton:Locator;
readonly signInButton:Locator;
readonly signUpChat:Locator;
readonly signUpValidationError:Locator;
readonly accountButton:Locator;
readonly accountMenuLogOutButton:Locator;


constructor (page: Page){

    this.page = page;
    this.signUpImage = page.locator('a.btn-link.mb-7.d-block.mx-auto.w-auto');
    this.signUpTitle = page.locator('h1.text-gray-900.fw-bolder.mb-3');
    this.signUpDescription = page.locator('div.text-gray-500.fw-semibold.fs-6').nth(0);
    this.signUpVariantGoogle = page.locator('a.btn.btn-flex.btn-outline.btn-text-gray-700.btn-active-color-primary.bg-state-light.flex-center.text-nowrap.w-100').nth(0);
    this.signUpVariantFacebook = page.locator('a.btn.btn-flex.btn-outline.btn-text-gray-700.btn-active-color-primary.bg-state-light.flex-center.text-nowrap.w-100').nth(1);
    this.signUpNameField = page.locator('input[name = "name"]');
    this.signUpEmailField = page.locator('input[name = "email"]');
    this.signUpPasswordField = page.locator('input[name = "password"]');
    this.signUpRepeatPasswordField = page.locator('input[name= "confirm-password"]');
    this.signUpTermsAndConditionsCheckbox = page.locator('input.form-check-input').nth(0);
    this.signUpSubscribeCheckbox= page.locator('input.form-check-input.font-weight-light').nth(0);
    this.signUpButton = page.locator('button.btn.btn-primary');
    this.signInButton = page.locator('a.link-primary.fw-semibold');
    this.signUpChat = page.locator('iframe[title="chat widget"]').nth(3);
    this.signUpValidationError = page.locator('div.text-danger.errors-field');
    this.accountButton = page.getByRole('button', { name: 'GoBigReview-user' });
    this.accountMenuLogOutButton = page.locator('a.menu-link.button-logout');

}

async openSignUpForm(){

    await this.page.goto('https://gobigreviews.com/register');
}

async checkUrlAndTitleSignUpForm(){

    await expect (this.page).toHaveTitle(this.title);
    await expect (this.page).toHaveURL(this.url);
}

async checkElementsSignUpForm(){

    await expect (this.signUpImage).toBeVisible();
    await expect (this.signUpTitle).toBeVisible();
    await expect (this.signUpDescription).toBeVisible();
    await expect (this.signUpVariantGoogle).toBeVisible();
    await expect (this.signUpVariantFacebook).toBeVisible();
    await expect (this.signUpNameField).toBeVisible();
    await expect (this.signUpEmailField).toBeVisible();
    await expect (this.signUpPasswordField).toBeVisible();
    await expect (this.signUpRepeatPasswordField).toBeVisible();
    await expect (this.signUpTermsAndConditionsCheckbox).toBeVisible();
    await expect (this.signUpSubscribeCheckbox).toBeVisible();
    await expect (this.signUpButton).toBeVisible();
    await expect (this.signInButton).toBeVisible();
    await expect (this.signUpChat).toBeVisible();
}

async checkDisableSignUpButton(){

    await expect(this.signUpButton).toBeDisabled();
}

async checkEnableSignUpButton(){

    await expect(this.signUpButton).toBeEnabled();
}

async fillValuesSignUpForm (name: string, email: string, password: string, repeatPassword: string, accept: boolean, subsribe: boolean){

    await this.signUpNameField.fill(name);
    await expect (this.signUpNameField).toHaveValue(name);

    await this.signUpEmailField.fill(email);
    await expect (this.signUpEmailField).toHaveValue(email);

    await this.signUpPasswordField.fill(password);
    await expect (this.signUpPasswordField).toHaveValue(password);

    await this.signUpRepeatPasswordField.fill(repeatPassword);
    await expect (this.signUpRepeatPasswordField).toHaveValue(repeatPassword);

    await this.signUpTermsAndConditionsCheckbox.click();
    await expect (this.signUpTermsAndConditionsCheckbox).toBeChecked();

    await this.signUpSubscribeCheckbox.click();
    await expect (this.signUpSubscribeCheckbox).toBeChecked();
}

async checkSuccessSignUpFlow(){

    await this.signUpButton.click();
    await expect (this.accountButton).toBeVisible();
    await this.accountButton.click();
    await expect (this.accountMenuLogOutButton).toBeVisible();
}

async checkFailSignUpFlow(){

    await this.signUpButton.click();
    await expect(this.signUpValidationError).toBeVisible();
}

}