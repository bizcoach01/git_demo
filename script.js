const state = {
  experience: "관리와 운영",
  strength: "문제 정리",
  workStyle: "주 2~3일 가볍게",
};

const careerMap = {
  "관리와 운영": {
    title: "운영 자문형 커리어",
    summary: "조직을 움직여본 경험을 작은 회사, 단체, 지역 모임의 운영 개선 자문으로 바꿀 수 있습니다.",
    assets: ["사람과 일정, 비용을 조율해본 경험", "문제가 커지기 전에 구조를 잡는 힘", "조직 안에서 신뢰를 쌓아온 태도"],
    plan: ["잘 운영했던 사례 5가지를 정리하기", "도움을 줄 수 있는 작은 사업장 3곳 떠올리기", "1회 운영 점검표를 만들어 지인에게 테스트하기"],
  },
  "영업과 고객": {
    title: "고객 관계 멘토형 커리어",
    summary: "고객을 이해하고 설득해온 경험을 상담, 판매 교육, 소상공인 고객관리 코칭으로 확장할 수 있습니다.",
    assets: ["상대의 필요를 빠르게 읽는 감각", "거절을 다루고 관계를 이어온 경험", "현장에서 통하는 말과 사례"],
    plan: ["성공했던 고객 사례 10개를 적기", "초보 판매자에게 알려줄 원칙 5개 만들기", "30분 고객 응대 코칭 상품을 구상하기"],
  },
  "기술과 현장": {
    title: "현장 기술 전수형 커리어",
    summary: "오랜 손기술과 현장 판단력을 교육, 안전 점검, 후배 양성 콘텐츠로 자산화할 수 있습니다.",
    assets: ["책에 없는 현장 판단 기준", "실수를 줄이는 작업 순서", "안전과 품질을 지켜온 습관"],
    plan: ["초보자가 자주 하는 실수 10개 적기", "사진이나 체크리스트로 작업 과정을 정리하기", "지역 교육기관이나 모임에 짧은 강의 제안하기"],
  },
  "교육과 코칭": {
    title: "인생 전환 코치형 커리어",
    summary: "사람을 성장시켜본 경험을 시니어 전환 교육, 진로 상담, 소그룹 코칭으로 만들기 좋습니다.",
    assets: ["상대의 이야기를 듣고 정리하는 힘", "학습 순서를 설계해본 경험", "사람을 격려하고 지속시키는 태도"],
    plan: ["가르칠 수 있는 주제 3개를 고르기", "60분 소그룹 진행안을 만들기", "무료 파일럿 모임을 열고 반응을 확인하기"],
  },
  "돌봄과 봉사": {
    title: "지역 돌봄 연결형 커리어",
    summary: "돌봄과 봉사 경험은 지역 커뮤니티, 복지 서비스, 생활 지원 활동으로 이어질 수 있습니다.",
    assets: ["상대의 불편을 세심하게 보는 눈", "지속적으로 돕는 책임감", "지역 안에서 만든 관계망"],
    plan: ["도울 수 있는 대상과 상황을 구체화하기", "지역 기관 3곳의 필요를 확인하기", "주 1회 가능한 작은 서비스부터 시작하기"],
  },
  "창업과 자영업": {
    title: "소상공인 동행형 커리어",
    summary: "직접 버티고 운영해본 경험을 예비 창업자, 자영업자, 지역 상권 멘토링으로 바꿀 수 있습니다.",
    assets: ["매출, 손님, 비용을 몸으로 익힌 감각", "시행착오를 통해 얻은 현실 조언", "작게 시작하고 개선하는 실행력"],
    plan: ["창업 때 알았으면 좋았을 것 10개 적기", "초보 사장님 체크리스트 만들기", "지인 사업자 1명에게 무료 점검을 해보기"],
  },
};

const strengthAdditions = {
  "문제 정리": "복잡한 상황을 알기 쉽게 정리해주는 역할을 앞세우세요.",
  "사람 연결": "좋은 사람과 기회를 이어주는 네트워크형 활동이 잘 맞습니다.",
  "가르치기": "강의, 멘토링, 워크숍처럼 지식을 나누는 방식이 어울립니다.",
  "꼼꼼한 실행": "체크리스트, 점검, 운영 대행처럼 신뢰가 중요한 일이 좋습니다.",
  "위기 대처": "문제 상황을 예방하고 대응하는 컨설팅형 역할이 강점입니다.",
  "아이디어 제안": "새로운 상품, 프로그램, 콘텐츠를 함께 만드는 일이 잘 맞습니다.",
};

const workStyleAdditions = {
  "주 2~3일 가볍게": "처음에는 주 2~3일, 회당 1~2시간짜리 활동으로 부담을 낮추세요.",
  "온라인 중심": "화상 상담, 짧은 강의, PDF 자료처럼 이동이 적은 방식을 추천합니다.",
  "지역에서 활동": "주민센터, 복지관, 소상공인 모임 등 가까운 관계망부터 시작하세요.",
  "작게 창업": "큰 투자보다 1인 서비스, 소그룹 교육, 월 구독 상담처럼 작게 검증하세요.",
};

const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const assetList = document.querySelector("#assetList");
const roadmapList = document.querySelector("#roadmapList");
const noteInput = document.querySelector("#note");

document.querySelectorAll(".choice-grid").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest(".choice");

    if (!button) {
      return;
    }

    group.querySelectorAll(".choice").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state[group.dataset.group] = button.dataset.value;
    renderResult();
  });
});

document.querySelector("#careerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderResult(true);
});

noteInput.addEventListener("input", () => renderResult());

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function renderResult(fromSubmit = false) {
  const career = careerMap[state.experience];
  const note = noteInput.value.trim();
  const noteLine = note ? ` 특히 "${note}" 경험은 첫 상품이나 첫 강의 주제로 만들기 좋습니다.` : "";

  resultTitle.textContent = career.title;
  resultSummary.textContent = `${career.summary} ${strengthAdditions[state.strength]} ${workStyleAdditions[state.workStyle]}${noteLine}`;

  renderList(assetList, career.assets);
  renderList(roadmapList, career.plan);

  if (fromSubmit && window.innerWidth < 900) {
    document.querySelector(".result").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

renderResult();
