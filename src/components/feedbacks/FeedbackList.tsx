import FeedBackItem from "./FeedBackItem";
import Spinner from "../Spinner";
import Errormessage from "../Errormessage ";
// import type { TFeedBackItem } from "../../lib/types";
import { UseFeedbackItemsContext } from "../FeedBackItemContextProvider";

// type FeedcackListProps = {
//   feedbackItems: TFeedBackItem[];
//   isLoading: boolean;
//   errorMessage: string;
// };

///https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks

// Using custom hooks and context API
export default function FeedbackList() {
  const { isLoading, errorMessage, filteredCompany } =
    UseFeedbackItemsContext();
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <Errormessage message={errorMessage} />}
      {!isLoading && !errorMessage && filteredCompany.length > 0 && (
        <h2 className="feedback-list-title">Feedback</h2>
      )}
      {filteredCompany.map((feedbackItem) => (
        <FeedBackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

// export default function FeedbackList({
//   feedbackItems,
//   isLoading,
//   errorMessage,
// }: FeedcackListProps) {
//   return (
//     <ol className="feedback-list">
//       {isLoading && <Spinner />}
//       {errorMessage && <Errormessage message={errorMessage} />}
//       {!isLoading && !errorMessage && feedbackItems.length > 0 && (
//         <h2 className="feedback-list-title">Feedback</h2>
//       )}
//       {feedbackItems.map((feedbackItem) => (
//         <FeedBackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
//       ))}
//     </ol>
//   );
// }
