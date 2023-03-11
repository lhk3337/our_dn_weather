import { cls } from "@libs/client/cls";
interface Props {
  name: string;
  Image: any;
  data: string;
  isrowColor?: boolean;
  ishighColor?: boolean;
}

export default function Item({ name, Image, data, isrowColor, ishighColor }: Props) {
  console.log(isrowColor === true ? "text-[#2A74F9]" : "");
  return (
    <div className=" shadow-lg rounded-xl bg-[#EAECEF] p-6 text-black flex flex-col space-y-2 mb-">
      <div className="text-[#7E8795] text-lg flex items-center space-x-2">
        {Image()}
        <span>{name}</span>
      </div>
      <span
        className={cls(
          ishighColor ? "text-[#DC0100]" : "",
          isrowColor ? "text-sky-600" : "",
          "text-2xl font-extrabold ml-4 text-[#4e4e4e]"
        )}
      >
        {data}
      </span>
    </div>
  );
}
