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
      <span className="text-2xl font-extrabold ml-4">{data}</span>
    </div>
  );
}
