import { Rate } from "antd"
import Ratings from "./styles/rating.style"
import WithDirection from "../../settings/with-direction"

const AntRating = Ratings(Rate)
const Rating = WithDirection(AntRating)
export default Rating
