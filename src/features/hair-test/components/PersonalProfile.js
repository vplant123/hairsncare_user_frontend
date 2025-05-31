import React, { useState, useEffect } from "react";
import BASE_URL from "../../../Config";
import SignByhairTestUp from "../../SignByhairTestUp";

export default function PersonalProfile({
  data,
  setTestId,
  selectedOptionP,
  setMale,
  setSelectedOptionP,
  nextStep,
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  hairTestExist,
  fetchData,
}) {
  // const [name, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState(data.questions);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [api, setApi] = useState("");

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
  };

  useEffect(() => {
    const allInputsFilled =
      name &&
      phoneNumber &&
      email &&
      questions.every((question) => question.selectedOption !== undefined);
    setAllQuestionsAnswered(allInputsFilled);
  }, [name, phoneNumber, email, questions]);

  useEffect(() => {
    if (hairTestExist?.personal) {
      let x = hairTestExist?.personal;
      setName(x?.name);
      setPhoneNumber(x?.phoneNumber);
      setEmail(x?.email);
      const updatedQuestions = [...questions];
      let a, b;
      a = updatedQuestions?.findIndex(
        (e) => e?.ques == "Select your age group"
      );
      if (a != -1) {
        b = updatedQuestions[a]?.options?.findIndex(
          (e) => e == x["Select your age group"]
        );
        updatedQuestions[a].selectedOption = b;
      }
      a = updatedQuestions?.findIndex((e) => e?.ques == "Gender");
      if (a != -1) {
        b = updatedQuestions[a]?.options?.findIndex(
          (e) => e?.src == x["Gender"]?.src
        );
        updatedQuestions[a].selectedOption = b;
      }
      if (x?.Gender && x?.Gender?.src === "/assets/img/question/male.svg") {
        setMale(true);
      }
      setQuestions(updatedQuestions);
      setSelectedOptionP(updatedQuestions);
    }
  }, [hairTestExist]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    const newNumber = event.target.value;
    setPhoneNumber(newNumber);

    // Phone number validation for India
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(newNumber)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleOptionSelect = (index, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].selectedOption = optionIndex;

    // Check if the selected option has the specific source for male
    const selectedOption = updatedQuestions[index].options[optionIndex];
    if (selectedOption.src === "/assets/img/question/male.svg") {
      setMale(true);
    }

    setQuestions(updatedQuestions);
    setSelectedOptionP(updatedQuestions);
  };

  const handleNextQuestion = async () => {
    let token;
    let storedUserData = JSON.parse(localStorage.getItem("User343"));
    if (storedUserData) token = storedUserData.logedInUser.accessToken;
    if (token) {
      if (allQuestionsAnswered && !phoneError && !emailError) {
        let data = {
          personal: {
            name,
            email,
            phoneNumber,
            [selectedOptionP[0].ques]:
              selectedOptionP[0].options[selectedOptionP[0].selectedOption],
            [selectedOptionP[1].ques]:
              selectedOptionP[1].options[selectedOptionP[1].selectedOption],
          },
        };

        try {
          const response = await fetch(
            `${BASE_URL}/hair-tests/createHairTestForUserStepWise`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
              body: hairTestExist
                ? JSON.stringify({
                    id: hairTestExist?._id,
                    data: {
                      ...data,
                      userId: storedUserData.logedInUser.user._id,
                    },
                  })
                : JSON.stringify({
                    data: {
                      ...data,
                      userId: storedUserData.logedInUser.user._id,
                    },
                  }),
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          } else {
            const responseData = await response.json();
            setTestId(responseData.data._id);

            nextStep();
          }

          // Handle the response data as needed
        } catch (error) {
          console.error(
            "There was a problem with the fetch operation:",
            error.message
          );
        }
        nextStep();
      }
    } else {
      try {
        const response1 = await fetch(`${BASE_URL}/users/sendotp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: phoneNumber,
          }),
        });
        const jsonData = await response1.json();

        if (response1.ok) {
          setApi("verifyOTP");
          // alert.show('OTP sent Successfully !')
          handleSignupClick();
        } else {
          if (jsonData?.statusCode == 400) {
            const response2 = await fetch(`${BASE_URL}/users/sendOtpForLogin`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                mobile: phoneNumber,
              }),
            });
            if (response2.ok) {
              setApi("verifyOtpAndLogin");
              handleSignupClick();
            }
          }
        }
      } catch (error) {
        console.error("Error logging in:", error);
        // Handle network errors or other unexpected errors
      }
    }
  };

  return (
    <div className="profile-container">
      <div className="progress-indicator">
        <span className="dot-per" />
      </div>
      <h3>What is your name</h3>
      <input value={name} onChange={handleNameChange} />
      <h3>Your Phone Number</h3>
      <div className="err-con">
        <input value={phoneNumber} onChange={handlePhoneNumberChange} />
        {phoneError && <span className="error1">{phoneError}</span>}
      </div>
      <h3>Your E-mail Address</h3>
      <div className="err-con">
        <input value={email} onChange={handleEmailChange} />
        {emailError && <span className="error1">{emailError}</span>}
      </div>
      {questions.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.ques}</h3>
            <div className="options-container op-con">
              {item.options.map((op, opIndex) => {
                return (
                  <div
                    key={opIndex}
                    className={`option circle-01 ${
                      item.selectedOption === opIndex ? "selected-personal" : ""
                    }`}
                    onClick={() => handleOptionSelect(index, opIndex)}
                  >
                    {op.src ? (
                      <div className="image-container4">
                        <img alt="hair" src={op.src} />
                      </div>
                    ) : (
                      <div className="circle-01">{op}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {showSignup && (
        <SignByhairTestUp
          onClose={handleSignupClick}
          name={name}
          emailAdd={email}
          phoneNumber={phoneNumber}
          api={api}
          nextStep={() => {
            fetchData();
            handleNextQuestion();
          }}
        />
      )}

      <div className="test-btnn">
        <button disabled={true}>Prev</button>
        <button
          disabled={!allQuestionsAnswered || phoneError || emailError}
          onClick={handleNextQuestion}
        >
          Next
        </button>
      </div>
    </div>
  );
}
