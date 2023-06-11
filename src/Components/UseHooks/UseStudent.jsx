import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseStudent = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery(
    ["isStudent", user?.email],
    {
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/student/${user?.email}`);
        return res.data.student; // Assuming the "student" property exists in the response data
      },
    }
  );

  return [isStudent, isStudentLoading];
};

export default UseStudent;
