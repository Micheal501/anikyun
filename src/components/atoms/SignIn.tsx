import { Button } from "@mantine/core";
import classes from "../../App.module.css";

type TButtonSignInProps = {
  buttonTitle: string;
};

const SignUp = ({ buttonTitle }: TButtonSignInProps) => {
  return (
    <>
      <Button
        size="md"
        radius="md"
        className={classes.signIn}
      >
        {buttonTitle}
      </Button>
    </>
  );
};

export default SignUp;
