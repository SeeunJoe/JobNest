import { useNavigate } from "react-router-dom";
import DraftBtn from "./DraftBtn";
import DraftDropdown from "./DraftDropDown";
import SearchInput from "./SearchInput";
interface DraftContractProps {
  onCancel: () => void;
}
const DraftContract: React.FC<DraftContractProps> = ({ onCancel }) => {
  const navigate = useNavigate();
  const contractType = [
    "아파트",
    "주상복합",
    "오피스텔",
    "도시형생활주택",
    "상가",
    "사무실",
    "연립",
    "다세대",
    "아파트분양권",
    "주상복합분양권",
    "오피스텔분양권",
    "조합원입주권",
    "단독주택",
    "다가구주택",
    "다중주택",
    "원룸",
    "상가주택",
    "상가건물",
    "건물",
    "공장",
    "창고",
    "부동산",
    "토지",
    "표준임대차계약서",
    "주택표준임대차계약서",
    "상가건물임대차표준계약서",
    "전대차(주택)",
    "전대차(상가)",
    "상가권리금",
    "권리양도양수",
  ];
  const transactionType = ["매매", "전세", "월세", "연세"];
  const handleDraftClick = () => {
    navigate("/contractDrafting");
  };
  return (
    <div className="bg-white w-[584px] h-[364px] flex my-16 flex-col items-center justify-center rounded-lg">
      <div className="w-[477px]">
        <span className="text-[23px] font-bold">계약서 작성</span>
        <div className="mt-4 text-[15px] font-bold">계약서 선택</div>

        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <div className=" mr-4 text-[13px] font-bold">계약서 종류</div>
            <DraftDropdown items={contractType} />
          </div>
          <div className="flex items-center">
            <div className=" mr-4 text-[13px] font-bold">거래 유형</div>
            <DraftDropdown items={transactionType} />
          </div>
        </div>
        <div className="text-[13px] font-bold my-4">주소 입력</div>
        <SearchInput />
        <div className="flex items-center justify-center gap-2 mt-7">
          <DraftBtn onClick={onCancel} />
          <DraftBtn
            color="#335995"
            borderColor="#335995"
            text="계약서 작성"
            textColor="white"
            onClick={handleDraftClick}
          />
        </div>
      </div>
    </div>
  );
};
export default DraftContract;
