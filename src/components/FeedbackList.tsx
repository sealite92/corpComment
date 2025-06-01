import { useEffect, useState } from "react";
import FeedBackItem from "./FeedBackItem";
import Spinner from "./Spinner";
import Errormessage from "./Errormessage ";

///https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((Response) => {
        if (!Response.ok) {
          throw new Error();
        }
        return Response.json();
      })
      .then((data) => {
        console.log(data.feedbacks);
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Something went wrong. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <Errormessage message={errorMessage} />}
      {!isLoading && !errorMessage && feedbackItems.length > 0 && (
        <h2 className="feedback-list-title">Feedback</h2>
      )}
      {feedbackItems.map((feedbackItem) => (
        <FeedBackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
