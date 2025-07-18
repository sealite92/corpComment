import { createContext, useContext, useMemo, useState } from "react";

import type { TFeedBackItem } from "../lib/types";
import { useEffect } from "react";

type TFeedBackItemContextProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemsContext = {
  filteredCompany: TFeedBackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddItem: (text: string) => void;
  handleSelectCompany: (company: string) => void;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
);

export default function FeedBackItemContextProvider({
  children,
}: TFeedBackItemContextProviderProps) {
  const [feedbackItems, setFeedbackItems] = useState<TFeedBackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );

  const filteredCompany = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  const handleAddItem = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedBackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

  useEffect(() => {
    setIsLoading(true);

    const feedbackItems = async () => {
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (Error) {
        try {
          const response = await fetch("./lib/Data.json");
          if (!response.ok) {
            throw new Error();
          }
          const localData = await response.json();
          console.log(localData);
          setFeedbackItems(localData.feedbacks);
        } catch {
          setErrorMessage("Something went wrong. Please try again later.");
        }
      }
      setIsLoading(false);
    };
    feedbackItems();
  }, []);

  return (
    <FeedbackItemsContext.Provider
      value={{
        filteredCompany,
        isLoading,
        companyList,
        errorMessage,
        handleAddItem,
        handleSelectCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}

export function UseFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "Feedbackitems context is not defined in the feedbackitems list"
    );
  }
  return context;
}
