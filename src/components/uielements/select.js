import { Select } from "antd"
import { AntSelect } from "./styles/select.style"
import WithDirection from "../../settings/with-direction"

const WDSelect = AntSelect(Select)
const isoSelect = WithDirection(WDSelect)
const SelectOption = Select.Option

export default isoSelect
export { SelectOption }
