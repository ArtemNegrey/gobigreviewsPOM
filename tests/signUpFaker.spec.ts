import { test } from "@playwright/test"
import { SignUpFaker } from "../pages/signUpFaker";


test.describe('check sign up page and registration', async()=>{

    let signUpFaker: SignUpFaker;

    test.beforeEach(async({page})=> {

        signUpFaker = new SignUpFaker(page);
        
        await signUpFaker.openSignUpForm();
        await signUpFaker.checkUrlAndTitleSignUpForm();
    })


    test('check all elements of Sign Up form', async()=>{

        await signUpFaker.checkElementsSignUpForm();
    })

    test('check disable Sign Up button', async()=>{

        await signUpFaker.checkDisableSignUpButton();
    })

    test('fill values Sign Up form and get success flow with using Faker library for Name and Email fields', async()=>{
        await signUpFaker.fillValuesSignUpForm('Password123!', 'Password123!', true, true);
        await signUpFaker.checkSuccessSignUpFlow();
    })

    test('fill values Sign Up form and get fail flow', async()=>{

        await signUpFaker.fillValuesSignUpForm('Password', 'Password123!', true, true); //як можна використати помилку для поля імейл через фейкр
        await signUpFaker.checkFailSignUpFlow();
    })

})