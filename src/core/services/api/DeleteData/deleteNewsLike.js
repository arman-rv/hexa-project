import http from "../../interceptor";
import { toast } from "react-toastify";
import { getProfile } from "../GetData/profile";
import GetNewsDetails from "../GetData/getNewsData/getNewsDetailsById";

const handleNewsDeleteLike = async (newsLikeId, changeLikeColor, setChangeLikeColor, id, setData) => {
  const user = await getProfile();
  if (user == false) {
    showLoginModal.click();
  } else {
        try {
            const result = await http.delete("/News/DeleteLikeNews",{data:{deleteEntityId: newsLikeId}});
            if (result.success == false) {
                toast.success("لایک این خبر با موفقیت حذف شد")
                setChangeLikeColor(!changeLikeColor);
                GetNewsDetails(id, setData)
            } else {
                toast.error(result.message)
            }
            } catch (error) {
            console.error(error);
        }
    }
};
export default handleNewsDeleteLike;