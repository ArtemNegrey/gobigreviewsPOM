import { test } from "@playwright/test"
import { SignIn } from "../pages/signIn";

function generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `testuser_${randomString}@example.com`;
}

const errors: string[] = [];


test.describe('check sign in page and login', async () => {

    let signIn: SignIn;

    test.beforeEach(async ({ page }) => {
        signIn = new SignIn(page)
;
        await signIn.openSignInForm();
        await signIn.checkUrlAndTitleSignInForm();
    });

    test('check all elements of Sign In form', async () => {
        try {
            await signIn.checkElementsSignInForm();
        } catch (e) {
            errors.push(`Error in "check all elements of Sign In form": ${e.message}`);
        }
    });

    test('check disable Sign In button', async () => {
        try {
            await signIn.checkDisableSignInButton();
        } catch (e) {
            errors.push(`Error in "check disable Sign In button": ${e.message}`);
        }
    });

    test('fill values Sign In form and get fail flow', async () => {
        try {
            const uniqueEmail = generateRandomEmail();
            console.log(`Generated email: ${uniqueEmail}`);
            await signIn.fillValuesSignInForm(uniqueEmail, 'Password123!', true);
            await signIn.checkFailSignInFlow();
        } catch (e) {
            errors.push(`Error in "fill values Sign In form and get fail flow": ${e.message}`);
        }
    });

    test('fill values Sign Up form and get success flow', async () => {
        try {
            await signIn.fillValuesSignInForm('testacc6@test.net', 'Password123!',true);
            await signIn.checkSuccessSignInFlow();
        } catch (e) {
            errors.push(`Error in "fill values Sign Up form and get success flow": ${e.message}`);
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
