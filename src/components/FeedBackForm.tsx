import { useState } from "react";
import { MAX_CHARACTER } from "../lib/constants";

export default function FeedBackForm() {
  const [text, setText] = useState("");

  const handleChage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTER) {
      return;
    }
    setText(newText);
  };

  const charCount = MAX_CHARACTER - text.length;

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={handleChage}
        id="feedback-textarea"
        placeholder="ygiyd"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
