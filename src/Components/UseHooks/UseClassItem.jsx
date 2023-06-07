import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const token = localStorage.getItem("access-token");

export const useClassItem = () => {
  const { user, loading } = useContext(AuthContext);

  const {
    refetch,
    data: classes = [],
    error,
    isLoading,
  } = useQuery(
    ["classItem", user?.email],
    async () => {
      const res = await fetch(
        `http://localhost:5000/classItem?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch class items");
      }
      return res.json();
    },
    {
      enabled: !loading,
    }
  );

  if (error) {
    console.log("Class item error:", error.message);
    // You can display an error message to the user or handle the error as needed
  }

  if (isLoading) {
    // You can show a loading spinner or skeleton screen while the data is being fetched
    return { classes: [], refetch, isLoading: true };
  }

  return { classes, refetch, isLoading: false };
};
