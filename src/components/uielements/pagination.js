import { Pagination } from "antd"
import AntPagination from "./styles/pagination.style"
import WithDirection from "../../settings/with-direction"

const Paginations = AntPagination(Pagination)
const isoPagination = WithDirection(Paginations)

export default isoPagination
