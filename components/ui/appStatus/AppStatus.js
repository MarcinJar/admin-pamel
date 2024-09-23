import Card from "@/components/card/Card";
import { useEffect, useState } from "react";

export default function AppStatus() {
  const [newUsersCount, setNewUsersCount] = useState(0);

  useEffect(() => {
    setNewUsersCount(Math.floor(Math.random() * 15));
  }, []);

  return <>
    <Card className="bg-gradient-to-r from-green-600 to-green-700 p-6">
      <h6 className="text-green-100 flex justify-start">
        <span className="ml-1">
          Nowi użytkownicy
        </span>
      </h6>
      <p className="text-white text-5xl">
        {newUsersCount}
      </p>
    </Card>
  </>
}