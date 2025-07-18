import type { Container } from "react-dom/client";
import FeedbackList from "../feedbacks/FeedbackList";
import Header from "./Header";
// import type { TFeedBackItem } from "../../lib/types";

// type ContainerProps = {
//   feedbackItems: TFeedBackItem[];
//   isLoading: boolean;
//   errorMessage: string;
//   handleAddItem: (text: string) => void;
// };

// Using custom hooks and context API
export default function Container() {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
}

// export default function Container({
//   feedbackItems,
//   isLoading,
//   errorMessage,
//   handleAddItem,
// }: ContainerProps) {
//   return (
//     <main className="container">
//       <Header handleAddItem={handleAddItem} />
//       <FeedbackList
//         feedbackItems={feedbackItems}
//         isLoading={isLoading}
//         errorMessage={errorMessage}
//       />
//     </main>
//   );
// }
