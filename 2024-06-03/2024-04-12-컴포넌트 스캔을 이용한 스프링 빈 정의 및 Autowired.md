---
title: 컴포넌트 스캔을 이용한 스프링 빈 정의 및 Autowired
date: 2024-04-12 18:00:00 +09:00
categories: [1. Fundamental, Spring]
tags: [Fundamental, Spring, Service, Repository, Annotation, DI, Dependency Injection, Constructor Method, Autowired, Spring Bean]
---

<!-- 2024-04-12 글 작성 시작; 2024-04-13 페이지 호출 완료 -->
<h2>강의 내용 복습 : 김영한의 스프링 입문 강의 (섹션 4)</h2>
> - Tool :  
<img alt="IntelliJ" src="https://img.shields.io/badge/-IntelliJ-000000?style=flat-square&logo=intellij-idea&logoColor=white" />
<img alt="Spring Boot" src="https://img.shields.io/badge/-SpringBoot-6DB33F?style=flat-square&logo=spring&logoColor=white" />

<br>

### 🔔 강의 핵심
### 📌 컴포넌트 스캔(@ComponentScan)
> - 스프링이 @Component가 포함된 Java 객체를 생성하고 스프링 컨테이너에 등록하는 과정입니다.
> - 이 과정은 애플리케이션 메인 메서드가 실행되고 스프링이 구축되는 과정에서 발생됩니다.
> - @Component는 @Controller, @Service, @Repository 등에 포함된 어노테이션입니다.
> - 이 컴포넌트 스캔은 스프링 빈 등록 방법 중 하나이며 자동으로 의존 관계를 설정하는 것입니다.
> - 중요한 부분은, 스프링 컨테이너에 등록은 하지만 서로 연결시키지는 않는다는 것입니다.
> - 스프링 컨테이너에 등록된 객체를 연결하는 어노테이션은 @Autowired입니다.

<br>

### 🔔 강의 내용
### 📌 <a href="https://github.com/Kim-src/Study-Spring/blob/main/src/main/java/hello/hellospring/controller/MemberController.java">MemberController</a>
> - 컨트롤러 객체이며 @Controller를 입력하였기 때문에 스프링 실행 시 컨테이너에 생성됩니다.
> - 이는 MemberController뿐만 아니라 일전에 생성하였던 HelloController도 마찬가지입니다.

### 📌 @Autowired
> - 명칭 그대로 클래스를 자동으로 연결해주어 의존 관계를 형성시키는 역할을 합니다.
> - 즉, 객체의 의존성 주입(DI; Dependency Injection)을 발생시킵니다.
> - 컨트롤러 어노테이션이 부여된 객체에서 @Autowired를 사용하면 아래와 같은 과정이 진행됩니다.
>    - <a href="https://github.com/Kim-src/Study-Spring/blob/main/src/main/java/hello/hellospring/controller/MemberController.java">MemberController</a> 생성 : 컨트롤러 어노테이션으로 컨트롤러가 컨테이너에 생성됨
>    - <a href="https://github.com/Kim-src/Study-Spring/blob/main/src/main/java/hello/hellospring/service/MemberService.java">MemberService</a> 포함 : 스프링 빈에 등록되어 있는 서비스 클래스를 컨테이너에 포함시킴

### 📌 @Service & @Repository
> - <a href="https://kim-src.github.io/posts/%ED%9A%8C%EC%9B%90%EA%B4%80%EB%A6%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B0%9D%EC%B2%B4,-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4,-%EB%A6%AC%ED%8F%AC%EC%A7%80%ED%86%A0%EB%A6%AC-%EC%83%9D%EC%84%B1-%EB%B0%A9%EB%B2%95/#-%EC%9D%BC%EB%B0%98%EC%A0%81%EC%9D%B8-%EC%9B%B9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EA%B3%84%EC%B8%B5-%EA%B5%AC%EC%A1%B0">웹 애플리케이션 계층 구조</a>는 보통 컨트롤러, 서비스, 리포지토리, 도메인으로 구성됩니다.
> - @Service 및 @Repository는 @Controller와 함께 컴포넌트 스캔에 필요한 어노테이션입니다.
> - 세 어노테이션에는 상기 핵심 내용에서 설명한 바와 같이 @Component가 포함되어 있습니다.
> - 따라서 스프링 빈에 등록되며 애플리케이션 구축 시 스프링 컨테이너에 포함됩니다.
> - 만일 @Component 관련 어노테이션이 없는 경우네는 스프링이 해당 객체를 인식하지 못합니다.

### 📌 @ComponentScan 특징
> - 컴포넌트 스캔을 이용하여 의존 관계를 설정하는 방법은 스프링 빈 등록 형태 중 하나입니다.
> - 참고로 일반적인 스프링 빈 등록 시 Java 객체는 스프링 컨테이너에 싱글톤으로 등록됩니다.
> - 싱글톤이란 개별 도메인 당 @Controller, @Service, @Repository가 하나라는 것을 의미합니다.
> - 참고로 관련 어노테이션이 있어도 스프링 빈으로 컴포넌트 스캔을 하지 않는 경우가 있습니다.
> - 컴포넌트 스캔은 기본적으로 애플리케이션이 있는 패키지의 하위 패키지에 대해서만 진행됩니다.

<br>

### 🔔 개념 보충
### 📌 스프링 빈(bean)
> - 스프링 빈과 관련된 자세한 내용은 <a href="https://kim-src.github.io/posts/Configuration-%EB%B0%8F-Bean%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%8A%A4%ED%94%84%EB%A7%81-%EB%B9%88-%EB%93%B1%EB%A1%9D-%EB%B0%A9%EB%B2%95/">다음 블로그 글</a>에 잘 작성되어 있습니다.
> - 다음 글에는 스프링 빈 등록(= 정의) 방법 등 전반적인 개념 설명이 포함됩니다.
> - 그리고 스프링 빈 등록 방법 중 Java 코드로 직접 등록하는 방법에 대한 내용도 포함됩니다.
> - 참고로 스프링 빈 등록 방법 중 하나인 '컴포넌트 스캔'에 대한 내용이 본 글의 내용입니다.

### 📌 각 어노테이션의 역할
> - <a href="https://github.com/Kim-src/Study-Spring/blob/main/src/main/java/hello/hellospring/controller/MemberController.java">@Controller</a>는 컨트롤러 객체가 외부 요청을 받는 역할을 수행합니다.
> - <a href="https://github.com/Kim-src/Study-Spring/blob/main/src/main/java/hello/hellospring/service/MemberService.java">@Service</a>는 서비스 객체가 비즈니스 로직을 생성하는 역할을 수행합니다.
> - <a href="https://github.com/Kim-src/Study-Spring/blob/main/src/main/java/hello/hellospring/repository/MemoryMemberRepository.java">@Repository</a>는 리포지토리 구현체가 데이터를 저장하게 하는 역할을 수행합니다.

### 📌 "Tomcat started on port 8080"
> - 스프링에 웹 애플리케이션 관련 객체를 구성하셨다면 애플리케이션을 실행해보실 것입니다.
> - 이때 톰캣 내용은 애플리케이션 메인 메서드가 잘 실행됐는지 식별할 수 있는 것 중 하나입니다.
> - 즉, 스프링이 컨테이너를 생성할 때 문제없이 잘 진행됐다는 것을 의미합니다.
> - 또한 @Autowired 등을 통해 객체끼리의 의존성 부여가 잘 됐다는 것을 의미합니다.

<br>
<br>
<br>
