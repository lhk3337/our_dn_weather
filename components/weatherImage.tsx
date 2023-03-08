import { RainHeavy, RainSnow, Rain, Cloud, CloudHeavy, Snow, Sunny } from "assets/weatherImage/image";

interface Props {
  skyState: string;
  pty: string;
}
export default function WeatherImage({ skyState, pty }: Props) {
  const Image = () => {
    if (skyState === "1") {
      return <Sunny />;
    } else if (skyState === "3") {
      return <CloudHeavy />;
    } else if (skyState === "4") {
      if (pty === "0") {
        return <Cloud />;
      } else if (pty === "1") {
        return <Rain />;
      } else if (pty === "2") {
        return <RainSnow />;
      } else if (pty === "3") {
        return <Snow />;
      } else if (pty === "4") {
        return <RainHeavy />;
      }
    }
  };

  return <>{Image()}</>;
}
