import { test } from "@playwright/test";
import { SignUp } from "../pages/signUp";

function generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `testuser_${randomString}@example.com`;
}

function generateRandomName(): string {
    const names = ['Artem', 'Olga', 'Anna', 'Ivan', 'Dmitry', 'Maria', 'Elena', 'Oleg', 'Natalia', 'Victor'];
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomSuffix = Math.floor(Math.random() * 1000); 
    return `${names[randomIndex]}_${randomSuffix}`;
}


const errors: string[] = [];

test.describe('check sign up page and registration', async () => {

    let signUp: SignUp;

    test.beforeEach(async ({ page }) => {
        signUp = new SignUp(page)
;
        await signUp.openSignUpForm();
        await signUp.checkUrlAndTitleSignUpForm();
    });

    test('check all elements of Sign Up form', async () => {
        try {
            await signUp.checkElementsSignUpForm();
        } catch (e) {
            errors.push(`Error in "check all elements of Sign Up form": ${e.message}`);
        }
    });

    test('check disable Sign Up button', async () => {
        try {
            await signUp.checkDisableSignUpButton();
        } catch (e) {
            errors.push(`Error in "check disable Sign Up button": ${e.message}`);
        }
    });

    test('fill values Sign Up form and get success flow', async () => {
        try {
            const uniqueEmail = generateRandomEmail();
            const uniqueName = generateRandomName();
            console.log(`Generated name: ${uniqueName}`);
            console.log(`Generated email: ${uniqueEmail}`);
            await signUp.fillValuesSignUpForm(uniqueName, uniqueEmail, 'Password123!', 'Password123!', true, true);
            await signUp.checkSuccessSignUpFlow();
        } catch (e) {
            errors.push(`Error in "fill values Sign Up form and get success flow": ${e.message}`);
        }
    });

    test('fill values Sign Up form and get fail flow', async () => {
        try {
            await signUp.fillValuesSignUpForm('Artem', 'test@gmail.com', 'Password123!', 'Password123!', true, true);
            await signUp.checkFailSignUpFlow();
        } catch (e) {
            errors.push(`Error in "fill values Sign Up form and get fail flow": ${e.message}`);
        }
    });

    test.afterAll(() => {
        if (errors.length > 0) {
            console.error('\n=== Test Failures Report ===\n');
            errors.forEach((error, index) => console.error(`${index + 1}. ${error}`));
            throw new Error('Some tests failed. See errors above.');
        }
    });
});