---
title: 웹 사이트 Light 및 Dark 모드 전환을 위한 토글 버튼 추가
date: 2024-03-21 18:00:00 +09:00
categories: [1. Web Development, GitHub Blog]
tags: [블로그, GitHub Page, Ruby, Jekyll, Chirpy, Kim-src, theme-toggle, toggle, data-mode, dark-theme, light-theme, dark-scheme, light-theme]
---

<!-- 2024-03-23 글 작성 시작; 2024-03-23 페이지 호출 완료 -->
<h2>사이드바 하단의 토글 버튼 추가 방법</h2>
> - Tool :  
<img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
<img alt="SASS" src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white" />
<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />

<br>

### 🔔 1. Introduction
### 📌 사이드바 하단의 아이콘
> - 필자의 깃허브 블로그의 사이드바 하단에는 아이콘이 있는 버튼 UI가 있습니다.
> - 이들의 기능은 웹 사이트 색상 스타일을 변경하거나 SNS 계정 프로필로 연결하는 것입니다.
> - SNS 연동 기능은 Chirpy 테마의 origin/contact.yml 코드 수정으로 간편하게 설정하였습니다.
> - 그런데 Light/Dark 색상 스타일 변경 기능이 있는 토글 버튼을 추가하는 것은 쉽지 않았습니다.
> - UI란 User Interface의 약자이며 사용자가 디지털 화면과 상호작용 할 수 있게 하는 것입니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/ff0ef3e1-ea78-4f90-9d36-f1d61f188c15" alt="figure">
    <figcaption>깃허브 블로그 사이드바 하단의 버튼 UI</figcaption>
</figure>

<br>

### 🔔 2-1. Methodology : sidebar.html
### 📌 토글 버튼
> - 토글 버튼이란 스위치 기능이 있는 버튼 UI를 의미합니다.
> - 토글 버튼을 클릭하면 해당 웹 사이트에 적용되던 기능이 변경됩니다.
> - 토글 버튼은 보통 웹 사이트의 색상 계열을 Light 또는 Dark로 변경하는 기능을 제공합니다.
> - 토글 버튼을 관리하기 위해서는 html, scss, js 파일의 내용을 이해해야 됩니다.

### 📌 토글 버튼 관련 파일 위치
> - 필자의 경우 깃허브 블로그는 Jekyll의 Chirpy 테마에 기반되어 있습니다.
> - 따라서 Chirpy 테마에서 제공받은 파일 및 코드 구성을 수정하였습니다.
> - 아래 문단부터는 토글 버튼 추가 및 기능 부여 과정을 차근차근 학습해보겠습니다.
> - 한편 토글 버튼 관련 파일명 및 파일의 위치는 아래와 같습니다.
>    - root/_includes/sidebar.html (기존 파일 수정)
>    - root/_includes/mode-toggle.html (기존 파일 참조)
>    - root/_javascript/theme-toggle.js (신규 파일 생성)
>    - root/_sass/addon/commons.scss (기존 파일 참조)

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/bd649be1-42f1-4a3b-bb1b-9dbadb338e0e" alt="figure">
    <figcaption>토글 버튼 관련 파일들의 복잡한 위치</figcaption>
</figure>

### 📌 토글 버튼 추가 방법
> - 토글 개발이 처음이라면 토글 버튼을 사이드바에 생성시키는 것이 먼저입니다.
> - 이를 위해서는 sidebar.html에 아래 코드를 추가하거나 아래 코드로 수정해야 됩니다.
> - 아래 코드를 추가해야 될 위치는 sidebar.html의 sidebar-bottom 클래스입니다.
> - Chirpy 테마에는 기존의 토글 관련 코드가 있으며 이를 아래와 같이 수정해주시면 됩니다.
> - 참고로 Chipry 테마의 html 파일의 코드는 Liquid 언어로 구성되어 있습니다.
> - 토글 버튼 관련된 모든 코드는 본 글 최하단에 공유하였습니다.

``` html
<aside aria-label="Sidebar" id="sidebar" class="d-flex flex-column align-items-end">
  <div class="sidebar-bottom d-flex flex-wrap  align-items-center w-100">
    {% unless site.theme_mode %}
      <button id="theme-toggle" type="button" class="mode-toggle btn" aria-label="Switch Mode">
        <!-- <i class="fas fa-moon"></i> -->
      </button>
      <span class="icon-border"></span>
    {% endunless %}

    <!-- for문 코드 내용 -->

</div>
  <!-- .sidebar-bottom -->
  <!-- theme-toggle.js 참조 -->
  <script src="/_javascript/theme-toggle.js"></script>
</aside>
<!-- #sidebar -->
```

### 📌 코드 설명 : Liquid > unless
> - 코드의 목적은 사용자에게 사이트의 테마를 직접 전환할 수 있는 UI를 제공하는 것입니다.
> - unless 태그는 조건이 거짓일 때만 태그 내부의 코드를 실행하는 제어 구문입니다.
> - 따라서 작성된 상기 코드는 site.theme_mode 값이 설정되어 있지 않을 때 실행됩니다.
> - 한편 Liquid의 unless 태그는 if문의 반대 개념으로 사용되고 있습니다.
> - unless 조건에 부합하면 button 및 span 태그의 코드를 화면에 렌더링합니다.
> - 참고로 '렌더링(rendering)'이란 디자인 외관을 표현한다는 의미입니다.

### 📌 코드 설명 : Liquid > unless > button
> - button 태그는 클릭 가능한 UI 버튼을 생성하는 기능을 부여합니다.
> - 버튼 내에는 아이콘과 같은 이미지 또는 텍스트 등이 포함될 수 있습니다.
> - button 태그에는 id, type 등을 부여할 수 있으며 class로 그룹화 할 수 있습니다.
> - 한편 상기 코드의 button 태그는 아이콘 클래스는 주석 처리 되어 있습니다.
> - 이는 이후 theme-toggle.js에서 아이콘 이미지를 부여하기 위함입니다.
> - 또한 이곳에 아이콘 코드가 있으면 추후 스타일 전환을 실행시켰을 때 부드럽게 되지 않습니다.
> - button 태그가 적용된 간단한 코드의 예시는 아래와 같습니다.

``` html
<button type="button">클릭하세요</button>
```

### 📌 코드 설명 : Liquid > unless > span
> - span 태그는 인라인 요소로써 줄바꿈 없이 코드를 그룹화 할 수 있는 기능입니다.
> - 보통 html 문서의 일부 단어 및 문장 등에 개별 스타일을 적용시키기 위해 사용됩니다.
> - 상기 코드의 span 태그는 버튼 아이콘들 사이(경계)마다 점 아이콘을 렌더링합니다.
> - 글 최하단 코드를 보시면 이 점 아이콘은 반복문 형태로 구성하기도 하였습니다.
> - 개인 취향에 따라 해당 span 태그는 삭제하셔도 괜찮습니다.

<br>

### 🔔 2-2. Methodology : theme.toggle.js
### 📌 토글 버튼 기능 부여 방법
> - 상기 코드를 입력하여 토글 버튼 아이콘이 사이드바 하단에 위치하셨다면 성공입니다.
> - 이제 html 문서의 역할만 하던 토글 버튼 아이콘에 js 코드를 추가하여 기능을 부여하겠습니다.
> - 필자의 경우 _javascript 폴더에 비어있는 theme.toggle.js 파일을 생성하였습니다.
> - 그리고 아래의 코드를 입력하였고 Light/Dark 테마 전환에 성공하였습니다.
> - 참고로 각 사이트 생성 툴에 따른 파일 구성 차이가 있으며 이는 ChatGPT도 안내하지 못합니다.
> - 따라서 js 파일 생성 후 <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95/">bundle 명령문</a>을 이용하여 웹 브라우저 호출 테스트를 하셔야 됩니다.

``` js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 저장된 테마가 없으면 시스템 환경에 따른 테마 적용
    let theme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // 페이지 로드 시 현재 테마에 맞게 data-mode 속성 설정
    document.documentElement.setAttribute('data-mode', theme);
    // 토글 버튼 아이콘을 현재 테마에 맞게 설정
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="far fa-sun"></i>';
    
    // 토글 아이콘에 클릭 이벤트 리스너 추가
    themeToggle.addEventListener('click', () => {
        // 현재 적용된 테마를 기반으로 전환할 테마 결정
        let currentTheme = document.documentElement.getAttribute('data-mode');
        let switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // data-mode 속성을 업데이트하여 테마 전환
        document.documentElement.setAttribute('data-mode', switchToTheme);
        // localStorage에 새 테마 저장
        localStorage.setItem('theme', switchToTheme);
        
        // 토글 아이콘 업데이트
        themeToggle.innerHTML = switchToTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fa-regular fa-sun"></i>';
    })
})
```

### 📌 코드 설명 : addEventListener() => {} 메서드
> - addEventListener는 '()' 안의 이벤트가 발견되면 '{}'의 함수를 실행시키는 기능을 부여합니다.
> - 상기 코드에는 addEventListener 메서드가 DOMContentLoaded, click과 함께 이용되었습니다.

### 📌 코드 설명 : addEventListener('DOMContentLoaded', () => {})
> - 이 코드는 웹 페이지 로딩이 완료되어 DOM이 구성되면 콜백 함수가 실행되게 합니다.
> - DOM은 Document Object Model의 약자로 HTML 문서 등을 메모리에 저장하는 기능을 수행합니다.
> - DOM은 웹 페이지를 구성하는 요소를 트리 구조로 나타내며 관련 코드가 UI를 제공하게끔 합니다.
> - 참고로 콜백 함수란 특정 작업이 완료된 후에 실행되는 함수입니다.

### 📌 코드 설명 : 'DOMContentLoaded'에 종속된 콜백 함수
> - 상기 코드에서는 DOM이 구성되면 토글 버튼을 선택하고 사용자의 테마를 확인합니다.
> - 사용자 개인의 테마가 없으면 시스템 설정에 따른 테마를 적용시킵니다.
> - 그리고 현재 테마에 맞는 data-mode 속성 및 토글 아이콘을 설정합니다.
> - 이때 data-mode 관련 코드는 commons.scss 최상단 html 태그에 아래와 같이 정의되어 있습니다.
> - 또한 data-mode는 mode-toggle.html 내부 코드와 연결됩니다.

``` scss
html {
  @media (prefers-color-scheme: light) {
    &:not([data-mode]),
    &[data-mode='light'] {
      @include light-scheme;
    }

    &[data-mode='dark'] {
      @include dark-scheme;
    }
  }

  @media (prefers-color-scheme: dark) {
    &:not([data-mode]),
    &[data-mode='dark'] {
      @include dark-scheme;
    }

    &[data-mode='light'] {
      @include light-scheme;
    }
  }

  font-size: 17px;
}
```

<figure>
  <img src="https://github.com/Kim-src/Images/assets/150884526/59369bf2-2a76-478a-a59c-eaa36e0f5bf4" alt="figure">
  <figcaption>웹 페이지 로딩 과정 (출처 : 가치관 제작소)</figcaption>
</figure>

### 📌 코드 설명 : addEventListener('click', () => {})
> - 이 코드는 클릭 행위가 발생되면 콜백 함수가 실행되게 하는 기능을 부여합니다.
> - 해당 콜백 함수는 현재 적용된 테마를 기반으로 전환할 테마를 결정합니다.
> - 이때 currentTheme은 현재 테마, switchToTheme은 전환할 테마를 의미합니다.
> - 전환 후 setAttribute로 속성을 업데이트하고 localStorage에 테마를 저장합니다.
> - 마지막으로 themeToggle로 토글 버튼의 아이콘을 업데이트 합니다.

### 📌 토글 아이콘
> - 토글 아이콘 코드는 <a href="https://fontawesome.com/">fontawesome</a>에서 무료로 제공됩니다.
> - 필자가 이용한 아이콘 태그는 태양 및 달 모양의 아이콘 이미지입니다.
> - 아래 링크의 HTML 태그를 필자가 공유한 코드 대신 입력하시고 테스트해보시면 됩니다.
> - <a href="https://fontawesome.com/icons/sun?f=classic&s=regular">태양 모양의 아이콘 이미지</a>
> - <a href="https://fontawesome.com/icons/moon?f=classic&s=solid">달 모양의 아이콘 이미지</a>

<figure>
  <img src="https://github.com/Kim-src/Images/assets/150884526/cebb0fa9-9c1b-42a4-a77c-095b5d7b4417" alt="figure">
  <figcaption>달 모양의 아이콘에 대한 HTML 태그</figcaption>
</figure>

<br>

### 🔔 3. Results
### 📌 스타일 적용 에러 이슈
> - 상기 내용을 잘 수행하셨다면 개별 사이트에 토글 버튼 생성 및 기능 부여가 잘 되었을 것입니다.
> - 그런데 토글 버튼 UI를 잘 생성하였어도 테마 전환이 부드럽지 않을 수 있습니다.
> - 예를들면 Light 모드에서 새로고침 할 시 잠시 Dark 모드로 전환될 수 있습니다.
> - 이는 스타일 적용 에러의 한 종류이며 <a href="https://kim-src.github.io/posts/%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-Light-%EB%B0%8F-Dark-%EB%AA%A8%EB%93%9C-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A0%81%EC%9A%A9-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">이 에러를 해결하는 방법</a>은 다음글에 잘 작성하였습니다.

<br>

### 🎁 4. 부록
> - <a href="https://kim-src.github.io/categories/github-blog/">나만의 깃허브 블로그 개발 기록</a>
> - <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95/">나만의 깃허브 블로그 만드는 방법</a>
> - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-Jekyll%EC%9D%98-Chirpy-%ED%85%8C%EB%A7%88-%EC%A0%81%EC%9A%A9%EC%8B%9C%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95/">나만의 깃허브 블로그 꾸미는 방법</a>
> - <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EA%B0%9C%EB%B0%9C-%ED%98%84%ED%99%A9/">나만의 Dark/Light 스타일 적용</a>
> - <a href="https://kim-src.github.io/posts/%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-Light-%EB%B0%8F-Dark-%EB%AA%A8%EB%93%9C-%EC%A0%84%ED%99%98%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%86%A0%EA%B8%80-%EB%B2%84%ED%8A%BC-%EC%B6%94%EA%B0%80/">나만의 깃허브 블로그에 Light/Dark 테마 전환 기능 부여</a>
> - <a href="https://kim-src.github.io/posts/%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-Light-%EB%B0%8F-Dark-%EB%AA%A8%EB%93%9C-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A0%81%EC%9A%A9-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">Light/Dark 스타일 적용 에러 해결 방법</a>
> - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-Commit-&-Push-%EC%9D%98%EB%AF%B8-%EB%B0%8F-Actions-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">깃허브 Commit & Push 의미 및 Actions 에러 해결 방법</a>
> - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0-%EA%B8%80-%EC%B6%9C%EB%A0%A5-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">깃허브 블로그 홈페이지 미리보기 글 출력 에러 해결 방법</a>

<br>

### 🔔 5. 전체 코드
### 📌 theme-toggle.js 전체 코드

``` js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 저장된 테마가 없으면 시스템 환경에 따른 테마 적용
    let theme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // 페이지 로드 시 현재 테마에 맞게 data-mode 속성 설정
    document.documentElement.setAttribute('data-mode', theme);
    // 토글 버튼 아이콘을 현재 테마에 맞게 설정
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="far fa-sun"></i>';
    
    // 토글 아이콘에 클릭 이벤트 리스너 추가
    themeToggle.addEventListener('click', () => {
        // 현재 적용된 테마를 기반으로 전환할 테마 결정
        let currentTheme = document.documentElement.getAttribute('data-mode');
        let switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // data-mode 속성을 업데이트하여 테마 전환
        document.documentElement.setAttribute('data-mode', switchToTheme);
        // localStorage에 새 테마 저장
        localStorage.setItem('theme', switchToTheme);
        
        // 토글 아이콘 업데이트
        themeToggle.innerHTML = switchToTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fa-regular fa-sun"></i>';
    })
})
```

<br>
<br>
<br>
