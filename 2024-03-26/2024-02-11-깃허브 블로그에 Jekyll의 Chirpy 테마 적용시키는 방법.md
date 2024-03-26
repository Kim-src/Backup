---
title: 깃허브 블로그에 Jekyll의 Chirpy 테마 적용시키는 방법
date: 2024-02-11 18:00:00 +09:00
categories: [1. Web Development, GitHub Blog]
tags: [Blog, GitHub Page, Ruby, Jekyll, Chirpy]
---

<!-- 2024-03-23 글 작성 시작; 2024-03-23 페이지 호출 완료 -->
<h2>Chirpy 테마로 Jekyll 사이트 꾸미는 방법</h2>
> - Tool :  
<img alt="Git Bash" src="https://img.shields.io/badge/Git%20Bash-FFE000?style=flat&logo=git&logoColor=white" />

<br>

### 🔔 1. Jekyll 사이트에 Chirpy 테마 적용
### 📌 Chirpy 테마 다운로드
> - 현재 Jekyll 웹 사이트가 제작되었고 웹 브라우저에 정상적으로 호출된 상태일 것입니다.
> - 현재의 웹 페이지는 어떠한 테마도 적용되지 않은 상태입니다.
> - 이제 Jekyll의 Chirpy 테마를 다운로드 받아보겠습니다.
> - http://jekyllthemes.org 사이트에서 Chirpy 테마를 다운로드 받아주시면 됩니다.
> - 다운로드 및 압축 해제 후 폴더 내 모든 파일을 복사하여 root 폴더에 붙여넣기/덮어쓰기 합니다.
> - 필자의 root 폴더명(블로그 폴더)은 아래와 같습니다.

``` bash
/c/Users/ceoba/Dropbox/'2. PJT'/Kim-src.github.io
```

<br>

### 🔔 2. Chirpy 테마 수정
### 📌 Chirpy 테마 적용 초기 상태
> - 이제 Git Bash에 ```bundle exec jekyll serve```를 입력하여 브라우저에 사이트를 호출합니다.
> - Chirpy 테마 적용 직후의 웹 사이트 홈페이지 모습은 아래와 같을 것입니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/c3d5ab1e-8f6d-48ea-9f91-b7c04ceb832c" alt="figure">
    <figcaption>Chirpy 테마 적용 후 사이트 모습</figcaption>
</figure>

### 📌 Chirpy 테마 초기화
> - 초기 상태의 Chirpy 테마가 적용된 홈페이지는 견본용 포스팅이 되어 있습니다.
> - 본인만의 블로그로 만들기 위해서는 root 폴더에서 해당 포스팅 및 정보들을 삭제해야 됩니다.
> - 사이트 초기화 방법은 아래와 같습니다.
> - 만일 Chirpy 테마가 업데이트 되어 아래 폴더/파일을 찾을 수 없다면 넘어가주시면 됩니다.
>    - _posts 폴더 삭제
>    - _site 폴더 삭제
>    - docs 폴더 삭제
>    - Gemfile.lock 파일 삭제
>    - .github/workflows/pages-deploy.yml.hook 파일명 변경 : pages-deploy.yml
>    - .github/workflows 폴더에서 pages-deploy.yml 파일을 제외한 모든 파일 삭제

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/f21391e1-835d-4fee-9a80-47970d3742fc" alt="figure">
    <figcaption>Chirpy 테마 초기화 후 사이트 모습</figcaption>
</figure>

<br>

### 🔔 3. 블로그 정보 입력
### 📌 _config.yml
> - Jekyll의 _config.yml은 사이트 홈페이지 등의 내용을 추가/수정하는 파일입니다.
> - 먼저 lang, timezone, title, tagline, url, social, avatar 등의 내용을 채워주시면 됩니다.
> - 필자의 _config.yml 파일의 코드 전체 내용은 본 포스팅 최하단에 공유하였습니다.

<br>

### 🔔 4. 포스팅
### 📌 _posts
> - 이제 첫 포스팅을 할 차례입니다.
> - 포스팅을 위해서는 삭제했었던 _posts 폴더를 새로 생성해야 됩니다.
> - Jekyll 사이트에 포스팅 시에는 아래와 같은 일련의 규칙이 있습니다.
>    - _posts 폴더 내부 파일은 markdown 언어로 작성된 파일(.md)이어야 됩니다.
>    - md 파일명은 "2024-02-11-글 제목" 형식이어야 됩니다.
>    - md 파일에는 아래 코드와 같은 내용으로 시작되어야 됩니다.
>    - 참고로 VS Code 등을 이용하여 md 파일을 생성하고 글을 작성하고 수정할 수 있습니다.

``` md
---
title: 깃허브 블로그에 Jekyll의 Chirpy 테마 적용시키는 방법
date: 2024-02-11 18:00:00 +09:00
categories: [1. Web Development, GitHub Blog]
tags: [Blog, GitHub Page, Ruby, Jekyll, Chirpy]
---

첫 포스팅
```

### 📌 GitHub Actions
> - 이제 GitHub Acitions를 통해 Jekyll 사이트에 첫 포스팅을 게시해보겠습니다.
> - Git Bash에서 디렉토리를 root 폴더로 설정해주시고 아래 명령문을 입력해주세요.
> - git push가 완료되면 Git Actions에서 빌드 및 배포 과정을 거칩니다.
> - 빌드/배포 과정 중을 의미하는 노란색 아이콘이 초록색 아이콘으로 변경되면 포스팅 성공입니다.
> - 포스팅은 _config.yml의 url에 입력한 사이트에서 확인하실 수 있습니다.
> - 참고로 git 명령문 관련 상세한 내용은 <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-Commit-&-Push-%EC%9D%98%EB%AF%B8-%EB%B0%8F-Actions-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">다음 글</a>에 잘 작성되어 있습니다.

``` bash
$ git add .
$ git status
$ git commmit -m "first posting"
$ git push
```

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/994432b9-8f3f-44d4-9219-7bd51f7c339a" alt="figure">
    <figcaption>GitHub Actions 페이지</figcaption>
</figure>

### 📌 CRLF 에러 이슈
> - 포스팅을 위해 ```$ git add .``` 명령문을 입력하면 가끔 CRLF 에러를 마주할 때가 있습니다.
> - 이때 ```$ git --config core.autocrlf true``` 코드를 입력해주시면 간단히 해결됩니다.
> - 또는 ```$ git config --global core.autocrlf true``` 코드를 입력해주셔도 됩니다.
> - 에러 해결 후 다시 ```$ git add .``` 등의 명령문을 입력해주시면 됩니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/3492b1bf-ad84-4e5b-848a-ba937e1efd77" alt="figure">
    <figcaption>GitBash에서 CRLF 에러를 해결한 모습</figcaption>
</figure>

### 📌 Jekyll 사이트의 특이성
> - Jekyll 사이트의 재미 요소는 업로드 날짜 및 시간을 자유롭게 작성한다는 것입니다.
> - 본 포스팅의 경우 작성 일자는 2024년 3월 24일이지만 업로드 일자는 2월 11일로 설정하였습니다.
> - 2024년 3월 24일 기준 필자의 _posts 현황은 아래와 같습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/7fa4c283-9fff-4098-ba44-6ced82a1b8ab" alt="figure">
    <figcaption>필자의 _posts 폴더 현황</figcaption>
</figure>

<br>

### 🎁 5. 부록
### 📌 참고 포스팅
> - <a href="https://kim-src.github.io/categories/github-blog/">나만의 깃허브 블로그 개발 기록</a>
> - <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95/">나만의 깃허브 블로그 만드는 방법</a>
> - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-Jekyll%EC%9D%98-Chirpy-%ED%85%8C%EB%A7%88-%EC%A0%81%EC%9A%A9%EC%8B%9C%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95/">나만의 깃허브 블로그 꾸미는 방법</a>
> - <a href="https://kim-src.github.io/posts/Jekyll%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B9%83%ED%97%88%EB%B8%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8(GitHub-Pages)-%EA%B0%9C%EB%B0%9C-%ED%98%84%ED%99%A9/">나만의 Dark/Light 스타일 적용</a>
> - <a href="http://127.0.0.1:4000/posts/%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-Light-%EB%B0%8F-Dark-%EB%AA%A8%EB%93%9C-%EC%A0%84%ED%99%98%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%86%A0%EA%B8%80-%EB%B2%84%ED%8A%BC-%EC%B6%94%EA%B0%80/">나만의 깃허브 블로그에 Light/Dark 테마 전환 기능 부여</a>
> - <a href="https://kim-src.github.io/posts/%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-Light-%EB%B0%8F-Dark-%EB%AA%A8%EB%93%9C-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A0%81%EC%9A%A9-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">Light/Dark 스타일 적용 에러 해결 방법</a>
> - <a href="https://kim-src.github.io/posts/%EA%B9%83%ED%97%88%EB%B8%8C-Commit-&-Push-%EC%9D%98%EB%AF%B8-%EB%B0%8F-Actions-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/">깃허브 Commit & Push 의미 및 Actions 에러 해결 방법</a>

### 📌 _config.yml 전체 코드

``` yml
# The Site Configuration
# contact.yml, sidebar.html, footer.html 참고 필요

# Import the theme
theme: jekyll-theme-chirpy

# The language of the webpage › http://www.lingoes.net/en/translator/langcode.htm
# If it has the same name as one of the files in folder `_data/locales`, the layout language will also be changed,
# otherwise, the layout language will use the default value of 'en'.
lang: ko-KR

# Change to your timezone › https://kevinnovak.github.io/Time-Zone-Picker
timezone: Asia/Seoul

# jekyll-seo-tag settings › https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md
# ↓ --------------------------

title: Kim-src Blog # the main title

tagline: 곰곰이 고민하는 곰 # it will display as the sub-title

description: >- # used by seo meta and the atom feed
  A minimal, responsive and feature-rich Jekyll theme for technical writing.

# Fill in the protocol & hostname for your site.
# e.g. 'https://username.github.io', note that it does not end with a '/'.
url: "https://kim-src.github.io"

github:
  username: Kim-src # change to your github username

# twitter:
#   username: twitter_username # change to your twitter username

social:
  # Change to your full name.
  # It will be displayed as the default author of the posts and the copyright owner in the Footer
  name: Chang-Seong Kim
  email: ceobaek153@gmail.com # change to your email address
  links:
    - https://github.com/Kim-src # change to your github homepage
    - https://www.linkedin.com/in/chang-seong-kim-7826142a0
    - https://www.instagram.com/changs_k_
    # The first element serves as the copyright owner's link
    # Uncomment below to add more social links
    # - https://www.facebook.com/username
    # - https://www.twitter.com/username

google_site_verification: "Wq-qzmlzrOqocCVvKfMT2QIhiTllDDHZEu9bIRIqw1M"
# ↑ --------------------------
# The end of `jekyll-seo-tag` settings

google_analytics:
  id: # fill in your Google Analytics ID

goatcounter:
  id: # fill in your Goatcounter ID

# Prefer color scheme setting.
#
# Note: Keep empty will follow the system prefer color by default,
# and there will be a toggle to switch the theme between dark and light
# on the bottom left of the sidebar.
#
# Available options:
#
#     light  - Use the light color scheme
#     dark   - Use the dark color scheme
#
# theme_mode: dark
#
# The CDN endpoint for images.
# Notice that once it is assigned, the CDN url
# will be added to all image (site avatar & posts' images) paths starting with '/'
#
# e.g. 'https://cdn.com'
img_cdn: "https://chirpy-img.netlify.app"

# the avatar on sidebar, support local or CORS resources
avatar: "https://github.com/Kim-src/Images/assets/150884526/9ba1ebbb-a79c-4e4c-a5f6-2149bb301cd8"

# javascript 파일 포함
include:
  - _javascript

# The URL of the site-wide social preview image used in SEO `og:image` meta tag.
# It can be overridden by a customized `page.image` in front matter.
social_preview_image: # string, local or CORS resources

# boolean type, the global switch for TOC in posts.
toc: true

comments:
  active: # The global switch for posts comments, e.g., 'disqus'.  Keep it empty means disable
  # The active options are as follows:
  disqus:
    shortname: # fill with the Disqus shortname. › https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  # utterances settings › https://utteranc.es/
  utterances:
    repo: # <gh-username>/<repo>
    issue_term: # < url | pathname | title | ...>
  # Giscus options › https://giscus.app
  giscus:
    repo: # <gh-username>/<repo>
    repo_id:
    category:
    category_id:
    mapping: # optional, default to 'pathname'
    input_position: # optional, default to 'bottom'
    lang: # optional, default to the value of `site.lang`
    reactions_enabled: # optional, default to the value of `1`

# Self-hosted static assets, optional › https://github.com/cotes2020/chirpy-static-assets
assets:
  self_host:
    enabled: # boolean, keep empty means false
    # specify the Jekyll environment, empty means both
    # only works if `assets.self_host.enabled` is 'true'
    env: # [development | production]

pwa:
  enabled: true # the option for PWA feature (installable)
  cache:
    enabled: true # the option for PWA offline cache
    # Paths defined here will be excluded from the PWA cache.
    # Usually its value is the `baseurl` of another website that
    # shares the same domain name as the current website.
    deny_paths:
      # - "/example"  # URLs match `<SITE_URL>/example/*` will not be cached by the PWA

paginate: 5

# The base URL of your site
baseurl: ""

# ------------ The following options are not recommended to be modified ------------------

kramdown:
  syntax_highlighter: rouge
  syntax_highlighter_opts: # Rouge Options › https://github.com/jneen/rouge#full-options
    css_class: highlight
    # default_lang: console
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1

collections:
  tabs:
    output: true
    sort_by: order

defaults:
  - scope:
      path: "" # An empty string here means all files in the project
      type: posts
    values:
      layout: post
      comments: true # Enable comments in posts.
      toc: true # Display TOC column in posts.
      # DO NOT modify the following parameter unless you are confident enough
      # to update the code of all other post links in this project.
      permalink: /posts/:title/
  - scope:
      path: _drafts
    values:
      comments: false
  - scope:
      path: ""
      type: tabs # see `site.collections`
    values:
      layout: page
      permalink: /:title/
  - scope:
      path: assets/js/dist
    values:
      swcache: true

sass:
  style: compressed

compress_html:
  clippings: all
  comments: all
  endings: all
  profile: false
  blanklines: false
  ignore:
    envs: [development]

exclude:
  - "*.gem"
  - "*.gemspec"
  - docs
  - tools
  - README.md
  - LICENSE
  - rollup.config.js
  - package*.json

jekyll-archives:
  enabled: [categories, tags]
  layouts:
    category: category
    tag: tag
  permalinks:
    tag: /tags/:name/
    category: /categories/:name/
```

<br>
<br>
<br>
