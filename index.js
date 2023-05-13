let genrals = document.querySelector('.genrals');
let stepHeader = document.querySelector('.step-header');

let stepContainerOne = document.querySelector('.step-1');
let school = document.querySelector('.school');
let busineses = document.querySelector('.busineses');


let nextStep = document.querySelector('.next-step');
let footer = document.querySelector('.footer');
let main = document.querySelector('.main');
let container = document.querySelector(".container");
let lan = document.querySelector(".lan");


// App Var
let step = 0;
let reason = '';
let termsAgreed = false;
let genderSelection = '';
let partFourIndecator = 1 ;
let partFiveIndecator = 1 ;
let dateOfBirth = [] ;
const userInfo = {
    fName : '',
    lName : '',
    email : "",
    username : "",
    pwd:"",
}
let phoneNumber = 000000000 ;
let formattedPhoneNumber = 000000000 ;
let interval;
let varCode = '';
let timerEnded = false ;
let activitiesSelection = [];
avatarId = "";
let displayLanSelection = false ;
let activeIdLang = 9 ;


const appStart = () => {
    updateGenralsHtml();
    setTimeout(() => {
        genrals.classList.remove('none');
        stepContainerOne?.classList?.remove('none');
        nextStep?.classList?.remove('none');
        footer.classList.remove('none');
    }, 3000);
}

const updateGenralsHtml = (newStep) => {
    if(!newStep){
        newStep = 1 ;
    }
    step = newStep;
    if(step === 7){
        genrals.innerHTML = `
        <h2>Create an account</h2>
        <div class="steps">
            The Last Step 
            <img src="./icons/hart-icon.png" alt="hart-icon">
        </div>
        `
    } else if(step === 8 || step === 9 || step === 10){
        genrals.innerHTML = '';
        genrals.classList.add("none")
    }else{
        genrals.innerHTML = `
        <h2>Create an account</h2>
        <div class="steps">Step ${step}/7</div>
        `
    }
}



// Main EventListenrs
nextStep.addEventListener('click' , () => {
    if(step === 1) {
        stepTwoHandler();
    } else if (step === 2){
        stepTreeHandler();
    } else if (step === 3 && partFourIndecator === 1){
        stepFourHandler();
    } else if (step === 4 && partFourIndecator === 2){
        stepFourPartTwoHandler();
    } else if(step === 4 && partFiveIndecator === 1 && partFourIndecator === 0){
        stepFiveHandler();
    } else if (step === 5 && partFiveIndecator === 2){
        stepFivePartTwoHandler();
    } else if (step === 5 && partFiveIndecator === 0){
        clearInterval(interval);
        stepSixHandler();
    } else if (step === 6){
        stepSevenHandler();
    } else if (step === 7){
        stepEightHandler();
    } else if (step === 8){
        stepNineHandler();
    } else if (step === 9){
        stepTenHandler();
    }
});

lan.addEventListener("click" , () => {
    displayLanSelection = true ;
    const langSelection = document.createElement("div");
    langSelection.classList.add('lan-main-container');
    langSelection.innerHTML = `
    <div class="controls-layer"></div>
    <div class="lan-container">
        <h3>Change The Language</h3>
        <ul class="lan-selection">
            <li id="1">
                <img src="./icons/turkish-flag.png" alt="flag">
                <span>Turkish</span>
            </li>
            <li id="2">
                <img src="./icons/ksa-flag.png" alt="flag">
                <span>Arabic</span>
            </li>
            <li id="3">
                <img src="./icons/usa-flag.png" alt="flag">
                <span>English</span>
            </li>
            <li id="4">
                <img src="./icons/turkish-flag.png" alt="flag">
                <span>Turkish</span>
            </li>
            <li id="5">
                <img src="./icons/ksa-flag.png" alt="flag">
                <span>Arabic</span>
            </li>
            <li id="6">
                <img src="./icons/usa-flag.png" alt="flag">
                <span>English</span>
            </li>
            <li id="7">
                <img src="./icons/turkish-flag.png" alt="flag">
                <span>Turkish</span>
            </li>
            <li id="8">
                <img src="./icons/ksa-flag.png" alt="flag">
                <span>Arabic</span>
            </li>
            <li id="9">
                <img src="./icons/usa-flag.png" alt="flag">
                <span>English</span>
            </li>
            <li id="10">
                <img src="./icons/turkish-flag.png" alt="flag">
                <span>Turkish</span>
            </li>
        </ul>
    </div>
    `
    footer.appendChild(langSelection);

    document.querySelector(".controls-layer").addEventListener("click" , () => {
        document.querySelector('.lan-container').classList.add("closing-animation");
        setTimeout(() => {
            footer.removeChild(langSelection);
        }, 1000);
        displayLanSelection = false ;
    })

    const languages = document.querySelectorAll(".lan-selection li");
    languages.forEach((lang) => {
        if(lang.id == activeIdLang){
            lang.classList.add("active")
        }
        lang.addEventListener("click" , () => {
            activeIdLang = lang.id;
            lan.innerHTML = lang.children[1].innerHTML ;
            languages.forEach(e => {
                if(e.classList.contains("active")){
                    e.classList.remove('active');
                }
                if(e.id === activeIdLang){
                    e.classList.add("active");
                }
            })
        })
    })
})




// steps Handlers

const setReason = (selection) => {
    reason = selection ;
    if(stepHeader.id === 'error-msg'){
        stepHeader.id = '' ;
    }
    if(selection === 'school'){
        school.classList.add('active');
        busineses?.classList?.remove('active')
    }else if (selection === 'busineses'){
        busineses.classList.add('active');
        school?.classList?.remove('active');     
    }
}

const stepTwoHandler =  () => {
    if(reason){
        updateGenralsHtml(2);
        const stepContainertwo = document.createElement('section');
        stepContainertwo.classList.add('step-2');
        stepContainertwo.innerHTML = `
        <h3 class="step-header">
            Please Read Our Terms And Conditions And Agree To Continue
        </h3>
        <div class="terms-skelaton">
            <span></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
        </div>
        <form >
            <label for="termsAgree">
                <div id="checkbox-div">
                    
                </div>
                <p>I Agree To Your Terms And Conditions</p>
            </label>
            <input type="checkbox" name="termsAgree" id="termsAgree"/>
        </form>
        `;
        main.removeChild(stepContainerOne);
        main.appendChild(stepContainertwo);

        const checkBoxDiv = document.querySelector('#checkbox-div');
        const termsAgreeInput = stepContainertwo.querySelector('#termsAgree');
        termsAgreeInput.addEventListener('change', () => {
          if (termsAgreeInput.checked) {
            checkBoxDiv.innerHTML = `
            <img src="./icons/check.svg" alt="checkSvg">
            `
            termsAgreed = true ;
          } else {
            checkBoxDiv.innerHTML = '';
            termsAgreed = false ;
        }
        });
    }else{
        stepHeader.id = 'error-msg'
    }  
}

const stepTreeHandler = () => {
    if(termsAgreed){
        updateGenralsHtml(3);
        main.removeChild(document.querySelector('.step-2'));
        const stepThreeContainer = document.createElement('section');
        stepThreeContainer.classList.add('step-3');
        stepThreeContainer.innerHTML = `
        <h3 class="step-header">
            Please Select Your Gender
        </h3>
        <form>
            <label for="male">
                <div id="checkbox-male">
                </div>
                <p>Male</p>
            </label>
            <input type="checkbox" name="male" id="male">
            <label for="female">
                <div id="checkbox-female">
                </div>
                <p>Female</p>
            </label>
            <input type="checkbox" name="female" id="female">
        </form>
        `
        main.appendChild(stepThreeContainer);

        const checkBoxMale = document.querySelector('#checkbox-male');
        const maleInput= stepThreeContainer.querySelector('#male');
        maleInput.addEventListener('change', () => {
          if (maleInput.checked) {
            if(femaleInput.checked){
                femaleInput.checked = false ;
                checkBoxFemale.innerHTML = '';
            }
            checkBoxMale.innerHTML = `
            <img src="./icons/check.svg" alt="checkSvg">
            `
            genderSelection = 'male'
          } else {
                checkBoxMale.innerHTML = '';
                genderSelection = '';
            }
        });

        const checkBoxFemale = document.querySelector('#checkbox-female');
        const femaleInput = stepThreeContainer.querySelector('#female');
        femaleInput.addEventListener('change' , () => {
            if(femaleInput.checked) {
                if(maleInput.checked){
                    maleInput.checked = false ;
                    checkBoxMale.innerHTML = '';
                }
                checkBoxFemale.innerHTML = `
                <img src="./icons/check.svg" alt="checkSvg">
                `
                genderSelection = 'female'
            }else {
                checkBoxFemale.innerHTML = '';
                genderSelection = ''
            }
        })


    }else{
        const stepHeaderTwo = document.querySelector('.step-header');
        stepHeaderTwo.id = 'error-msg';
    }
}

const stepFourHandler = () => {
    if(genderSelection){
        partFourIndecator = 2 ;
        updateGenralsHtml(4)
        main.removeChild(document.querySelector('.step-3'));
        const stepContainerFour = document.createElement('section');
        stepContainerFour.classList.add('step-4');
        stepContainerFour.innerHTML = `
        <h3 class="step-header">
            Please Write Your Date Of Birth
        </h3>
        <p id="error-msg">

        </p>
        <form class="birth-date">
            <label for="birth-date" class="none">
                Birth Date
            </label>
            <input type="date" id="birth-date" name="birth-date" class="date-picker" placeholder="mm/dd/yyyy">
        </form>
        `
        main.appendChild(stepContainerFour);

        const birthDateInput = document.getElementById('birth-date');
        birthDateInput.addEventListener('change', (event) => {
          const selectedDate = event.target.value.split("-");
          dateOfBirth = [selectedDate[0],selectedDate[1],selectedDate[2]];
        });
        
    }else{
        const stepHeaderTwo = document.querySelector('.step-header');
        stepHeaderTwo.id = 'error-msg';
    }
}

const stepFourPartTwoHandler = () => {
    const dateResult = validateDate(+dateOfBirth[0],+dateOfBirth[1],+dateOfBirth[2]);
    if(!dateResult.error){
        partFourIndecator = 0 ;
        updateGenralsHtml(4);
        const stepContainerFour = document.querySelector('.step-4');
        stepContainerFour.innerHTML = `
        <h3>Please Enter The Following Information</h3>
        <h4 class="step-header-2">The Username Cannot Be Changed Later</h4>
        <form class="info">
            <div class="names">
                <div>
                    <label for="fName" class="none">Please Enter Your First Name</label>
                    <input type="text" name="fName" id="fName" placeholder="First name">
                </div>
                <div>
                    <label for="lName" class="none">Please Enter Your Last Name</label>
                    <input type="text" name="lName" id="lName" placeholder="Last name">
                </div>
            </div>
            <label for="email" class="none">Please Enter Your Email</label>
            <input type="email" name="email" placeholder="Email" id="email">
            <label for="username" class="none">Please Enter Your Username</label>
            <input type="text" name="username" placeholder="Username" id="username">
            <div class="pwd-container">
                <label for="pwd" class="none">Please Enter Your Password</label>
                <input type="password" name="pwd" placeholder="Password" id="pwd">
                <img src="./icons/eye.png" alt="eye-icon" id="veiw-pwd">
            </div>
        </form>
        `
        const fName = document.querySelector('#fName');
        const lName = document.querySelector('#lName');
        const email = document.querySelector('#email');
        const username = document.querySelector('#username');
        const pwd = document.querySelector('#pwd');
        const veiwPwd = document.querySelector('#veiw-pwd');

        fName.addEventListener('change' , (value) => {
            userInfo.fName = value.target.value ;
        })
        lName.addEventListener('change' , (e) => {
            userInfo.lName = e.target.value ;
        })
        email.addEventListener('change' , (e) => {
            userInfo.email = e.target.value ;
        })
        username.addEventListener('change' , (e) => {
            userInfo.username = e.target.value ;
        })
        pwd.addEventListener('change' , (e) => {
            userInfo.pwd = e.target.value ;
        })
        veiwPwd.addEventListener('click' , () => {
            if(pwd.type === 'password'){
                pwd.type = 'text';
            }else{
                pwd.type = 'password';
            }
        })
        
    }else{
        const stepHeader = document.querySelector('.step-header');
        stepHeader.innerHTML = 'Please Enter A valied Date!';
        stepHeader.id = `error-msg`;
    }
}

const stepFiveHandler = () => {
    const validateForm = validateRegistration(userInfo)
    if(validateForm.status){
        main.removeChild(document.querySelector('.step-4'));
        updateGenralsHtml(5);
        partFiveIndecator++;
        const stepContainerFive = document.createElement('section');
        stepContainerFive.classList.add('step-5');
        stepContainerFive.innerHTML = `
        <h3 class="step-header">Please Enter Your Phone Number</h3>
        <form class="phone-number">
            <label for="phone" class="none">
                Please Enter Your Phone Number
            </label>
            <div class="prefix">
                <span class="flag"></span>
                <span>+966</span>
            </div>
            <input type="tel" name="phone" id="phone" placeholder="Your phone number" oninput="formatPhoneNumber(this)" maxlength="9">
        </form>
        `
        main.appendChild(stepContainerFive);

    }else{
        const stepHeader = document.querySelector('.step-header-2');
        stepHeader.innerHTML = validateForm.message;
        step.id = 'error-msg'
    }
}

const stepFivePartTwoHandler = () => {
    const numberResult = validateSaudiPhoneNumber(phoneNumber);

    if(!numberResult.error){
        partFiveIndecator = 0 ;
        const stepContainerFive = document.querySelector('.step-5');
        stepContainerFive.innerHTML = `
        <h3 class="step-header">Please Enter Your Phone Number</h3>
        <form class="phone-number">
            <label for="phone" class="none">
                Please Enter Your Phone Number
            </label>
            <div class="prefix">
                <span class="flag"></span>
                <span>+966</span>
            </div>
            <input type="tel" name="phone" id="phone" placeholder="Your phone number" oninput="formatPhoneNumber(this)" maxlength="9" value="${formattedPhoneNumber}" class="phone-disabled" disabled>
            <div class="edit">
                <img src="./icons/edit.png" alt="edit-icon">
                <span class="edit-span">Edit</span>
            </div>
        </form>
        <h3 class="step-header-2">We've Sent 6-Digit Verification Code To Your Phone Number Please Enter It Here</h3>
        <form class="varification-form">
            <div>
                <input type="number" class="var-input">
                <input type="number" disabled class="var-input" maxlength="1">
                <input type="number" disabled class="var-input" maxlength="1">
                <input type="number" disabled class="var-input" maxlength="1">
                <input type="number" disabled class="var-input" maxlength="1">
            </div>
        </form>
        <div class="resend-code">
            <span class="timer">
                01:30
            </span>
            <button class="resend">Resend Code</button>
        </div>
        `
        interval = setInterval(countdown, 1000);


        const inputs = document.querySelectorAll('.var-input');

        inputs[0]?.focus();

        inputs.forEach((input , index1) => {
            input.addEventListener("keyup" , (e) => {
                let currentInput = input ;
                let nextInput = input.nextElementSibling;
                let prevInput = input.previousElementSibling;

                if(currentInput.value.length > 1){
                    currentInput.value = "";
                    return;
                }

                if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
                    nextInput.removeAttribute("disabled");
                    nextInput.focus();
                }

                if(e.key === "Backspace"){
                    inputs.forEach((input, index2) => {
                        if(index1 <= index2 && prevInput) {
                            input.setAttribute("disabled" , true);
                            currentInput.value = "" ;
                            prevInput.focus();
                        }
                    })
                }
                if(!inputs[4].disabled && inputs[4].value !== ""){
                    varCode = '';
                    inputs.forEach(input => {
                        varCode += input.value;
                    })
                    return;
                }
            })
        })

        const inputPhone = document.querySelector('.phone-disabled');
        const edit = document.querySelector('.edit');
        const resend = document.querySelector('.resend');
        const stepHeader = document.querySelector('.step-header-2');

        resend.addEventListener("click" , () => {
            inputs.forEach((input) => {
                input.setAttribute("disabled" , true);
                input.value = '';
            })
            inputs[0].removeAttribute('disabled');
            inputs[0].focus();
            countdown(true);
            interval = setInterval(countdown, 1000);
            stepHeader.id = '';
            stepHeader.innerHTML = "We've Sent 6-Digit Verification Code To Your Phone Number Please Enter It Here";
            varCode = "";
        })

        edit.addEventListener('click' , () => {
            const editSpan = document.querySelector('.edit-span');
            const stepHeader = document.querySelector('.step-header');
            if(inputPhone.hasAttribute("disabled")){
                inputPhone.removeAttribute("disabled");
                inputPhone.value = '';
                inputPhone.focus() ;
                phoneNumber = 000000000
                editSpan.innerHTML = 'Save';
                stepHeader.id = "";
                stepHeader.innerHTML = 'Please Enter Your Phone Number';
            }else{
                const phoneNumResult = validateSaudiPhoneNumber(phoneNumber);
                if(phoneNumResult.error){
                    inputPhone.value = "";
                    inputPhone.focus();
                    stepHeader.id = "error-msg";
                    stepHeader.innerHTML = phoneNumResult.message;
                }else{
                    inputPhone.setAttribute('disabled',true);
                    editSpan.innerHTML = 'Edit';
                    countdown(true);
                    interval = setInterval(countdown, 1000);
                    inputs.forEach((input) => {
                        input.setAttribute("disabled" , true);
                        input.value = '';
                    })
                    inputs[0].removeAttribute('disabled');
                    inputs[0].focus();
                    varCode = "";
                }

            }


        })


    }else{
        const stepHeader = document.querySelector('.step-header');
        stepHeader.id = "error-msg";
        stepHeader.innerHTML = numberResult.message;
    }
}

const stepSixHandler = () => {
    if(!timerEnded && varCode.length === 5){
        updateGenralsHtml(6);
        main.removeChild(document.querySelector('.step-5'));
        const stepSixContainer = document.createElement('section');
        stepSixContainer.classList.add("step-6");
        stepSixContainer.innerHTML = `
        <h3 class="step-header">Please Select The Activities You Are Intersted In</h3>
        <h4 class="step-header-2">
            Choose At Least 3
        </h4>
        <ul class="selction">
            <li id="1"></li>
            <li id="2"></li>
            <li id="3"></li>
            <li id="4"></li>
            <li id="5"></li>
            <li id="6"></li>
            <li id="7"></li>
            <li id="8"></li>
            <li id="9"></li>
            <li id="10"></li>
            <li id="11"></li>
            <li id="12"></li>
        </ul>
        `;
        

        main.appendChild(stepSixContainer);

        const activities = document.querySelectorAll('.selction li');

        activities.forEach((li) => {
            li.addEventListener("click" , () => {
                if(li.classList.contains("active")){
                    li.classList.remove("active");
                }else{
                    li.classList.add("active");
                    activitiesSelection.push(li.id);
                }
            })
        })

    }else{
        const stepHeader = document.querySelector('.step-header-2');
        stepHeader.id = "error-msg";
        if(varCode.length !== 5){
            stepHeader.innerHTML = "Please Enter The verification Code!";
        }
    }
}

const stepSevenHandler = () => {
    if(activitiesSelection.length >= 3){
        updateGenralsHtml(7);
        main.removeChild(document.querySelector('.step-6'));
        const stepSevenContainer = document.createElement("section");
        stepSevenContainer.classList.add('step-7');
        stepSevenContainer.innerHTML = `
        <h3>Please Choose Your Avatar</h3>
        <ul class="selction">
            <li id="1"></li>
            <li id="2"></li>
            <li id="3"></li>
            <li id="4"></li>
            <li id="5"></li>
            <li id="6"></li>
            <li id="7"></li>
            <li id="8"></li>
            <li id="9"></li>
        </ul>
        `

        main.appendChild(stepSevenContainer);
        const avatars = document.querySelectorAll(".selction li");

        avatars.forEach((avatar) => {
            avatar.addEventListener("click" , () => {
                avatars.forEach(e => {
                    if(e.classList.contains("active")){
                        e.classList.remove("active");
                    }
                });
                avatar.classList.add("active");
                avatarId = avatar.id ;
            })
        })
    }
}

const stepEightHandler = () => {
    if(avatarId){
        updateGenralsHtml(8);
        main.removeChild(document.querySelector(".step-7"));
        const done = document.createElement("section");
        done.classList.add("done");
        done.innerHTML = `
            <h2>Done</h2>
            <h3>Your account has been created successfully</h3>
            <img src="./icons/hart-icon.png" alt="hart-icon">
        `
        main.appendChild(done);

    }else{
        const stepHeader = document.querySelector(".step-header");
        stepHeader.id = "error-msg";
    }
}

const stepNineHandler = () => {
    updateGenralsHtml(9);
    main.removeChild(document.querySelector(".done"));
    const conmingSoon = document.createElement("section");
    conmingSoon.classList.add("done");
    conmingSoon.classList.add("coming-soon");
    conmingSoon.innerHTML = `
        <h2>Coming Soon</h2>
        <h3>Soon you will be able to create your own avatar</h3>
        <img src="./icons/avatars.png" alt="avatar-icon">
    `
    main.appendChild(conmingSoon);
}

const stepTenHandler = () => {
    updateGenralsHtml(10);
    main.removeChild(document.querySelector(".done"));
    const lastSection = document.createElement("section");
    lastSection.classList.add("done");
    lastSection.classList.add("last-section");
    lastSection.innerHTML = `
        <h2>Coming Soon</h2>
    `
    main.appendChild(lastSection);
    footer.classList.add("none");
    nextStep.classList.add("none");
}



// Helpers Functions

function validateDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    const currentDate = new Date();
    
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
      return { error: true, message: 'Invalid date' };
    } else if (date.getTime() > currentDate.getTime()) {
      return { error: true, message: 'Date of birth cannot be in the future' };
    } else {
      return { error: false };
    }
}

function validateRegistration({fName, lName, email, username, pwd}) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
    if (!fName || !lName || !email || !username || !pwd) {
      return {
        status: false,
        message: "Please fill in all fields",
      };
    }
  
    if (!emailRegex.test(email)) {
      return {
        status: false,
        message: "Please enter a valid email address",
      };
    }
  
    if (!usernameRegex.test(username)) {
      return {
        status: false,
        message:
          "Username must be between 3 and 20 characters and may only contain letters, numbers, underscores, and hyphens",
      };
    }
  
    if (!passwordRegex.test(pwd)) {
      return {
        status: false,
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
      };
    }
  
    return {
      status: true,
      message: "",
    };
}

function formatPhoneNumber(input) {
    phoneNumber = input.value;
    const phoneNum = input.value.replace(/\D/g, '');
    if (phoneNum.length !== 9) {
      return;
    }
    const formattedNumber = phoneNum.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3');

    input.value = formattedNumber;
    formattedPhoneNumber = formattedNumber;
    
}

function validateSaudiPhoneNumber(number) {
    if(!number){
        return {error : true , message : 'Please Enter A Valied Phone Number'}
    }

    number = number.replace(/\s/g, '');
    if (number.length !== 9) {
      return { error: true, message: 'Invalid phone number length. Must be exactly 9 digits.' };
    }
  
    const prefix = number.substring(0, 2);
    const validPrefixes = ['50', '51', '52', '53', '54', '55', '59'];
    if (!validPrefixes.includes(prefix)) {
      return { error: true, message: 'Invalid phone number prefix.' };
    }
  
    if (!/^\d+$/.test(number)) {
      return { error: true, message: 'Phone number must only contain digits.' };
    }
  
    return { error: false , message : '' };
}

function countdown(reset = false) {
    var timer = document.querySelector(".timer");
    if (reset) {
      clearInterval(interval);
      timer.innerHTML = "01:30";
      return;
    }
  
    var time = timer.innerHTML;
    var minutes = parseInt(time.split(":")[0]);
    var seconds = parseInt(time.split(":")[1]);
  
    if (minutes == 0 && seconds == 0) {
      clearInterval(interval);
        const inputs = document.querySelectorAll('.var-input');
        inputs.forEach((input) => {
            input.setAttribute("disabled");
            input.value = '';
        })
        varCode = '';
        const stepHeader = document.querySelector('.step-header-2');
        stepHeader.id = "error-msg";
        stepHeader.innerHTML = "Your Verification Code Is Expired Please Click The Resend Code Button";
        timerEnded = true ;
      return;
    }
  
    if (seconds == 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    timer.innerHTML = minutes + ":" + seconds;
}

appStart();