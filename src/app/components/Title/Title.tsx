import { text } from "stream/consumers";
import Mounted from "../Mounted";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <Mounted>
      <h1 className="m-0 font-bold uppercase text-light-text-primary dark:text-dark-text-primary">
        {text}
      </h1>
    </Mounted>
  );
};

export default Title;
