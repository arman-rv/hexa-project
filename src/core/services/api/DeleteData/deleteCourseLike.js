import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import onFormData from "../FormData";
import GetCourseDetails from "../GetData/getCourseDetailsById";

const handleCourseDeleteLike = async (
  userLikeId,
  changeLikeColor,
  setChangeLikeColor,
  courseId,
  setData
) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
    try {
      const obj = {
        CourseLikeId: userLikeId,
      };
      const data = onFormData(obj);

      const result = await http.delete("/Course/DeleteCourseLike", {
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (result.success == true) {
        toast.success("لایک این دوره با موفقیت حذف شد");
        setChangeLikeColor(!changeLikeColor);
        GetCourseDetails(courseId, setData)
      } else if (result.success == false) {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
};
export default handleCourseDeleteLike;
