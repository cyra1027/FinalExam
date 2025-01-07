import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth();

document.getElementById("send-otp-btn").addEventListener("click", () => {
  const phoneNumber = document.getElementById("phone").value;

  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      auth
    );
  }

  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent!");
    })
    .catch((error) => {
      console.error(error);
      alert("Error sending OTP");
    });
});
