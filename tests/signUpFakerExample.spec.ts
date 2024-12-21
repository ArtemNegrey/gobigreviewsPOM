import { expect, test } from "@playwright/test"
import { SignUp } from "../pages/signUp";
import { faker } from "@faker-js/faker";


// test.describe('check sign up page and registration', async()=>{

//     let signUp: SignUp;

//     test.beforeEach(async({page})=> {

//         signUp = new SignUp(page);
        
//         await signUp.openSignUpForm();
//         await signUp.checkUrlAndTitleSignUpForm();
//     })


    test('check generating Name and Email', async({page})=>{
          
        // await signUp.checkElementsSignUpForm();
        const firstNameField = faker.person.firstName();
        const emailAddressField = faker.internet.email();
        const passwordOriginField = faker.internet.password();

        await page.goto('https://gobigreviews.com/register');

        const firstName = page.locator('input[name = "name"]');
        const emailField = page.locator('input[name = "email"]');
        const passwordField = page.locator('input[name = "password"]');
        const passwordConfirmField = page.locator('input[name= "confirm-password"]');
        

        // await firstName.fill(firstNameField);
        await emailField.fill(emailAddressField);
        await passwordField.fill(passwordOriginField);
        await passwordConfirmField.fill(passwordOriginField);

        await expect (firstName).toHaveValue(firstNameField);
        await expect (emailField).toHaveValue(emailAddressField);
        await expect (passwordField).toHaveValue(passwordOriginField);
        await expect (passwordConfirmField).toHaveValue(passwordOriginField);
        

        console.log(`First name is: ${firstNameField}`);
        console.log(`Email is: ${emailAddressField}`);
        console.log(`Password is: ${passwordOriginField}`);
        console.log(`Password confirm is: ${passwordOriginField}`);


       
    })

    


//     test('check disable Sign Up button', async()=>{

//         await signUp.checkDisableSignUpButton();
//     })

//     test('fill values Sign Up form and get success flow with random email', async()=>{
//         const uniqueEmail = generateRandomEmail();
//         console.log(`Generated email: ${uniqueEmail}`);
//         await signUp.fillValuesSignUpForm('Artem', uniqueEmail, 'Password123!', 'Password123!', true, true);
//         await signUp.checkSuccessSignUpFlow();
//     })

//     test('fill values Sign Up form and get fail flow', async()=>{

//         await signUp.fillValuesSignUpForm('Artem', 'test@gmail.com', 'Password123!', 'Password123!', true, true);
//         await signUp.checkFailSignUpFlow();
//     })

// })