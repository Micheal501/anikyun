import { Button } from "@mantine/core";

type TButtonSignUpProps = {
  buttonTitle: string;
  variant: string;
  color: string;
  textColor: string;
};

const ButtonClick = ({
  buttonTitle,
  variant,
  color,
  textColor,
}: TButtonSignUpProps) => {
  return (
    <>
      <Button
        size="md"
        radius="md"
        variant={variant}
        style={{ borderColor: color, color: textColor }}
      >
        {buttonTitle}
      </Button>
    </>
  );
};

export default ButtonClick;
