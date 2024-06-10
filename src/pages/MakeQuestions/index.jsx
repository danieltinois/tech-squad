import { useEffect } from "react";

export function MakeQuestions() {
  useEffect(() => {
    document.title = "Make Questions - Tech Squad";
  }, []);
  return (
    <div>
      <span>MakeQuestions</span>
    </div>
  );
}
