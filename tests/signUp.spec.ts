import{ test } from "@playwright/test"
import { SignUp } from "../pages/signUp";

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

    test('fill values Sign Up form and get success flow', async()=>{

        await signUp.fillValuesSignUpForm('Artem', 'testacc11@test.net', 'Password123!', 'Password123!', true, true); // потрібно кожен раз змінювати імейл для успішної реєстрації
        await signUp.checkSuccessSignUpFlow();
    })

    test('fill values Sign Up form and get fail flow', async()=>{

        await signUp.fillValuesSignUpForm('Artem', 'test@gmail.com', 'Password123!', 'Password123!', true, true);
        await signUp.checkFailSignUpFlow();
    })

})