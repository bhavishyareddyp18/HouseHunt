export const validateEmail =
(email) => {

  const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const validatePhone =
(phone) => {

  const phoneRegex =
  /^[6-9]\d{9}$/;

  return phoneRegex.test(phone);
};

export const validatePassword =
(password) => {

  const errors = [];

  if(password.length < 8){

    errors.push(
      "Minimum 8 characters"
    );
  }

  if(
    !/[A-Z]/.test(password)
  ){

    errors.push(
      "One uppercase letter required"
    );
  }

  if(
    !/[a-z]/.test(password)
  ){

    errors.push(
      "One lowercase letter required"
    );
  }

  if(
    !/\d/.test(password)
  ){

    errors.push(
      "One number required"
    );
  }

  if(
    !/[!@#$%^&*]/.test(
      password
    )
  ){

    errors.push(
      "One special character required"
    );
  }

  return errors;
};

export const getPasswordStrength =
(password) => {

  let score = 0;

  if(password.length >= 8)
    score++;

  if(
    /[A-Z]/.test(password)
  )
    score++;

  if(
    /[a-z]/.test(password)
  )
    score++;

  if(
    /\d/.test(password)
  )
    score++;

  if(
    /[!@#$%^&*]/.test(
      password
    )
  )
    score++;

  if(score <= 2)
    return "Weak";

  if(score <= 4)
    return "Medium";

  return "Strong";
};