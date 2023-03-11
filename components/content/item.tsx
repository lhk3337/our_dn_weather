import { cls } from "@libs/client/cls";
interface Props {
  name: string;
  Image: any;
  data: string;
}

export default function Item({ name, Image, data }: Props) {
  return (
    <div className=" shadow-lg rounded-xl bg-[#EAECEF] p-6 text-black flex flex-col space-y-2 mb-">
      <div className="text-[#7E8795] text-lg flex items-center space-x-2">
        {Image()}
        <span>{name}</span>
      </div>
      <span
        className={cls(
          name === "최저온도" ? "text-[#2A74F9]" : name === "최고온도" ? "text-[#DC0100]" : "",
          "text-2xl font-extrabold ml-4 text-[#4e4e4e]"
        )}
      >
        {data}
      </span>
    </div>
  );
}
