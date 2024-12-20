import { test } from "@playwright/test"
import { SignUp } from "../pages/signUp";

function generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2, 10); 
    return `testuser_${randomString}@test.com`;
}

test.describe('check sign up page and registration', async()=>{

    let signUp: SignUp;

    test.beforeEach(async({page})=> {

        signUp = new SignUp(page);
        
        await signUp.openSignUpForm();
        await signUp.checkUrlAndTitleSignUpForm();
    })


    test('check all elements of Sign Up form', async()=>{

        await signUp.checkElementsSignUpForm();
    })

    test('check disable Sign Up button', async()=>{

        await signUp.checkDisableSignUpButton();
    })

    test('fill values Sign Up form and get success flow with random email', async()=>{
        const uniqueEmail = generateRandomEmail();
        console.log(`Generated email: ${uniqueEmail}`);
        await signUp.fillValuesSignUpForm('Artem', uniqueEmail, 'Password123!', 'Password123!', true, true);
        await signUp.checkSuccessSignUpFlow();
    })

    test('fill values Sign Up form and get fail flow', async()=>{

        await signUp.fillValuesSignUpForm('Artem', 'test@gmail.com', 'Password123!', 'Password123!', true, true);
        await signUp.checkFailSignUpFlow();
    })

})