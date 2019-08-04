import PollOption, { IPollOption } from "./PollOption";

declare function Array_of_PollOption(data: Array<PollOption | IPollOption>, token?: string): Array<PollOption>;
declare type Array_of_PollOption = Array<PollOption>;
export default Array_of_PollOption;
