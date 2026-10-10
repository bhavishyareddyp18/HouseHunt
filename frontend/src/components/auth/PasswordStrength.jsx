import {
  getPasswordStrength
} from "../../utils/validators";

function PasswordStrength({
  password
}) {

  const strength =
    getPasswordStrength(
      password
    );

  const getClass = () => {

    if(
      strength === "Weak"
    )
      return "bg-danger";

    if(
      strength === "Medium"
    )
      return "bg-warning";

    return "bg-success";
  };

  const getWidth = () => {

    if(
      strength === "Weak"
    )
      return "33%";

    if(
      strength === "Medium"
    )
      return "66%";

    return "100%";
  };

  return (

    <div>

      <div
        className="progress mt-2"
      >

        <div

          className={
            `progress-bar ${getClass()}`
          }

          style={{
            width:getWidth()
          }}

        >

          {strength}

        </div>

      </div>

    </div>

  );
}

export default PasswordStrength;