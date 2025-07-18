import { UseFeedbackItemsContext } from "../FeedBackItemContextProvider";
import FeedBackForm from "../feedbacks/FeedBackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

//Using custom hooks and context API
export default function Header() {
  const { handleAddItem } = UseFeedbackItemsContext();
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedBackForm onAddItem={handleAddItem} />
    </header>
  );
}

// type HeaderProps = {
//   handleAddItem: (text: string) => void;
// };

// export default function Header({ handleAddItem }: HeaderProps) {
//   return (
//     <header>
//       <Pattern />
//       <Logo />
//       <PageHeading />
//       <FeedBackForm onAddItem={handleAddItem} />
//     </header>
//   );
// }
