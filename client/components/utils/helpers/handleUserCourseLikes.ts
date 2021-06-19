

import { userCoursesLike } from "actions/client/user/courses/userCoursesLike.action";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";





export const handleUserCourseLikes = async ({ id, isLiked }) => {
  const res = await authenticatedRequest(userCoursesLike, { id, isLiked }, null);
  if (res.statusCode != 200) {
    window.location.href = '/login'
  }  
  return res
}