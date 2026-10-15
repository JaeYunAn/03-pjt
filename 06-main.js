/* =========================================================
   ThRead 메인 페이지 스크립트
   1) 베스트셀러 Carousel: 12권을 4권씩 3장 (명세 F303), 몇 번째 장인지 표시
   2) 도서 상세 화면: 같은 페이지 안에서 #book-번호 주소로 열고 닫기
   3) 담기 버튼, 준비 중인 기능 안내, 토스트
   데이터는 books.js 의 BOOKS
   ========================================================= */
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const byId = (id) => BOOKS.find((b) => b.id === id);
  const fmt = (n) => n.toLocaleString("ko-KR");

  /* ---------------------------------------------------------
     공통 조각
     --------------------------------------------------------- */
  function rankChangeHTML(change) {
    if (change.type === "up")
      return `<span class="rank-change up"><span class="visually-hidden">순위 상승 </span>▲ ${change.value}</span>`;
    if (change.type === "down")
      return `<span class="rank-change down"><span class="visually-hidden">순위 하락 </span>▼ ${change.value}</span>`;
    if (change.type === "new")
      return `<span class="rank-change new"><span class="visually-hidden">새로 진입 </span>NEW</span>`;
    return `<span class="rank-change"><span class="visually-hidden">순위 </span>유지</span>`;
  }

  function bestsellerItemHTML(book) {
    return `
      <li class="book">
        <a class="book-link" href="#book-${book.id}">
          <span class="book-cover"><img src="${book.cover}" alt="" width="150" height="220" /></span>
          <span class="book-meta">
            <span class="book-rank"><span class="visually-hidden">${book.id}위 </span><span aria-hidden="true">${book.id}</span></span>
            <span class="book-title">${book.title}</span>
            <span class="book-author">${book.author}</span>
            ${rankChangeHTML(book.change)}
            <span class="book-rating"><i class="bi bi-star-fill" aria-hidden="true"></i>${book.rating.toFixed(1)}</span>
          </span>
        </a>
      </li>`;
  }

  /* ---------------------------------------------------------
     1) 베스트셀러 Carousel
     - 명세 F303: 12권을 4권씩 묶어 3장
     - 한 줄 모양(4권 / 2 x 2 / 넓은 화면의 펼친 정보)은 CSS container query가 결정
     --------------------------------------------------------- */
  const PER_SLIDE = 4;
  const carouselEl = document.getElementById("bestsellerCarousel");
  const innerEl = carouselEl ? carouselEl.querySelector(".carousel-inner") : null;
  const pauseBtn = document.getElementById("bestsellerPause");
  const countEl = document.getElementById("bestsellerCount");
  const slideTotal = Math.ceil(BOOKS.length / PER_SLIDE);
  let autoplayOn = !reduceMotion;

  function startCarousel() {
    bootstrap.Carousel.getInstance(carouselEl)?.dispose();
    const c = new bootstrap.Carousel(
      carouselEl,
      autoplayOn ? { interval: 4000, ride: "carousel", pause: "hover" } : { interval: false, ride: false }
    );
    if (autoplayOn) c.cycle();
  }

  function paintCount(index) {
    if (countEl) countEl.innerHTML = `<b>${index + 1}</b> / ${slideTotal}`;
  }

  function renderBestsellers() {
    let html = "";
    for (let i = 0; i < BOOKS.length; i += PER_SLIDE) {
      const group = BOOKS.slice(i, i + PER_SLIDE);
      html += `
        <div class="carousel-item${i === 0 ? " active" : ""}">
          <ol class="book-row" start="${i + 1}">${group.map(bestsellerItemHTML).join("")}</ol>
        </div>`;
    }
    innerEl.innerHTML = html;
    paintCount(0);
    startCarousel();
  }

  if (carouselEl && innerEl) {
    renderBestsellers();
    carouselEl.addEventListener("slid.bs.carousel", (e) => paintCount(e.to));
  }

  if (pauseBtn) {
    const paintPause = () => {
      pauseBtn.setAttribute("aria-pressed", String(!autoplayOn));
      pauseBtn.querySelector("i").className = autoplayOn ? "bi bi-pause-fill" : "bi bi-play-fill";
      pauseBtn.querySelector("span").textContent = autoplayOn ? "자동 넘김 멈추기" : "자동 넘김 다시 켜기";
    };
    paintPause();
    pauseBtn.addEventListener("click", () => {
      autoplayOn = !autoplayOn;
      startCarousel();
      paintPause();
    });
  }

  /* ---------------------------------------------------------
     2) 도서 상세 화면 (같은 페이지 안)
     - 책을 누르면 주소가 #book-번호 로 바뀌고 상세 화면이 열림
     - 브라우저 뒤로 가기로 메인의 원래 위치로 돌아옴
     --------------------------------------------------------- */
  const homeView = document.getElementById("home-view");
  const detailView = document.getElementById("detail-view");
  const shelf = new Set(); // 담은 책 (새로고침 전까지 유지)
  history.scrollRestoration = "manual";
  // 화면을 바꿀 때는 부드러운 스크롤 없이 바로 이동
  const jump = (top) => window.scrollTo({ top, left: 0, behavior: "instant" });

  function statsHTML(book) {
    return `
      <dl class="detail-stats">
        <div><dt>평점</dt><dd><i class="bi bi-star-fill" aria-hidden="true"></i> ${book.rating.toFixed(1)} <small>(${fmt(book.raters)}명)</small></dd></div>
        <div><dt>담은 사람</dt><dd>${fmt(book.saved + (shelf.has(book.id) ? 1 : 0))}</dd></div>
        <div><dt>예상 읽기 시간</dt><dd>${book.readTime}</dd></div>
      </dl>`;
  }

  const mapSrcFor = (name) => `https://maps.google.com/maps?q=${encodeURIComponent(name)}&z=15&output=embed`;

  // 도서관을 누르면 지도가 그 도서관으로 이동
  function libraryHTML(lib, i) {
    const ok = lib.status === "ok";
    return `
      <li>
        <button type="button" class="lib-item${i === 0 ? " is-current" : ""}" data-lib="${lib.name}" aria-pressed="${i === 0}">
          <span class="lib-text">
            <span class="lib-name">${lib.name}</span>
            <span class="lib-meta">${lib.area} | ${lib.note}</span>
          </span>
          <span class="lib-status ${ok ? "is-ok" : "is-wait"}">${ok ? "대출 가능" : "대출 중"}</span>
        </button>
      </li>`;
  }

  function threadRowHTML(t) {
    const badge =
      t.badge === "done"
        ? `<span class="badge-read is-done">완독</span>`
        : `<span class="badge-read">읽는 중</span>`;
    const spoiler = t.spoiler ? ` <span class="badge-read is-spoiler">스포일러</span>` : "";
    return `
      <li>
        <a class="thread-row" href="#">
          <span class="thread-row-main">
            <span class="thread-row-title">${t.title}</span>
            <span class="thread-row-meta">${t.user} ${badge}${spoiler}</span>
          </span>
          <span class="thread-row-like"><i class="bi bi-heart-fill" aria-hidden="true"></i><span class="visually-hidden">좋아요</span> ${t.likes}</span>
        </a>
      </li>`;
  }

  function moodHTML(label, value) {
    return `
      <li>
        <span class="mood-label">${label}</span>
        <span class="mood-bar" style="--v: ${value}%"><span></span></span>
        <span class="mood-value">${value}</span>
      </li>`;
  }

  function relatedHTML(id) {
    const b = byId(id);
    return `
      <li>
        <a class="book-link" href="#book-${b.id}">
          <span class="book-cover"><img src="${b.cover}" alt="" loading="lazy" decoding="async" /></span>
          <span class="related-title">${b.title}</span>
          <span class="related-author">${b.author}</span>
        </a>
      </li>`;
  }

  function shelfButtonHTML(book) {
    const saved = shelf.has(book.id);
    return `
      <button type="button" class="btn btn-thread btn-lg btn-shelf" data-book="${book.id}" aria-pressed="${saved}">
        <i class="bi ${saved ? "bi-archive-fill" : "bi-archive"}" aria-hidden="true"></i>
        <span>${saved ? "담았어요" : "담기"}</span>
      </button>`;
  }

  function renderDetail(book) {
    const lib0 = book.libraries[0];
    const mapSrc = mapSrcFor(lib0.name);
    return `
      <!-- F311 Hero: 화면 전체를 덮는 표지 배경 -->
      <header class="detail-hero">
        <div class="detail-hero-bg" style="background-image: url('${book.cover}')" aria-hidden="true"></div>
        <div class="detail-hero-overlay" aria-hidden="true"></div>

        <div class="detail-inner">
          <a class="detail-back" href="#bestseller"><i class="bi bi-chevron-left" aria-hidden="true"></i> 베스트셀러로 돌아가기</a>
          <div class="row gx-5 gy-5 align-items-center">
            <div class="col-lg-6 detail-intro">
              <div class="detail-head">
                <span class="book-cover detail-cover"><img src="${book.cover}" alt="${book.title} 표지" /></span>
                <div>
                  <div class="detail-chips">
                    <span class="chip chip-genre">${book.origin}</span>
                    <span class="chip">베스트셀러 ${book.id}위</span>
                  </div>
                  <h1 class="detail-title" tabindex="-1">${book.title}</h1>
                  <p class="detail-byline">${book.author} 지음 | ${book.publisher}</p>
                </div>
              </div>

              ${statsHTML(book)}

              <div class="detail-actions">
                ${shelfButtonHTML(book)}
                <button type="button" class="detail-jump d-lg-none" data-jump="detail-tabs">대여 정보와 쓰레드 보기</button>
                ${book.award ? `<p class="detail-award"><i class="bi bi-award" aria-hidden="true"></i> ${book.award}</p>` : ""}
              </div>

              <p class="detail-desc" id="detail-desc">${book.desc}</p>
              <button type="button" class="detail-more" aria-expanded="false" aria-controls="detail-desc">소개 더 보기</button>

              <div class="author-card">
                <span class="author-avatar" aria-hidden="true"><i class="bi bi-person"></i></span>
                <div>
                  <p class="author-name">${book.author}</p>
                  <p class="author-bio">${book.authorBio}</p>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="detail-tabs-card" id="detail-tabs">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="tab-library" data-bs-toggle="tab" data-bs-target="#pane-library" type="button" role="tab" aria-controls="pane-library" aria-selected="true">대여 가능 도서관</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tab-thread" data-bs-toggle="tab" data-bs-target="#pane-thread" type="button" role="tab" aria-controls="pane-thread" aria-selected="false">쓰레드 <span class="tab-count">${book.threadCount}</span></button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="pane-library" role="tabpanel" aria-labelledby="tab-library" tabindex="0">
                    <div class="map-frame" data-loading="지도를 불러오는 중이에요">
                      <iframe src="${mapSrc}" title="${lib0.name} 위치 지도" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <p class="lib-hint">도서관을 누르면 지도에서 위치를 보여 드려요.</p>
                    <ul class="library-list">${book.libraries.map(libraryHTML).join("")}</ul>
                  </div>
                  <div class="tab-pane fade" id="pane-thread" role="tabpanel" aria-labelledby="tab-thread" tabindex="0">
                    <ul class="thread-list">${book.threads.map(threadRowHTML).join("")}</ul>
                    <div class="thread-list-foot">
                      <nav aria-label="쓰레드 페이지">
                        <ul class="pagination thread-pagination">
                          <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                        </ul>
                      </nav>
                      <a class="btn btn-thread" href="#"><i class="bi bi-pencil-square" aria-hidden="true"></i> 쓰레드 작성</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="page-section" aria-labelledby="ai-read-title">
        <div class="section-inner">
          <header class="section-head">
            <h2 class="section-title" id="ai-read-title">AI가 읽은 ${book.title}</h2>
            <p class="section-desc">줄거리를 몰라도 어떤 책인지 미리 가늠할 수 있게 정리했어요</p>
          </header>
          <div class="row gx-5 gy-5">
            <div class="col-lg-7">
              <h3 class="sub-title">읽기 전에 눈여겨볼 점</h3>
              <ul class="point-list">${book.points.map((p) => `<li>${p}</li>`).join("")}</ul>
              <h3 class="sub-title">AI가 뽑은 키워드</h3>
              <ul class="keyword-list">${book.keywords.map((k) => `<li>${k}</li>`).join("")}</ul>
            </div>
            <div class="col-lg-5">
              <div class="read-info">
                <h3 class="sub-title">읽기 정보</h3>
                <dl class="read-facts">
                  <div><dt>예상 읽기 시간</dt><dd>${book.readTime}</dd></div>
                  <div><dt>난이도</dt><dd>${book.level}</dd></div>
                </dl>
                <p class="meter-head">책의 분위기</p>
                <ul class="mood-list">
                  ${moodHTML("어두움", book.mood.dark)}
                  ${moodHTML("서정성", book.mood.lyric)}
                  ${moodHTML("긴장감", book.mood.tension)}
                </ul>
                <p class="read-note">읽기 시간, 난이도, 분위기는 쓰레드와 독서 기록을 바탕으로 AI가 추정한 값이에요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section related" aria-labelledby="related-title">
        <div class="section-inner">
          <header class="section-head">
            <h2 class="section-title" id="related-title">이 책을 담은 사람들이 함께 담은 책</h2>
            <p class="section-desc">『${book.title}』을 서재에 담은 독자들이 많이 고른 책이에요</p>
          </header>
          <ul class="related-row">${book.related.map(relatedHTML).join("")}</ul>
        </div>
      </section>`;
  }

  const homeTab = document.querySelector('.tabbar-item[data-tab="home"]');
  function setHomeTab(active) {
    if (!homeTab) return;
    homeTab.classList.toggle("is-active", active);
    if (active) homeTab.setAttribute("aria-current", "page");
    else homeTab.removeAttribute("aria-current");
    homeTab.querySelector("i").className = active ? "bi bi-house-door-fill" : "bi bi-house-door";
  }

  function showDetail(book) {
    detailView.innerHTML = renderDetail(book);
    homeView.hidden = true;
    detailView.hidden = false;
    setHomeTab(false);
    document.title = `${book.title} - ThRead`;
    jump(0);
    detailView.querySelector(".detail-title")?.focus({ preventScroll: true });
  }

  function showHome() {
    const wasHidden = homeView.hidden;
    detailView.hidden = true;
    homeView.hidden = false;
    detailView.innerHTML = "";
    document.title = "ThRead - 메인";
    setHomeTab(true);
    if (wasHidden) {
      document.documentElement.classList.add("intro-seen"); // 붉은 실 애니메이션은 처음 한 번만
    }
    const saved = history.state && history.state.scroll;
    if (typeof saved === "number") {
      jump(saved); // 뒤로 가기: 책을 눌렀던 위치로
      return;
    }
    let target = null;
    try {
      target = location.hash.length > 1 ? document.querySelector(location.hash) : null;
    } catch (e) {
      target = null;
    }
    if (target) target.scrollIntoView({ behavior: "instant" });
    else if (wasHidden) jump(0);
  }

  // depth: 메인에서 상세 화면을 몇 번 거쳐 왔는지 (관련 도서를 눌러 이동하면 늘어남)
  let lastDepth = 0;

  function route(oldURL) {
    const m = location.hash.match(/^#book-(\d+)$/);
    const book = m ? byId(Number(m[1])) : null;
    if (!book) {
      lastDepth = 0;
      showHome();
      return;
    }
    let depth;
    if (history.state && typeof history.state.depth === "number") {
      depth = history.state.depth; // 뒤로/앞으로 가기로 다시 온 기록
    } else {
      const oldWasBook = oldURL ? /#book-\d+$/.test(oldURL) : false;
      depth = oldURL === undefined ? 0 : oldWasBook ? lastDepth + 1 : 1; // 주소로 바로 열면 0
      history.replaceState({ ...(history.state || {}), depth }, "");
    }
    lastDepth = depth;
    showDetail(book);
  }

  // 책을 누르기 직전, 메인의 스크롤 위치를 현재 기록에 저장
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#book-"]');
    if (link && !homeView.hidden) {
      history.replaceState({ ...(history.state || {}), scroll: window.scrollY }, "");
    }
  });

  // "베스트셀러로 돌아가기": 메인에서 왔다면 그만큼 뒤로 가서 원래 스크롤 위치 복원
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".detail-back")) return;
    const depth = history.state && history.state.depth;
    if (depth > 0) {
      e.preventDefault();
      history.go(-depth);
    }
  });

  window.addEventListener("hashchange", (e) => route(e.oldURL));
  route();

  /* ---------------------------------------------------------
     3) 담기 + 토스트
     --------------------------------------------------------- */
  const toastEl = document.getElementById("saveToast");
  const toastText = document.getElementById("saveToastText");
  const toast = toastEl ? bootstrap.Toast.getOrCreateInstance(toastEl) : null;
  const notify = (text) => {
    if (!toast) return;
    toastText.textContent = text;
    toast.show();
  };

  document.addEventListener("click", (e) => {
    // 아직 만들지 않은 기능(href="#")은 고장이 아니라 "준비 중"으로 안내
    const soon = e.target.closest('a[href="#"]');
    if (soon) {
      e.preventDefault();
      notify("아직 준비 중인 기능이에요");
      return;
    }
    // 상세 화면: 도서관을 누르면 지도 이동
    const lib = e.target.closest(".lib-item");
    if (lib) {
      const frame = detailView.querySelector(".map-frame iframe");
      if (frame) {
        frame.src = mapSrcFor(lib.dataset.lib);
        frame.title = `${lib.dataset.lib} 위치 지도`;
      }
      detailView.querySelectorAll(".lib-item").forEach((b) => {
        const on = b === lib;
        b.classList.toggle("is-current", on);
        b.setAttribute("aria-pressed", String(on));
      });
      return;
    }
    // 상세 화면(모바일): 대여 정보와 쓰레드로 바로 이동
    const jumpBtn = e.target.closest(".detail-jump");
    if (jumpBtn) {
      document.getElementById(jumpBtn.dataset.jump)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      return;
    }
    // 상세 화면(모바일): 소개 더 보기 / 접기
    const more = e.target.closest(".detail-more");
    if (more) {
      const open = more.getAttribute("aria-expanded") !== "true";
      more.setAttribute("aria-expanded", String(open));
      more.textContent = open ? "접기" : "소개 더 보기";
      detailView.querySelector(".detail-desc")?.classList.toggle("is-open", open);
      return;
    }
    // 쓰레드 카드 담기
    const save = e.target.closest(".btn-save");
    if (save) {
      const saved = save.getAttribute("aria-pressed") !== "true";
      save.setAttribute("aria-pressed", String(saved));
      save.setAttribute("aria-label", saved ? "담기 취소" : "이 쓰레드 담기");
      save.querySelector("i").className = saved ? "bi bi-bookmark-fill" : "bi bi-bookmark";
      notify(saved ? "마이 페이지에 담았어요" : "담기를 취소했어요");
      return;
    }
    // 도서 상세 담기
    const shelfBtn = e.target.closest(".btn-shelf");
    if (shelfBtn) {
      const id = Number(shelfBtn.dataset.book);
      const saved = !shelf.has(id);
      if (saved) shelf.add(id);
      else shelf.delete(id);
      shelfBtn.setAttribute("aria-pressed", String(saved));
      shelfBtn.querySelector("i").className = saved ? "bi bi-archive-fill" : "bi bi-archive";
      shelfBtn.querySelector("span").textContent = saved ? "담았어요" : "담기";
      const stats = detailView.querySelector(".detail-stats");
      if (stats) stats.outerHTML = statsHTML(byId(id));
      notify(saved ? "마이 페이지에 담았어요" : "담기를 취소했어요");
    }
  });
})();
