/* =========================================================
   ThRead 베스트셀러 12권 데이터
   - 베스트셀러 Carousel과 도서 상세 화면이 모두 이 데이터로 그려짐
   - 실제 정보: 제목, 저자, 출판사, 소개, 작가 소개, 수상
   - 예시 데이터(화면 구성용): 평점, 참여자 수, 담은 사람, 예상 읽기 시간,
     난이도, 분위기 점수, 도서관 대출 상태, 쓰레드
   ========================================================= */
const BOOKS = [
  {
    id: 1,
    title: "소년이 온다",
    author: "한강",
    publisher: "창비",
    origin: "한국 소설",
    cover: "assets/bestsellers/img1.jpeg",
    change: { type: "same" },
    rating: 9.6,
    raters: 3412,
    saved: 15820,
    readTime: "약 4시간",
    level: "보통",
    award: "2014 만해문학상 수상작",
    desc: "1980년 5월 광주. 친구의 죽음을 목격한 열다섯 살 소년 동호는 시신을 수습하는 상무관에 남는다. 그해 5월을 함께 지난 사람들과 남겨진 이들의 시간을 여러 목소리로 따라가는 소설.",
    authorBio: "1970년 광주에서 태어났다. 1993년 시, 이듬해 소설로 등단했고 2024년 노벨문학상을 받았다.",
    points: [
      "장마다 화자가 바뀌어, 한 사건을 여러 사람의 시간으로 다시 보게 돼요.",
      "직접적인 묘사가 있는 장면이 있어요. 천천히 나눠 읽는 독자가 많아요.",
      "마지막 에필로그에서 작가가 이 이야기를 쓰게 된 과정이 드러나요."
    ],
    keywords: ["#광주", "#기억", "#애도", "#존엄", "#목소리"],
    mood: { dark: 90, lyric: 78, tension: 72 },
    libraries: [
      { name: "국립중앙도서관", area: "서울 서초구", status: "ok", note: "4권 소장" },
      { name: "정독도서관", area: "서울 종로구", status: "wait", note: "10월 24일 반납 예정" },
      { name: "마포중앙도서관", area: "서울 마포구", status: "ok", note: "2권 소장" }
    ],
    threadCount: 41,
    threads: [
      { title: "동호의 시선으로 시작하는 첫 장이 오래 남는다", user: "한서연", badge: "done", likes: 214 },
      { title: "읽는 내내 숨을 고르며 한 장씩 넘겼다", user: "오지훈", badge: "done", likes: 167 },
      { title: "학교에서 이 책을 함께 읽은 이야기", user: "윤채원", badge: "reading", likes: 98 },
      { title: "에필로그를 읽고 첫 장으로 다시 돌아갔다", user: "서도윤", badge: "done", spoiler: true, likes: 76 }
    ],
    related: [2, 12, 3, 9, 4]
  },
  {
    id: 2,
    title: "채식주의자",
    author: "한강",
    publisher: "창비",
    origin: "한국 소설",
    cover: "assets/bestsellers/img2.jpeg",
    change: { type: "up", value: 1 },
    rating: 9.4,
    raters: 2318,
    saved: 12480,
    readTime: "약 3시간",
    level: "보통",
    award: "2016 인터내셔널 부커상 수상작",
    desc: "어느 날 꿈을 꾼 뒤 고기를 먹지 않기로 한 영혜. 평범했던 일상은 그 선택 하나로 흔들리기 시작한다. 남편, 형부, 언니의 시선으로 이어지는 세 편의 이야기 속에서 한 사람을 이해한다는 것이 무엇인지 묻는 소설.",
    authorBio: "1970년 광주에서 태어났다. 1993년 시, 이듬해 소설로 등단했고 2024년 노벨문학상을 받았다.",
    points: [
      "「채식주의자」, 「몽고반점」, 「나무 불꽃」 세 편이 이어지는 연작이에요.",
      "부마다 남편, 형부, 언니로 시선이 바뀌고, 영혜의 목소리는 거의 들리지 않아요.",
      "약 9.3만 자(eBook 기준) 분량이라 하루 이틀이면 읽을 수 있어요."
    ],
    keywords: ["#가족", "#욕망", "#폭력", "#식물", "#침묵", "#시선"],
    mood: { dark: 82, lyric: 71, tension: 64 },
    libraries: [
      { name: "국회도서관", area: "서울 영등포구", status: "ok", note: "2권 소장" },
      { name: "국립중앙도서관", area: "서울 서초구", status: "ok", note: "3권 소장" },
      { name: "서울도서관", area: "서울 중구", status: "wait", note: "10월 22일 반납 예정" }
    ],
    threadCount: 12,
    threads: [
      { title: "영혜의 침묵이 가장 큰 목소리였다", user: "김소민", badge: "done", likes: 128 },
      { title: "몽고반점을 읽고 한참 책을 덮어 두었다", user: "박지후", badge: "done", likes: 96 },
      { title: "세 사람의 시선, 결국 누구의 이야기일까", user: "이윤서", badge: "reading", likes: 74 },
      { title: "나무 불꽃의 마지막 장면에 대하여", user: "최민희", badge: "done", spoiler: true, likes: 61 }
    ],
    related: [1, 3, 4, 12, 6]
  },
  {
    id: 3,
    title: "대온실 수리 보고서",
    author: "김금희",
    publisher: "창비",
    origin: "한국 소설",
    cover: "assets/bestsellers/img3.jpeg",
    change: { type: "down", value: 1 },
    rating: 9.3,
    raters: 1874,
    saved: 9310,
    readTime: "약 6시간",
    level: "보통",
    desc: "창경궁 대온실의 보수 공사 기록을 맡게 된 영두. 낡은 온실을 하나씩 고쳐 가는 동안, 어린 시절 그 근처에서 보낸 시간과 묻어 두었던 기억도 함께 드러난다.",
    authorBio: "2009년 한국일보 신춘문예로 등단했다. 장편소설 『경애의 마음』, 『복자에게』 등을 썼다.",
    points: [
      "실제 장소인 창경궁 대온실이 이야기의 중심이라, 읽고 나면 가 보고 싶어져요.",
      "현재의 공사 기록과 과거의 기억이 번갈아 나오며 서서히 맞물려요.",
      "건물을 고치는 일과 마음을 고치는 일이 겹쳐지는 구성이 돋보여요."
    ],
    keywords: ["#창경궁", "#기억", "#복원", "#성장", "#우정"],
    mood: { dark: 46, lyric: 84, tension: 41 },
    libraries: [
      { name: "정독도서관", area: "서울 종로구", status: "ok", note: "3권 소장" },
      { name: "서울도서관", area: "서울 중구", status: "ok", note: "2권 소장" },
      { name: "남산도서관", area: "서울 용산구", status: "wait", note: "10월 27일 반납 예정" }
    ],
    threadCount: 18,
    threads: [
      { title: "책을 덮고 바로 창경궁에 다녀왔다", user: "강하늘", badge: "done", likes: 143 },
      { title: "보고서라는 형식이 이렇게 따뜻할 수 있다니", user: "임나은", badge: "done", likes: 102 },
      { title: "영두의 어린 시절 장면들이 계속 떠오른다", user: "박현우", badge: "reading", likes: 66 },
      { title: "온실이 다시 문을 여는 순간에 대하여", user: "한서연", badge: "done", spoiler: true, likes: 48 }
    ],
    related: [8, 2, 4, 12, 1]
  },
  {
    id: 4,
    title: "급류",
    author: "정대건",
    publisher: "민음사",
    origin: "한국 소설",
    cover: "assets/bestsellers/img4.jpeg",
    change: { type: "up", value: 3 },
    rating: 9.1,
    raters: 2045,
    saved: 10960,
    readTime: "약 4시간",
    level: "쉬움",
    desc: "계곡으로 유명한 마을 진평에서 함께 자란 도담과 해솔. 한 사고로 두 사람의 가족이 함께 무너진 뒤에도 서로를 놓지 못하는 두 사람의 사랑과 상처를 그린다.",
    authorBio: "영화를 만들다 소설을 쓰기 시작했다. 장편소설 『GV 빌런 고태경』으로 한겨레문학상을 받았다.",
    points: [
      "첫 장면부터 사건이 몰아쳐서 단숨에 읽게 돼요.",
      "십 대부터 어른이 될 때까지 두 사람의 시간을 길게 따라가요.",
      "물과 소용돌이 이미지가 감정의 흐름과 겹쳐 반복돼요."
    ],
    keywords: ["#첫사랑", "#상처", "#물", "#회복", "#성장"],
    mood: { dark: 68, lyric: 74, tension: 70 },
    libraries: [
      { name: "마포중앙도서관", area: "서울 마포구", status: "wait", note: "10월 21일 반납 예정" },
      { name: "강남도서관", area: "서울 강남구", status: "ok", note: "2권 소장" },
      { name: "서울도서관", area: "서울 중구", status: "ok", note: "1권 소장" }
    ],
    threadCount: 27,
    threads: [
      { title: "하룻밤에 다 읽어 버린 소설", user: "윤채원", badge: "done", likes: 188 },
      { title: "도담과 해솔, 누가 더 아팠을까", user: "오지훈", badge: "done", likes: 121 },
      { title: "제목이 왜 급류인지 알게 되는 순간", user: "김소민", badge: "reading", likes: 70 },
      { title: "마지막 장의 선택이 오래 남는다", user: "정우진", badge: "done", spoiler: true, likes: 57 }
    ],
    related: [8, 3, 11, 12, 1]
  },
  {
    id: 5,
    title: "시간의 계곡",
    author: "스콧 알렉산더 하워드",
    publisher: "다산책방",
    origin: "영미 소설",
    cover: "assets/bestsellers/img5.jpeg",
    change: { type: "new" },
    rating: 9.0,
    raters: 986,
    saved: 6120,
    readTime: "약 7시간",
    level: "보통",
    desc: "동쪽 계곡은 20년 뒤의 미래, 서쪽 계곡은 20년 전의 과거인 마을. 열여섯 살 오딜은 친구의 죽음 앞에서, 금지된 경계를 넘어 과거에 개입할지 고민하게 된다.",
    authorBio: "캐나다 작가. 가까운 친구를 갑작스럽게 잃은 경험에서 출발해 첫 장편소설 『시간의 계곡』을 썼다.",
    points: [
      "미래와 과거가 이웃 마을로 이어져 있다는 설정 하나로 이야기가 굴러가요.",
      "SF 장치보다 상실과 선택이라는 감정에 더 무게를 두는 소설이에요.",
      "오딜의 결정이 어디로 향하는지 끝까지 긴장감이 이어져요."
    ],
    keywords: ["#시간", "#상실", "#선택", "#운명", "#성장"],
    mood: { dark: 58, lyric: 69, tension: 77 },
    libraries: [
      { name: "강남도서관", area: "서울 강남구", status: "ok", note: "2권 소장" },
      { name: "국립중앙도서관", area: "서울 서초구", status: "ok", note: "2권 소장" },
      { name: "마포중앙도서관", area: "서울 마포구", status: "wait", note: "10월 29일 반납 예정" }
    ],
    threadCount: 9,
    threads: [
      { title: "20년 뒤의 나를 만난다면 무엇을 물을까", user: "서도윤", badge: "done", likes: 92 },
      { title: "설정만 듣고 샀는데 감정이 더 깊었다", user: "임나은", badge: "done", likes: 71 },
      { title: "오딜이 경계 앞에 선 장면까지 읽는 중", user: "박지후", badge: "reading", likes: 39 },
      { title: "결말의 선택, 저는 반대예요", user: "강하늘", badge: "done", spoiler: true, likes: 33 }
    ],
    related: [11, 7, 4, 8, 6]
  },
  {
    id: 6,
    title: "인간 실격",
    author: "다자이 오사무",
    publisher: "민음사",
    origin: "일본 소설",
    cover: "assets/bestsellers/img6.jpeg",
    change: { type: "down", value: 2 },
    rating: 8.9,
    raters: 4120,
    saved: 18340,
    readTime: "약 3시간",
    level: "보통",
    desc: "사람을 두려워해 익살로 자신을 감추며 살아온 남자 요조의 수기. 인간 사회에 끝내 섞이지 못한 한 사람의 고백을 담은 다자이 오사무의 대표작.",
    authorBio: "1909년 일본 아오모리현에서 태어났다. 『사양』, 『달려라 메로스』 등을 남겼고 1948년 세상을 떠났다.",
    points: [
      "요조가 남긴 세 편의 수기를 읽는 형식이에요.",
      "분량이 짧아 처음 읽는 일본 고전으로 많이 골라요.",
      "어두운 내용이라, 마음이 지친 날에는 천천히 읽기를 권해요."
    ],
    keywords: ["#고독", "#가면", "#수치심", "#고백", "#고전"],
    mood: { dark: 92, lyric: 55, tension: 48 },
    libraries: [
      { name: "남산도서관", area: "서울 용산구", status: "ok", note: "5권 소장" },
      { name: "국회도서관", area: "서울 영등포구", status: "ok", note: "3권 소장" },
      { name: "정독도서관", area: "서울 종로구", status: "ok", note: "4권 소장" }
    ],
    threadCount: 33,
    threads: [
      { title: "스무 살에 읽을 때와 지금이 다르다", user: "정우진", badge: "done", likes: 176 },
      { title: "익살이라는 가면에 대하여", user: "최민희", badge: "done", likes: 133 },
      { title: "번역본마다 느낌이 달라서 비교해 봤다", user: "박현우", badge: "done", likes: 87 },
      { title: "첫 수기만 읽었는데 벌써 무겁다", user: "윤채원", badge: "reading", likes: 41 }
    ],
    related: [7, 10, 2, 12, 5]
  },
  {
    id: 7,
    title: "노르웨이의 숲",
    author: "무라카미 하루키",
    publisher: "민음사",
    origin: "일본 소설",
    cover: "assets/bestsellers/img7.jpeg",
    change: { type: "same" },
    rating: 8.8,
    raters: 3655,
    saved: 16210,
    readTime: "약 9시간",
    level: "쉬움",
    desc: "서른일곱 살의 와타나베는 비행기에서 비틀스의 「노르웨이의 숲」을 듣고 대학 시절을 떠올린다. 죽은 친구의 연인 나오코와 생기 넘치는 미도리 사이에서 흔들리던 청춘의 상실을 그린 소설.",
    authorBio: "1949년 일본 교토에서 태어났다. 1979년 『바람의 노래를 들어라』로 군조 신인문학상을 받으며 데뷔했다.",
    points: [
      "하루키 소설 중 판타지 요소가 거의 없는 사실적인 작품이에요.",
      "1960년대 말 도쿄의 대학가 분위기가 생생하게 그려져요.",
      "음악과 책 이야기가 자주 나와서 함께 찾아 듣는 독자가 많아요."
    ],
    keywords: ["#청춘", "#상실", "#사랑", "#음악", "#도쿄"],
    mood: { dark: 66, lyric: 88, tension: 38 },
    libraries: [
      { name: "마포중앙도서관", area: "서울 마포구", status: "ok", note: "3권 소장" },
      { name: "강남도서관", area: "서울 강남구", status: "wait", note: "10월 23일 반납 예정" },
      { name: "서울도서관", area: "서울 중구", status: "ok", note: "2권 소장" }
    ],
    threadCount: 29,
    threads: [
      { title: "비 오는 날마다 꺼내 읽는 책", user: "한서연", badge: "done", likes: 158 },
      { title: "나오코와 미도리, 두 사람이 상징하는 것", user: "서도윤", badge: "done", likes: 112 },
      { title: "책에 나온 노래로 플레이리스트를 만들었다", user: "임나은", badge: "done", likes: 95 },
      { title: "절반쯤 읽었는데 미도리가 너무 좋다", user: "오지훈", badge: "reading", likes: 37 }
    ],
    related: [6, 10, 5, 11, 4]
  },
  {
    id: 8,
    title: "정원에 대하여",
    author: "백온유",
    publisher: "북다",
    origin: "한국 소설",
    cover: "assets/bestsellers/img8.jpeg",
    change: { type: "up", value: 5 },
    rating: 9.2,
    raters: 812,
    saved: 5430,
    readTime: "약 2시간",
    level: "쉬움",
    desc: "관계의 가장자리에서 서로를 애틋하게 바라보던 두 십 대가 조심스럽게 가꾸어 가는 마음의 정원. 한국 작가 12인의 로맨스 단편 시리즈 ‘달달북다’의 여덟 번째 책.",
    authorBio: "장편소설 『유원』으로 창비청소년문학상을 받았고, 단편 「반의반의 반」으로 2025년 젊은작가상 대상을 받았다.",
    points: [
      "짧은 단편이라 한자리에서 다 읽을 수 있어요.",
      "소설 뒤에 작가의 작업 일기가 함께 실려 있어요.",
      "말보다 작은 행동으로 마음을 전하는 장면이 많아요."
    ],
    keywords: ["#첫사랑", "#십대", "#정원", "#다정함", "#단편"],
    mood: { dark: 28, lyric: 86, tension: 30 },
    libraries: [
      { name: "서울도서관", area: "서울 중구", status: "ok", note: "2권 소장" },
      { name: "마포중앙도서관", area: "서울 마포구", status: "ok", note: "1권 소장" },
      { name: "정독도서관", area: "서울 종로구", status: "wait", note: "10월 25일 반납 예정" }
    ],
    threadCount: 7,
    threads: [
      { title: "출근길 지하철에서 다 읽었다", user: "강하늘", badge: "done", likes: 64 },
      { title: "작업 일기가 소설만큼 좋았다", user: "김소민", badge: "done", likes: 52 },
      { title: "달달북다 시리즈 같이 모아요", user: "이윤서", badge: "done", likes: 41 },
      { title: "정원 장면이 머릿속에 그려진다", user: "윤채원", badge: "reading", likes: 22 }
    ],
    related: [4, 11, 3, 12, 1]
  },
  {
    id: 9,
    title: "네 칼이 센가, 내 칼이 센가",
    author: "김삼웅",
    publisher: "달빛서가",
    origin: "한국 소설",
    cover: "assets/bestsellers/img9.jpeg",
    change: { type: "new" },
    rating: 8.9,
    raters: 534,
    saved: 3270,
    readTime: "약 6시간",
    level: "보통",
    desc: "망명지 중국에서 가족도 돌보지 못한 채 독립을 위해 싸운 단재 신채호의 삶을 소설로 다시 그린다. 아내 박자혜와 벗 홍명희 등 곁에 있던 사람들의 시선으로 단재를 비춘다.",
    authorBio: "독립기념관장을 지냈다. 독립운동가와 현대사 인물의 평전을 꾸준히 써 왔다.",
    points: [
      "역사 속 인물을 소설로 풀어내 연표보다 사람이 먼저 보여요.",
      "망명, 언론 활동, 체포까지 단재의 생애를 차례로 따라가요.",
      "주변 인물들의 시선이 번갈아 나와 단재를 입체적으로 보여 줘요."
    ],
    keywords: ["#신채호", "#독립운동", "#역사", "#망명", "#평전"],
    mood: { dark: 64, lyric: 52, tension: 66 },
    libraries: [
      { name: "국회도서관", area: "서울 영등포구", status: "ok", note: "2권 소장" },
      { name: "남산도서관", area: "서울 용산구", status: "ok", note: "1권 소장" },
      { name: "국립중앙도서관", area: "서울 서초구", status: "wait", note: "10월 30일 반납 예정" }
    ],
    threadCount: 5,
    threads: [
      { title: "교과서 속 신채호가 사람으로 보이기 시작했다", user: "박현우", badge: "done", likes: 58 },
      { title: "박자혜의 시선이 가장 아팠다", user: "최민희", badge: "done", likes: 44 },
      { title: "제목의 의미를 알고 나니 다르게 읽힌다", user: "정우진", badge: "reading", likes: 27 },
      { title: "역사 소설 입문으로 추천해요", user: "서도윤", badge: "done", likes: 19 }
    ],
    related: [1, 12, 3, 2, 4]
  },
  {
    id: 10,
    title: "새벽의 사원",
    author: "미시마 유키오",
    publisher: "민음사",
    origin: "일본 소설",
    cover: "assets/bestsellers/img10.jpeg",
    change: { type: "down", value: 3 },
    rating: 8.6,
    raters: 672,
    saved: 4180,
    readTime: "약 10시간",
    level: "어려움",
    desc: "『풍요의 바다』 4부작의 세 번째 이야기. 중년의 변호사 혼다 시게쿠니는 태국에서 어린 공주를 만나고, 그녀가 세상을 떠난 친구의 환생이라고 믿게 된다.",
    authorBio: "1925년 도쿄에서 태어났다. 『금각사』 등을 남겼고, 『풍요의 바다』 4부작이 그의 마지막 작품이다.",
    points: [
      "앞의 두 권 『봄눈』, 『달리는 말』을 먼저 읽으면 훨씬 깊게 읽혀요.",
      "방콕과 인도를 오가는 이국적인 배경이 펼쳐져요.",
      "환생과 불교 사상에 대한 긴 사유가 담겨 있어 천천히 읽기를 권해요."
    ],
    keywords: ["#환생", "#윤회", "#태국", "#탐미", "#4부작"],
    mood: { dark: 74, lyric: 80, tension: 45 },
    libraries: [
      { name: "정독도서관", area: "서울 종로구", status: "ok", note: "2권 소장" },
      { name: "국립중앙도서관", area: "서울 서초구", status: "ok", note: "3권 소장" },
      { name: "강남도서관", area: "서울 강남구", status: "ok", note: "1권 소장" }
    ],
    threadCount: 6,
    threads: [
      { title: "4부작을 차례로 읽는 중인 사람 모여요", user: "오지훈", badge: "reading", likes: 47 },
      { title: "혼다라는 관찰자의 시선에 대하여", user: "임나은", badge: "done", likes: 38 },
      { title: "3권은 분위기가 확 달라진다", user: "한서연", badge: "done", likes: 29 },
      { title: "공주의 정체가 드러나는 장면", user: "강하늘", badge: "done", spoiler: true, likes: 21 }
    ],
    related: [6, 7, 2, 9, 5]
  },
  {
    id: 11,
    title: "위싱 머신",
    author: "소피 쿠슨스",
    publisher: "모모",
    origin: "영미 소설",
    cover: "assets/bestsellers/img11.jpeg",
    change: { type: "up", value: 1 },
    rating: 8.7,
    raters: 1120,
    saved: 7040,
    readTime: "약 7시간",
    level: "쉬움",
    desc: "모든 게 답답하기만 한 스물여섯 살 루시는 우연히 만난 소원 기계에 인생의 좋은 시절로 건너뛰게 해 달라고 빈다. 눈을 떠 보니 마흔두 살, 원하던 것은 다 있지만 지나온 16년의 기억은 없다.",
    authorBio: "영국의 로맨틱 코미디 작가. 『위싱 머신』의 원제는 『The Good Part』다.",
    points: [
      "유쾌한 설정 속에 '지금'의 소중함이라는 메시지가 담겨 있어요.",
      "로맨틱 코미디라 무거운 책 사이에 쉬어 가며 읽기 좋아요.",
      "이십 대 중반 독자의 공감 쓰레드가 특히 많아요."
    ],
    keywords: ["#소원", "#시간여행", "#로맨틱코미디", "#성장", "#현재"],
    mood: { dark: 18, lyric: 62, tension: 44 },
    libraries: [
      { name: "강남도서관", area: "서울 강남구", status: "wait", note: "10월 26일 반납 예정" },
      { name: "마포중앙도서관", area: "서울 마포구", status: "ok", note: "2권 소장" },
      { name: "서울도서관", area: "서울 중구", status: "ok", note: "1권 소장" }
    ],
    threadCount: 14,
    threads: [
      { title: "스물여섯의 나에게 읽혀 주고 싶은 책", user: "윤채원", badge: "done", likes: 119 },
      { title: "건너뛴 16년을 되찾는 과정이 좋았다", user: "이윤서", badge: "done", likes: 84 },
      { title: "영화로 나오면 좋겠다", user: "김소민", badge: "reading", likes: 52 },
      { title: "마지막 소원은 무엇이었을까", user: "박지후", badge: "done", spoiler: true, likes: 36 }
    ],
    related: [5, 8, 4, 7, 12]
  },
  {
    id: 12,
    title: "모순",
    author: "양귀자",
    publisher: "쓰다",
    origin: "한국 소설",
    cover: "assets/bestsellers/img12.jpeg",
    change: { type: "down", value: 1 },
    rating: 9.3,
    raters: 2980,
    saved: 14650,
    readTime: "약 5시간",
    level: "쉬움",
    desc: "스물다섯 살 안진진은 일란성 쌍둥이인 엄마와 이모의 전혀 다른 삶을 지켜보며 자랐다. 서로 다른 두 남자 사이에서, 삶의 모순을 받아들이며 자신의 선택을 찾아가는 이야기.",
    authorBio: "1978년 『문학사상』으로 등단했다. 연작소설 『원미동 사람들』 등으로 널리 사랑받았다.",
    points: [
      "1998년에 처음 나온 소설이지만 지금 읽어도 낯설지 않아요.",
      "엄마와 이모, 두 남자처럼 대비되는 인물 구도가 선명해요.",
      "밑줄 긋고 싶은 문장이 많다는 쓰레드가 많아요."
    ],
    keywords: ["#선택", "#가족", "#사랑", "#행복", "#모순"],
    mood: { dark: 48, lyric: 76, tension: 40 },
    libraries: [
      { name: "남산도서관", area: "서울 용산구", status: "ok", note: "3권 소장" },
      { name: "정독도서관", area: "서울 종로구", status: "wait", note: "10월 28일 반납 예정" },
      { name: "국회도서관", area: "서울 영등포구", status: "ok", note: "2권 소장" }
    ],
    threadCount: 36,
    threads: [
      { title: "진진의 선택을 이해하게 되기까지", user: "한서연", badge: "done", likes: 201 },
      { title: "엄마와 이모, 누구의 삶이 행복했을까", user: "최민희", badge: "done", likes: 149 },
      { title: "필사하면서 읽고 있어요", user: "임나은", badge: "reading", likes: 88 },
      { title: "결말에서 제목의 뜻을 알게 된다", user: "오지훈", badge: "done", spoiler: true, likes: 63 }
    ],
    related: [2, 1, 3, 8, 6]
  }
];
