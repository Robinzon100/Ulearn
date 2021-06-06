

import { userCoursesLike } from "actions/client/user/courses/userCoursesLike.action";
import { authenticatedRequest } from "components/utils/auth/tokenValidations";





export const handleUserCourseLikes = async (liked_course_id) => {
  const res = await authenticatedRequest(userCoursesLike,liked_course_id, null);

  return res
}