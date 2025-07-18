import { UseFeedbackItemsContext } from "../FeedBackItemContextProvider";
import HashTagItem from "./HashTagItem";

export default function HashTagList() {
  const { companyList, handleSelectCompany } = UseFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem
          key={company}
          company={company}
          onSelectCompany={handleSelectCompany}
        />
      ))}
    </ul>
  );
}

// type hashTagListProps = {
//   companyList: string[];
//   handleSelectCompany: (company: string) => void;
// };

// export default function HashTagList({
//   companyList,
//   handleSelectCompany,
// }: hashTagListProps) {
//   return (
//     <ul className="hashtags">
//       {companyList.map((company) => (
//         <HashTagItem company={company} onSelectCompany={handleSelectCompany} />
//       ))}
//     </ul>
//   );
// }
