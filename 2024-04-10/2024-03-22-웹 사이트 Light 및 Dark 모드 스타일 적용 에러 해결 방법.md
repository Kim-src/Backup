---
title: 웹 사이트 Light 및 Dark 모드 스타일 적용 에러 해결 방법
date: 2024-03-22 18:00:00 +09:00
categories: [1. Web Development, GitHub Blog]
tags: [블로그, GitHub Page, Ruby, Jekyll, Chirpy, Kim-src, theme-toggle, toggle, data-mode, dark-theme, light-theme, dark-scheme, light-theme]
---

<!-- 2024-03-21 글 작성 시작; 2024-03-22 페이지 호출 완료 -->
<h2>Light/Dark 테마 호출 에러 해결 방법</h2>
> - Tool :  
<img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />

<br>

### 🔔 1. 에러 발생
### 📌 토글 버튼 업데이트에 따른 이슈 발생
> - 기존 깃허브 블로그에 Light/Dark 모드를 변경하는 토글 버튼을 추가하였습니다.
> - 토글 버튼 클릭 시 버튼의 아이콘이 바뀌면서 테마에 따른 블로그 스타일도 변경하였습니다.
> - 그런데 Light 모드에서 새로고침 시 잠시 Dark 모드로 전환되는 에러를 발견하였습니다.
> - 그래서 새로고침을 하면 밝은색 위주의 색상이 깜빡 거리는듯한 점멸 현상이 발생되었습니다.
> - 한편 <a href="https://kim-src.github.io/posts/%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-Light-%EB%B0%8F-Dark-%EB%AA%A8%EB%93%9C-%EC%A0%84%ED%99%98%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%86%A0%EA%B8%80-%EB%B2%84%ED%8A%BC-%EC%B6%94%EA%B0%80/">Light/Dark 스타일 변경을 위한 토글 버튼 추가 방법</a>은 이 문장과 링크된 글에 있습니다.

### 📌 FOUC : 스타일 적용 에러
> - 새로고침 시 잠시 다른 스타일로 전환되는 에러인 FOUC는 웹 개발 시 종종 발생됩니다.
> - FOUC는 Flash of Unstyled Content의 약자이며 스타일 적용 에러의 한 종류입니다.
> - 이 에러의 특징은 스타일이 적용되기 전에 페이지의 일부가 먼저 로드되는 것입니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/f47bc0d9-47f0-4fe5-a3ec-f891982ce1e6" class="img" alt="figure">
    <figcaption>에러 해결 전의 사이트</figcaption>
</figure>

<br>

### 🔔 2. 에러 해결 방법
### 📌 localStorage.getItem() 메서드
> - FOUC 에러를 해결하기 위해서는 페이지가 로드되기 전에 스타일이 적용되어야 됩니다.
> - 이를 위해서는 HTML 문서가 파싱되기 전에 실행되는 인라인 스크립트를 추가해야 됩니다.
> - 필자는 loalStorage.getItem() 메서드 관련 코드를 head.html 파일 내부에 추가하였습니다.
> - root/_includes/head.html 파일에 추가한 내용은 아래와 같습니다.

``` html
<head>
  <script>
    (function () {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-mode', 'dark');
      } else {
        document.documentElement.setAttribute('data-mode', 'light');
      }
    })();
  </script>

  <!-- 다른 코드들 -->
</head>
```

### 📌 코드 적합성 테스트
> - 한편 loalStorage.getItem() 메서드 관련 코드가 정답이 아닐 가능성이 있습니다.
> - 따라서 addEventListener 관련 코드를 적용해보았습니다.
> - 해당 코드는 HTML 문서의 로딩(파싱 포함)이 완료되었을 때 실행됩니다.
> - 즉, HTML 파싱 전에 실행되는 loalStorage.getItem() 메서드보다 실행이 지연됩니다.
> - 역시나 아래의 addEventListener 관련 코드를 추가해보았지만 에러가 해결되지는 않았습니다.

``` html
<head>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-mode', 'dark');
      } else {
        document.documentElement.setAttribute('data-mode', 'light');
      }
    });
  </script>

  <!-- 다른 코드들 -->
</head>
```

<br>

### 🔔 3. 에러 해결
### 📌 localStorage.getItem() 메서드 실행 결과
> - localStorage.getItem() 메서드 관련 코드를 head.html 파일에 추가하였습니다.
> - 그 결과 아래와 같이 새로고침을 하여도 페이지가 전환되지 않는 것을 확인하였습니다.
> - 그러므로 HTML 문서가 파싱되기 전에 스타일이 잘 적용된 것이라고 판단되었습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/403766fb-a521-4e6b-9e7d-049e356166b0" class="img" alt="figure">
    <figcaption>에러 해결 후의 사이트</figcaption>
</figure>

<br>

### 🎁 4. 부록
> - <a href="https://kim-src.github.io/categories/github-blog/">나만의 깃허브 블로그 개발 기록</a>
> - <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95/">나만의 깃허브 블로그 만드는 방법</a>
> - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-Jekyll%EC%9D%98-Chirpy-%ED%85%8C%EB%A7%88-%EC%A0%81%EC%9A%A9%EC%8B%9C%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95/">나만의 깃허브 블로그 꾸미는 방법</a>
> - <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EA%B0%9C%EB%B0%9C-%ED%98%84%ED%99%A9/">나만의 Dark/Light 스타일 적용</a>
> - <a href="http://127.0.0.1:4000/posts/%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-Light-%EB%B0%8F-Dark-%EB%AA%A8%EB%93%9C-%EC%A0%84%ED%99%98%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%86%A0%EA%B8%80-%EB%B2%84%ED%8A%BC-%EC%B6%94%EA%B0%80/">나만의 깃허브 블로그에 Light/Dark 테마 전환 기능 부여</a>
> - <a href="https://kim-src.github.io/posts/%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-Light-%EB%B0%8F-Dark-%EB%AA%A8%EB%93%9C-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A0%81%EC%9A%A9-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">Light/Dark 스타일 적용 에러 해결 방법</a>
> - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-Commit-&-Push-%EC%9D%98%EB%AF%B8-%EB%B0%8F-Actions-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">깃허브 Commit & Push 의미 및 Actions 에러 해결 방법</a>
> - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0-%EA%B8%80-%EC%B6%9C%EB%A0%A5-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">깃허브 블로그 홈페이지 미리보기 글 출력 에러 해결 방법</a>

<br>
<br>
<br>
