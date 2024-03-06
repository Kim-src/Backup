---
title: HTTP 개념 및 작동 원리(What is HTTP 로드맵 답)
date: 2024-04-06 18:00:00 +09:00
categories: [Fundamental, Computer Science]
tags: [Fundamental, Computer Science, HTTP, What is HTTP]
---

<!-- 2024-03-03 글 작성 시작; 2099-01-01 페이지 호출 필요 -->
## ✅ What is HTTP?

<br>

### 🔔 Introduction
### 📌 HTTP란
> - HTTP가 무엇이냐는 질문에 가장 잘 어울리는 답변은 "인터넷이요"라고 생각됩니다.
> - 우리가 수시로 접속하는 인터넷 주소 앞에는 보통 HTTPS로 시작되기 때문입니다.
> - HTTP라는 단어는 분명 익숙한데 HTTP를 정의하기란 쉽지 않습니다.
> - HTTP가 아닌 인터넷 환경은 상상하기 어렵기 때문인 것 같습니다.
> - 이번 글에는 초심자도 이해할 수 있도록 HTTP가 무엇인지 작성하였습니다.

<br>

### 🔔 Step 1. 문자적 접근
### 📌 HTTP 뜻
> - HTTP는 Hypertext Transfer Protocol의 축약어입니다.
> - Hypertext는 '최고의 글'이라는 의미로 Hyper 및 Text의 합성어입니다.
> - Transfer는 '이동'이라는 뜻이 있습니다.
> - Protocol은 '약속', '규약'이라는 의미가 있습니다.
> - 즉, HTTP는 Hypertext라는 것의 이동에 필요한 하나의 약속을 의미합니다.

<br>

### 🔔 Step 2. 과거 인터넷 환경의 발전
### 📌 HTTP의 탄생 배경
> - 초기 웹은 과학자들이 연구 결과를 쉽게 공유하는 것이 목적이었습니다.
> - 이 과정에서 네트워크 상에서 링크를 이용한 기능이 필요하였고 HTTP가 고안되었습니다.

### 📌 초기 웹의 형태 및 한계
> - HTTP가 보급되기 시작한 1990년대 초기의 웹 페이지는 주로 텍스트 문서로 이루어져 있었습니다.
> - 즉, 웹 페이지의 구성이 Hypertext가 아닌 Text로 되어 있었습니다.
> - HTTP가 있기 전에는 모뎀 및 통신 케이블로 접근이 가능했던 BBS가 있었습니다.
> - BBS는 파란색 또는 검은색 배경에 있는 흰색 글씨로 구성되었으며 아래와 같은 모습이었습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/74f42719-d2cb-4b19-8175-820a5ff6022c" class="img" alt="figure">
    <figcaption>과거 나우누리 웹 페이지</figcaption>
</figure>

### 📌 접속 방식의 차이 : HTTP vs BBS
> - 당시 BBS (Bulletin Board System) 서버에 접속하는 방식은 다소 복잡하였습니다.
> - 사용자는 BBS에 접속하기 위해 관련 전화번호를 직접 입력해야 됐기 때문입니다.
> - HTTP 네트워크에 접속하는 방식은 현재(2024년)와 마찬가지로 ISP를 통합니다.
> - 사용자는 웹 브라우저를 통해 웹 서버에 요청을 보내고 승인받은 뒤 웹 페이지에 접속할 수 있습니다.
> - 게다가 모뎀, 이더넷, 광섬유 등의 유선 접속만이 아닌 무선 접속도 가능해졌습니다.

<br>

### 🔔 Step 3. HTTP & HTTPS
### 📌 HTTP 0.9
> - 1991년에 출시된 HTTP로 기본적인 프로토콜이었습니다.
> - 페이지 전체가 순수하게 텍스트 형태로만 전송되었고 GET 요청만 처리할 수 있었습니다.

### 📌 HTTP 1.0
> - GET만이 아닌 HTTP 메소드 및 상태 코드가 추가되었습니다.
> - 웹 서버와 사용자 간의 통신이 보다 명확해졌습니다.

### 📌 HTTP 1.1
> - 웹 트래픽을 효율적으로 처리하기 위한 개선 사항을 도입시켰습니다.
> - 캐시, 인증, 지속 연결 등의 기능이 추가되었습니다.

### 📌 HTTP 2.0
> - 2015년에 출시되었으며 성능 향상을 위해 설계되었습니다.
> - 서버 푸시, 헤더 압축 등의 기능이 추가되었습니다.
> - 한 번의 연결을 통해 여러 요청과 응답을 동시에 처리하는 멀티플렉싱 기능이 추가되었습니다.

### 📌 HTTP 3.0
> - 패킷 손실 시에도 연결 설정과 복구를 빠르게 하는 UDP 기반의 QUIC 프로토콜이 추가되었습니다.

### 📌 HTTPS
> - HTTPS는 Hypertext Transfer Protocol Secure의 축약어입니다.
> - HTTPS는 명칭대로 개인 정보 보호 및 데이터 보안을 위해 개발되었습니다.
> - HTTPS는 SSL (Secure Sockets Layer) 또는 TLS (Transport Layer Security) 프로토콜을 사용합니다.
> - 이들 프로토콜의 기능은 데이터를 암호화하는 것으로 중간자 공격으로부터 보호하는 역할을 합니다.
> - 한편 구글의 크롬 브라우저는 2018년부터 HTTP 사이트를 안전하지 않은 사이트로 표시하였습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/4938d33b-9969-4706-ab44-2c6cd1c7b15f" class="img" alt="figure">
    <figcaption>초기 HTTP 웹 사이트 (출처 : history.com)</figcaption>
</figure>

<br>

### 🔔 Step 4. HTTP & Browser
### 📌 Web Browser
> - 웹 브라우저는 WWW (World Wide Web)에서 정보를 검색하고 보여주는 응용프로그램입니다.
> - 사용자는 URL을 입력하여 웹 페이지에 접근할 수 있고 이 과정에서 프로토콜이 사용됩니다.
> - 사용자가 URL을 입력하면 브라우저는 프로토콜을 이용하여 웹 서버에게 웹 페이지를 요청합니다.
> - 즉, 웹 브라우저는 사용자와 웹 서버와의 연결하는 역할을 하며 프로토콜은 이에 반드시 필요합니다.

### 📌 Web Browser & HTTPS
> - 사용자는 인터넷에 접속하기 위해 일반적으로 웹 브라우저를 이용합니다.
> - 그런데 웹 브라우저를 통한 인터넷 접속 과정에서 데이터 유실이 발생될 수 있습니다.
> - 데이터 유실이나 해킹 공격을 방지하기 위해서는 HTTPS를 이용하는 것이 보다 안전합니다.
> - 말씀드렸듯이 HTTPS에는 HTTP와 달리 SSL 또는 TLS 기능이 탑재되어 있기 때문입니다.
> - 이러한 이유로 크롬 등의 브라우저는 HTTPS가 아닌 사이트에 대한 접근을 어렵게 설정하였습니다.
> - 다음 블로그 글(링크)에는 <a href="https://kim-src.github.io/categories/computer-science/">브라우저와 관련된 자세한 내용</a>을 작성하였습니다.

<br>

### 🔔 Step 5. HTTP & DNS
### 📌 DNS & Web Browser
> - 웹 브라우저가 웹 페이지를 요청하는 서버 중 하나는 DNS 서버입니다.
> - DNS는 Domain Name Server의 축약어이며 인터넷의 연락처와 같은 역할을 합니다.
> - DNS의 역할은 사람이 읽을 수 있는 도메인 이름을 컴퓨터가 이해할 수 있는 IP 주소로 변환하는 것입니다.
> - 도메인 이름의 예시는 'www.google.com'이며 IP 주소의 예시는 '210.94.0.73'입니다.
> - 참고로 도메인명과 IP 주소의 변환 과정을 이름 해석(Name Resoultion)이라고 합니다.

### 📌 DNS & HTTP
> - 사용자가 브라우저에 URL을 입력합니다.
> - 이후 HTTP는 해당 URL의 도메인명을 DNS 서버에 조회하여 IP 주소를 찾습니다.
> - 이후 HTTP는 해당 IP 주소를 이용하여 웹 서버에 접속하고 웹 페이지를 요청합니다.

### 📌 DNS & HTTPS
> - HTTPS에는 SSL/TLS 프로토콜 기능이 포함된다고 말씀드렸습니다.
> - SSL/TLS는 웹 서버가 제공하는 인증서를 검증합니다.
> - 이 과정에서 웹 서버의 인증서에 도메인 이름이 포함되어 있어야 승인됩니다.
> - 이를 SSL/TSL 핸드셰이크라고 하고 핸드셰이크에는 세부적인 검증 과정이 포함됩니다.
> - 다음 블로그 글(링크)에는 <a href="https://kim-src.github.io/categories/computer-science/">DNS와 관련된 자세한 내용</a>을 작성하였습니다.

<br>

### 🔔 Step 6. HTTP & Hosting
### 📌 Web Hosting
> - 웹 호스팅이란 웹 사이트/페이지/애플리케이션을 인터넷에 게시하는 서비스입니다.
> - 호스팅 서비스 제공업체는 웹 서버 공간을 사용자에게 임대해주는 역할을 합니다.
> - 웹 서버 공간에는 사용자의 웹 페이지 파일이 저장됩니다.

### 📌 Web Hosting & HTTPS
> - 사용자가 
> - 웹 서버는 HTTPS를 통해 받은 요청을 승인하고 웹 페이지 데이터를 사용자에게 전송합니다.

<br>

### 🔔 Step 7. HTTP & WEB


<br>
<br>
<br>
