export default function Home() {
  return (
    <>
      {/* 헤더 */}
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="logo">
            E7<span className="accent">Match</span>
          </a>
          <a href="#contact" className="header-cta">
            사전 등록
          </a>
        </div>
      </header>

      {/* 히어로 */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">2026년 7월 오픈 예정</span>
          <h1>
            외국인 전문인력 채용,
            <br />
            비자 걱정 없이 <span className="yellow">한 번에.</span>
          </h1>
          <p className="hero-sub">
            E7Match는 한국에서 일하려는 외국인 인재와 한국 고용기관을
            연결합니다. E-7 비자 자격 자동 검토부터 비자 신청 대행까지,
            채용의 시작과 끝을 함께합니다.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">오픈 알림 받기</button>
            <button className="btn-ghost">서비스 소개 보기</button>
          </div>
        </div>
      </section>

      {/* 문제 해결 */}
      <section className="section section-light">
        <div className="container">
          <div className="section-label">Why E7Match</div>
          <h2>채용도, 비자도, 따로 알아보느라 지치셨나요?</h2>
          <p className="section-sub">
            외국인 채용은 인재를 찾는 것보다 비자 가능 여부를 확인하는 데 더
            많은 시간이 듭니다. E7Match는 그 순서를 바꿨습니다.
          </p>
          <div className="cards">
            <div className="card">
              <div className="card-icon">✓</div>
              <h3>비자 자격 자동 검토</h3>
              <p>
                채용 전에 기관과 후보자의 E-7 비자 자격을 먼저 확인합니다.
                가능성 없는 매칭에 시간을 쓰지 않습니다.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>검증된 인재 매칭</h3>
              <p>
                자격 검토를 통과한 외국인 전문인력만 만나보세요. 헤드헌팅
                7년 경력의 노하우로 매칭 품질을 관리합니다.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>비자 신청 대행</h3>
              <p>
                매칭 후 비자 신청은 행정사가 직접 대행합니다. 채용 확정부터
                근무 시작까지 끊김 없이 연결됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 프로세스 */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2>네 단계면 충분합니다</h2>
          <p className="section-sub">
            회원가입부터 근무 시작까지, 복잡한 과정을 하나의 흐름으로
            만들었습니다.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-num">STEP 1</div>
              <h3>자격 체크리스트</h3>
              <p>5~10분 체크리스트로 비자 자격을 자동 진단합니다.</p>
            </div>
            <div className="step">
              <div className="step-num">STEP 2</div>
              <h3>매칭</h3>
              <p>자격이 확인된 상대만 추천됩니다. 헛수고가 없습니다.</p>
            </div>
            <div className="step">
              <div className="step-num">STEP 3</div>
              <h3>면접 제안</h3>
              <p>관심 있는 상대에게 면접을 제안하고 대화를 시작하세요.</p>
            </div>
            <div className="step">
              <div className="step-num">STEP 4</div>
              <h3>비자 신청</h3>
              <p>채용이 확정되면 행정사가 비자 신청을 대행합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 두 트랙 */}
      <section className="section section-light">
        <div className="container">
          <div className="section-label">Phase 1</div>
          <h2>의료관광 코디네이터부터 시작합니다</h2>
          <p className="section-sub">
            성형외과·피부과·의료관광 에이전시를 위한 두 가지 비자 트랙을
            동시에 지원합니다.
          </p>
          <div className="tracks">
            <div className="track">
              <span className="track-tag">E-7-2</span>
              <h3>의료 코디네이터</h3>
              <p>
                외국인환자 유치기관에 등록된 의료기관·유치업자를 위한
                트랙입니다. 보건의료 자격 또는 관련 교육 이수자를
                매칭합니다.
              </p>
            </div>
            <div className="track alt">
              <span className="track-tag">E-7-1</span>
              <h3>상품기획 전문가</h3>
              <p>
                신규 개원·소규모 클리닉도 가능한 트랙입니다. 국민고용 인원
                요건 없이 외국인 전문인력을 채용할 수 있는 길을
                안내합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 밴드 */}
      <section className="cta-band" id="contact">
        <div className="container">
          <h2>
            7월, <span className="yellow">e7match.ai</span>에서 만나요
          </h2>
          <p>오픈 알림을 신청하시면 가장 먼저 소식을 전해드립니다.</p>
          <button className="btn-primary">오픈 알림 받기</button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="logo">
            E7<span className="accent">Match</span>
          </span>
          <span>© 2026 E7Match · 솔찬 행정사사무소 × 솔찬HR</span>
        </div>
      </footer>
    </>
  );
}
