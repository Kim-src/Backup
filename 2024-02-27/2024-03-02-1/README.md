---
title: 싱크홀(공동) 자동 분석 AI 모델 VisualCavity AI v0.1.3
date: 2024-03-02 21:00:00 +09:00
categories: [VisualCavity, VisualCavity AI]
tags: [Python, TensorFlow, AI, AI Model, Numpy, VisualCavity, VisualCavity AI, Machine Learning, Deep Learning, CNN]
---

<!-- 2024-02-26 글 작성 시작; 2099-01-01 페이지 호출 필요 -->
## ✅ 싱크홀(공동) 자동 분석 AI 모델 VisualCavity AI

<br>

### 🔔 1. Introduction
### 📌 모델 소개
> - 모델명 : VisualCavity AI (ver. 0.1.3)
> - 모델분류 : 이미지 학습 CNN AI 모델
> - 상세내용 : 싱크홀(공동) 자동 분석 프로그램 제작을 위한 이미지 학습 AI 모델
> - 개발목적 : 3D-GPR 데이터 분석 난이도 하향
> - 주요자료 : 지하 물리 탐사로 획득한 70,732장의 싱크홀 또는 지장물 이미지

### 📌 VisualCavity AI v0.1.0 개략
> - <a href="https://kim-src.github.io/categories/visualcavity/">VisualCavity AI v0.1.0 개발 현황 (링크)</a>
>   - VisualCavity v0.1.0 소개
>   - 전문 용어 및 개념 정리 : GPR, 싱크홀, 지장물, 맨홀, GPR 탐사, CNN 등
>   - 싱크홀 및 지장물에 대한 GPR 이미지 설명
>   - AI 모델 구축을 위한 코드 정보
>   - VisualCavity AI v0.1.0 테스트 결과
>   - VisualCavity AI 개발 현황
> - <a href="https://github.com/Kim-src/VisualCavity">해당 AI 모델의 깃허브 README (링크)</a>

<br>

### 🔔 2. Methodology
### 📌 개발 환경
> - Google Colab에서 Python 코드를 작성하였습니다.
> - 주로 사용된 Python 라이브러리는 TensorFlow, OpenCV 입니다.
> - AI 학습용 이미지 데이터 출처는 과학기술정보통신부 주관의 <a href="https://www.aihub.or.kr/">AI Hub 사이트</a>입니다.

### 📌 AI 초기 모델 구축에 사용된 이미지 데이터
> - AI 초기 모델 구축을 위해 준비된 싱크홀 및 지장물 이미지 데이터는 총 192,120장이었습니다.
> - 이 데이터 세트 중 VisualCavity AI v0.1.0 구축에 사용된 이미지 데이터는 1장(단일)입니다.
> - 이는 향후 AI 모델의 프로토타입(prototype) 구축을 위한 테스트 목적이었습니다.
> - 전체 이미지 데이터는 3차원 중 일부였으며 종단면(Y-Z) 및 평단면(X-Y)으로 구성되었습니다.

### 📌 보다 빠른 AI 초기 모델 구축
> - 이번 프로젝트의 목적은 AI 초기 모델의 빠른 구축입니다.
> - 3D-GPR 데이터에서 AI가 학습하기 가장 좋은 단면은 종단면(Y-Z plane)입니다.
> - 왜냐하면 종단면에서는 싱크홀, 맨홀, 배관을 가장 쉽게 구분할 수 있기 때문입니다.
> - 따라서 3차원의 이미지 데이터 중 우선적으로 필요한 것은 종단면 데이터였습니다.

### 📌 보다 나은 AI 모델 개발 기획
> - 종단면에 해당되는 이미지 데이터의 개수는 70,732장이었습니다.
> - 그리고 AI의 이미지 데이터 구조를 Train, Validation, Test 세트로 관리하고 싶었습니다.
> - 왜냐하면 실무에서 사용되는 딥러닝 모델 훈련/검증/테스트 세트를 희망하기 때문입니다.
> - 기획에 따른 이미지 데이터 구조의 변화가 필요하였고 아래와 같이 변경하였습니다.

<br>

### 🔔 3. Results
### 📌 변경 전 이미지 데이터 구조 (상세)
> - Number of Total Data : 192,120개
> - Training : 170,774개
>   - Source
>      - 종단면 : 66,523개
>         - 싱크홀(대칭) GPR 이미지
>         - 싱크홀(비대칭) GPR 이미지
>         - 싱크홀(기타) GPR 이미지
>         - 맨홀 GPR 이미지
>         - 배관(종방향) GPR 이미지
>         - 배관(횡방향) GPR 이미지
>      - 평단면 : 104,251개
>         - 싱크홀(대칭) GPR 이미지
>         - 싱크홀(비대칭) GPR 이미지
>         - 싱크홀(기타) GPR 이미지
>         - 맨홀 GPR 이미지
>         - 배관(종방향) GPR 이미지
>         - 배관(횡방향) GPR 이미지
>   - Label
>      - 종단면 : 66,523개
>         - 싱크홀(대칭) GPR 이미지
>         - 싱크홀(비대칭) GPR 이미지
>         - 싱크홀(기타) GPR 이미지
>         - 맨홀 GPR 이미지
>         - 배관(종방향) GPR 이미지
>         - 배관(횡방향) GPR 이미지
>      - 평단면 : 104,251개
>         - 싱크홀(대칭) GPR 이미지
>         - 싱크홀(비대칭) GPR 이미지
>         - 싱크홀(기타) GPR 이미지
>         - 맨홀 GPR 이미지
>         - 배관(종방향) GPR 이미지
>         - 배관(횡방향) GPR 이미지
> - Validation : 21,346개
>   - Source
>      - 종단면 : 8,315개
>         - 싱크홀(대칭) GPR 이미지
>         - 싱크홀(비대칭) GPR 이미지
>         - 싱크홀(기타) GPR 이미지
>         - 맨홀 GPR 이미지
>         - 배관(종방향) GPR 이미지
>         - 배관(횡방향) GPR 이미지
>      - 평단면 : 13,031개
>         - 싱크홀(대칭) GPR 이미지
>         - 싱크홀(비대칭) GPR 이미지
>         - 싱크홀(기타) GPR 이미지
>         - 맨홀 GPR 이미지
>         - 배관(종방향) GPR 이미지
>         - 배관(횡방향) GPR 이미지
>   - Label
>      - 종단면 : 8,315개
>         - 싱크홀(대칭) GPR 이미지
>         - 싱크홀(비대칭) GPR 이미지
>         - 싱크홀(기타) GPR 이미지
>         - 맨홀 GPR 이미지
>         - 배관(종방향) GPR 이미지
>         - 배관(횡방향) GPR 이미지
>      - 평단면 : 13,031개
>         - 싱크홀(대칭) GPR 이미지
>         - 싱크홀(비대칭) GPR 이미지
>         - 싱크홀(기타) GPR 이미지
>         - 맨홀 GPR 이미지
>         - 배관(종방향) GPR 이미지
>         - 배관(횡방향) GPR 이미지

### 📌 변경 후 이미지 데이터 구조 (상세)
> - Total Number of Images : 70,732
> - Training Dataset : 49,514 Images
>   - Raw Data
>      - Longitudinal Sections : 49,514 Images (70%)
>         - Cavity : 26,883 Images (38%)
>         - Manhole : 21,565 Images (30%)
>         - Pipe : 1,066 Images (2%)
>      - Plan Views : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
>      - Cross Sections : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
>   - Annotated Data
>      - Longitudinal Sections : 49,514 Images (70%)
>         - Cavity : 26,883 Images (38%)
>         - Manhole : 21,565 Images (30%)
>         - Pipe : 1,066 Images (2%)
>      - Plan Views : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
>      - Cross Sections : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
> - Validation Dataset : 10,609 Images
>   - Raw Data
>      - Longitudinal Sections : 10,609 Images (15%)
>         - Cavity : 5,760 Images (8%)
>         - Manhole : 4,621 Images (7%)
>         - Pipe : 228 Images (0.3%)
>      - Plan Views : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
>      - Cross Sections : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
>   - Annotated Data
>      - Longitudinal Sections : 10,609 Images (15%)
>         - Cavity : 5,760 Images (8%)
>         - Manhole : 4,621 Images (7%)
>         - Pipe : 228 Images (0.3%)
>      - Plan Views : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
>      - Cross Sections : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
> - Testing Dataset : 10,609 Images
>   - Raw Data
>      - Longitudinal Sections : 10,609 Images (15%)
>         - Cavity : 5,760 Images (8%)
>         - Manhole : 4,621 Images (7%)
>         - Pipe : 228 Images (0.3%)
>      - Plan Views : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
>      - Cross Sections : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
>   - Annotated Data
>      - Longitudinal Sections : 10,609 Images (15%)
>         - Cavity : 5,760 Images (8%)
>         - Manhole : 4,621 Images (7%)
>         - Pipe : 228 Images (0.3%)
>      - Plan Views : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -
>      - Cross Sections : Not applicable
>         - Cavity : -
>         - Manhole : -
>         - Pipe : -

<br>

### 🔔 4. Conclusions
### 📌 변경된 데이터 구조
> - 각 디렉토리명을 보다 명시적으로 변경하였습니다.
> - Training, Validation, Testing Dataset의 비율을 수정하였습니다.
> - 3D-GPR 데이터에서 가장 중요하다고 판단되는 종단면 데이터를 먼저 사용하였습니다.
> - 변경된 데이터 구조를 이용하여 VisualCavity AI 모델 v1.0.0을 구축할 예정입니다.

<br>

### 🔔 5. Appendix
### 🚀 VisualCavity AI 개발 전체 현황 (현재 ver. 0.1.3)
> - v0.1.0 : Trainin Dataset 싱크홀 이미지 1장 학습 (2024-01-09)
>   - 기초 모델 구축 및 단일 싱크홀 이미지 학습
> - v0.1.3 : 싱크홀 및 지장물 이미지에 대한 Training, Validation, Testing Dataset 구조 변경 (2024-02-27)
>   - 기존 : 총 192,120장, Training 170,774장, Validation Dataset 21,346장
>   - 변경 : 총 70,732장, Training 49,514장, Validation 10,609장, Testing Dataset 10,609장  
> - v0.1.7 : Testing Dataset을 포함한 VisualCavity AI 개발 계획 재구성
>   - 현재 : AI 모델 개발 초기에 기획했던 내용
>   - 추후 : 보다 전문적인 AI 모델 개발 기획 (v0.1.7 이후 전반적인 개발 계획 변경 예정)
> - v0.2.0 : Train 싱크홀 이미지 11,205장 학습 완료
>   - 기존 모델에 싱크홀 이미지만이 아닌 지장물 이미지를 추가적으로 학습시킴
>   - 싱크홀 및 지장물을 구분할 수 있는 능력을 상승시킴
> - v0.3.0 : Validation 싱크홀 이미지 1,401장을 이용하여 학습된 이미지 11,205장에 대한 검토 완료
> - v0.4.0 : Train 싱크홀 이미지 34,136장 학습 완료
> - v0.5.0 : Validation 싱크홀 이미지 장을 이용하여 학습된 이미지 34,136장에 대한 검토 완료
> - v0.4.0 : Train 싱크홀 이미지 34,136장 학습 완료
> - v0.5.0 : Validation 싱크홀 이미지 장을 이용하여 학습된 이미지 34,136장에 대한 검토 완료
> - v0.6.0 : Train 싱크홀 및 지장물 이미지 170,774장 학습 완료
> - v0.7.0 : Validation 이미지 21,346장을 이용하여 학습된 이미지 170,774장에 대한 검토 완료
> - v0.8.0 : Train 싱크홀 이미지 98,435장 학습 완료
> - v0.9.0 : Validation 싱크홀 이미지 12,304장을 이용하여 학습된 이미지 11,205장에 대한 검토 완료
> - v1.0.0 : AI를 이용한 싱크홀 분석 모델 생성(싱크홀 분석 프로그램에 본 AI 모델을 적용시킬 예정)

<br>
<br>
<br>
