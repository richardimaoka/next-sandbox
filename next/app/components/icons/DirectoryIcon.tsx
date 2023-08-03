import Image from "next/image";
import DirectoryImg from "../../../public/images/directory.png";

export const DirectoryIcon = (): JSX.Element => {
  return <Image src={DirectoryImg} height="16" width="16" alt="file icon" />;
};
