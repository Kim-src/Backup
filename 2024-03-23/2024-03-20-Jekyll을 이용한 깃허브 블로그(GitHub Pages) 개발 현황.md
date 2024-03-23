---
title: Jekyll을 이용한 깃허브 블로그(GitHub Pages) 개발 현황
date: 2024-03-20 18:00:00 +09:00
categories: [GitHub, GitHub Page]
tags: [블로그, GitHub Page, Ruby, Jekyll, Chirpy, Kim-src, theme-toggle, toggle, data-mode, dark-theme, light-theme, dark-scheme, light-theme]
---

<!-- 2024-03-20 글 작성 시작; 2024-03-20 페이지 호출 완료 -->
<h2>나만의 깃허브 블로그 개발 현황</h2>
> - <a href="https://kim-src.github.io">운영중인 깃허브 블로그 주소</a> : <a href="https://kim-src.github.io">https://kim-src.github.io</a>
> - Tool :  
<img alt="Markdown" src="https://img.shields.io/badge/-Markdown-000000?style=flat-square&logo=markdown&logoColor=white" />
<img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
<img alt="SASS" src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white" />
<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
<img alt="Git Bash" src="https://img.shields.io/badge/Git%20Bash-FFE000?style=flat&logo=git&logoColor=white" />

<br>

### 🔔 1. 깃허브 블로그 개발 현황
### 📌 깃허브 블로그 초기
> - 깃허브 블로그 개발을 위해 사이트 생성 툴인 Jekyll 기반의 Chirpy 테마를 사용하였습니다.
> - 해당 블로그 생성 방법은 <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95/">지난 글</a>에 소개해드렸습니다.
> - 아래 이미지는 Jekyll 사이트 생성 및 Chirpy 테마 직후의 깃허브 블로그 모습입니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/ca1e61e9-1c99-4d02-bcb1-8b2e56816ce8" class="img" alt="figure">
    <figcaption>Chirpy 테마가 적용된 웹 사이트</figcaption>
</figure>

### 📌 깃허브 블로그 현황
> - Chirpy 테마를 참조하여 현재 필자만의 웹 사이트를 구성하였습니다.
> - 블로그 개발은 주로 홈페이지 및 포스트 페이지 내용에 해당되는 것이었습니다.
> - 눈으로 보기 편한 배경 위에 뚜렷한 글자가 있도록 설정하였습니다.
> - 주로 html, scss, yml 파일을 수정하였으며 기능 추가를 위해 js 파일도 수정하였습니다.
> - 추후 light 테마 색상 변경을 위한 scss 파일 수정이 필요합니다.

### 📌 깃허브 블로그 주요 개발 내용
> - 색상 조합을 ChatGPT, GitHub, Velog를 참조하여 보는 눈이 편하도록 설정하였습니다.
> - 홈페이지 중앙의 글 미리보기에서 글 전체 내용이 아니라 부제목까지만 출력되도록 하였습니다.
> - 홈페이지 하단의 페이지 번호에 맞게 글 미리보기 내용이 출력되도록 설정하였습니다.
> - 사이드바 하단의 토글 버튼 및 SNS 아이콘 구성을 변경하였습니다.
> - 토글 버튼을 클릭하면 dark/light 테마가 전환되면서 아이콘 모양도 변경되도록 하였습니다.
> - 아래 이미지는 깃허브 블로그의 현재 dark/light 테마 모습입니다.

<div class="image-container">
    <figure>
        <img src="https://github.com/Kim-src/Images/assets/150884526/03a9c5d9-5f70-4699-ad8e-b70f9f715612" class="img" width="300px" alt="figure">
        <figcaption>깃허브 블로그의 dark 테마</figcaption>
    </figure>
    <figure>
        <img src="https://github.com/Kim-src/Images/assets/150884526/5a675a98-b158-4439-a5bf-a6e5208bda51" class="img" width="300px" alt="figure">
        <figcaption>깃허브 블로그의 light 테마</figcaption>
    </figure>
</div>

<br>

### 🔔 2. 깃허브 블로그 개발 후기
### 📌 깃허브 블로그와 대중 블로그의 차별성
> - 깃허브 블로그를 운영하고 발전시키기 위해서는 상당한 개발 지식이 필요하였습니다.
> - 대중적인 사이트에서 지원하는 UI 툴이 없고 원격 저장소와 연동시켜야 되기 때문입니다.
> - 또한 글을 배포하기 위해서는 깃허브 Acitions의 빌드 및 배포 과정을 이해할 필요가 있었습니다.
> - 개발에 어려운 부분이 있지만 나만의 사이트를 마음대로 운영하는 재미 요소가 있었습니다.
> - 사이트를 수정할 때마다 마주하는 수많은 어려움이나 에러를 해결했을 때의 희열도 좋았습니다.

### 📌 깃허브 블로그 운영과 프로그래밍의 관련성
> - 깃허브 블로그 운영 과정은 근래 일반 기업의 웹 개발 실무 모습이지 않을까 싶습니다.
> - 사이트 생성 툴인 Jekyll 기반의 테마를 이용하고 목적에 맞게 코드를 변경하기 때문입니다.
> - 예를들면 사이드바 하단에 위치한 토글 버튼을 추가하고 기능을 변경할 수 있습니다.
> - 이를 위해서는 테마에서 제공된 HTML, Sass, JavaScript 파일의 코드를 수정해야 됩니다.
> - 그래서 웹 개발 관련 지식을 자연스럽게 습득할 수 있다는 장점이 있습니다.
> - 참고로 ChatGPT의 도움을 받을 수는 있지만 GPT가 정답만을 말해주지 않습니다.
> - 로컬 저장소에 존재하는 파일, 코드 현황을 ChatGPT가 전부 파악하고 있지는 않기 때문입니다.

### 📌 일반 기업의 웹 사이트
> - 최근 인스타그램 등의 SNS 광고 사이트에 접속하면 비슷한 느낌의 페이지를 볼 수 있습니다.
> - 카페24 등에서 유료로 제공하는 웹 테마를 이용한 사이트들이 꽤 있기 때문입니다.
> - 그래서 일반(마케팅 등) 회사에서는 해당 테마를 구매하고 수정하는 것이 하나의 업무입니다.
> - 이는 Jekyll의 역할을 카페24가, Chirpy 테마의 역할을 개별 웹 테마가 한다고 볼 수 있습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/eee09eab-94f8-4dfa-878d-a14326e36215" class="img" alt="figure">
    <figcaption><a href="https://d.cafe24.com/sample?productCode=PTMD803573&frame=P">카페24에서 제공하는 유로 웹 테마 샘플 페이지</a></figcaption>
</figure>

<br>

### 🎁 3. 부록
> - <a href="https://kim-src.github.io/categories/github-page/">필자의 깃허브 블로그 개발 기록</a>
> - <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95/">나만의 깃허브 블로그 만드는 방법</a>

<br>
<br>
<br>
