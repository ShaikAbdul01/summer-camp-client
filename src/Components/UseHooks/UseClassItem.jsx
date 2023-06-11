import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";
const token = localStorage.getItem("access-token");
export const useClassItem = () => {
  const { user, loading } = useContext(AuthContext);
  // const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    data: classItem = [],
    error,
  } = useQuery({
    queryKey: ["classItem", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://artistry-academy-server.vercel.app/classItem?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },

    /*  queryFn: async () => {
      const response = await axiosSecure(`/classItem?email=${user?.email}`);
      return response.data;
    }, */
  });

  if (error) {
    console.log("Cart error:", error.message);
  }

  return [classItem, refetch];
};
