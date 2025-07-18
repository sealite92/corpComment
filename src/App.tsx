import Container from "./components/layouts/Container";
import Footer from "./components/layouts/Footer";
import HashTagList from "./components/hashtags/HashTagList";
import FeedBackItemContextProvider from "./components/FeedBackItemContextProvider";

//// Using Context Api
function App() {
  return (
    <div className="app">
      <Footer />
      <FeedBackItemContextProvider>
        <Container />
        <HashTagList />
      </FeedBackItemContextProvider>
    </div>
  );
}

// function App() {
//   const [feedbackItems, setFeedbackItems] = useState<TFeedBackItem[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [selectedCompany, setSelectedCompany] = useState("");

//   const filteredCompany = useMemo(
//     () =>
//       selectedCompany
//         ? feedbackItems.filter(
//             (feedbackItem) => feedbackItem.company === selectedCompany
//           )
//         : feedbackItems,
//     [feedbackItems, selectedCompany]
//   );

//   const handleSelectCompany = (company: string) => {
//     setSelectedCompany(company);
//   };

//   const companyList = useMemo(
//     () =>
//       feedbackItems
//         .map((item) => item.company)
//         .filter((company, index, array) => {
//           return array.indexOf(company) === index;
//         }),
//     [feedbackItems]
//   );

//   const handleAddItem = async (text: string) => {
//     const companyName = text
//       .split(" ")
//       .find((word) => word.includes("#"))!
//       .substring(1);
//     const newItem: TFeedBackItem = {
//       id: new Date().getTime(),
//       text: text,
//       upvoteCount: 0,
//       daysAgo: 0,
//       company: companyName,
//       badgeLetter: companyName.substring(0, 1).toUpperCase(),
//     };
//     setFeedbackItems([...feedbackItems, newItem]);

//     await fetch(
//       "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
//       {
//         method: "POST",
//         headers: {
//           accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newItem),
//       }
//     );
//   };

//   useEffect(() => {
//     setIsLoading(true);

//     const feedbackItems = async () => {
//       try {
//         const response = await fetch(
//           "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
//         );
//         if (!response.ok) {
//           throw new Error();
//         }
//         const data = await response.json();
//         setFeedbackItems(data.feedbacks);
//       } catch (Error) {
//         try {
//           const response = await fetch("./lib/Data.json");
//           if (!response.ok) {
//             throw new Error();
//           }
//           const localData = await response.json();
//           console.log(localData);
//           setFeedbackItems(localData.feedbacks);
//         } catch {
//           setErrorMessage("Something went wrong. Please try again later.");
//         }
//       }
//       setIsLoading(false);
//     };
//     feedbackItems();
//   }, []);

//   return (
//     <div className="app">
//       <Footer />
//       <Container
//         feedbackItems={filteredCompany}
//         isLoading={isLoading}
//         errorMessage={errorMessage}
//         handleAddItem={handleAddItem}
//       />
//       <HashTagList
//         companyList={companyList}
//         handleSelectCompany={handleSelectCompany}
//       />
//     </div>
//   );
// }

export default App;
