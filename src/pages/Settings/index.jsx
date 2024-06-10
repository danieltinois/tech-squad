import { useEffect } from "react";

export function Settings() {
  useEffect(() => {
    document.title = "Settings - Tech Squad";
  }, []);
  return (
    <div>
      <span>Settings</span>
    </div>
  );
}
