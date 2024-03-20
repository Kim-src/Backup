---
title: AI 싱크홀(공동) 분석 프로그램 VisualCavity v0.1.0
date: 2069-01-01 18:00:00 +09:00
categories: [VisualCavity, Desktop Application]
tags: [VisualCavity, Desktop Application, Software, Program, Software Program, AI Program]
---

<!-- 2024-03-05 글 작성 시작; 2099-01-01 페이지 호출 완료 -->
<h2>싱크홀(공동) 자동 분석 프로그램 VisualCavity</h2>

<br>

### 🔔 VisualCavity 소개
### 📌 개발 환경 및 필요한 기술
> - 개발 환경 : Eclipse
> - 개발 목적 : VisualCavity AI를 GPR 데이터 분석용 데스크톱 애플리케이션에 접목
> - 개발 내용 : GPR 데이터 분석용 자사 데스크톱 애플리케이션 프로그램
> - 개발 역량 : 도메인 지식, 프로그램 기획력, Java & Python 계열 언어 활용력
> - 비고 : 개발 완료 후 PyInstaller 등을 이용한 실행 파일(exe) 변환 필요
> - 기술 스택 :  
<img alt="Eclipse" src="https://img.shields.io/badge/-Eclipse-2C2255?style=flat-square&logo=eclipse&logoColor=white" />
<img alt="Java" src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white" />
<img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" />
<img alt="Django" src="https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django&logoColor=white" />
<img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
<img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
<img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />

<br>

### 🔔 애플리케이션의 대략적인 구조
### 📌 애플리케이션 개발 프로젝트 기획
> - Eclipse에서 데스크톱 애플리케이션을 개발하려고 합니다.
> - Spring Boot로 프로토타입을 제작 후 Spring Framework 등으로 더 발전시키려고 합니다.
> - 추후 실행 파일(exe)로 변환하려고 합니다.
> - References 이미지와 비슷한 프로그램을 제작하려고 합니다.

### 📌 애플리케이션 외부 구조
- 프로그램의 기본 구조를 구성하려고 합니다.
- 이름은 VisualCavity입니다.
- 프로그램의 대략적인 구조는 상부의 메뉴, 좌측의 패널, 우측은 이미지 공간으로 되어 있습니다.
- 프로그램의 상세한 구조는 Y축 및 X축을 기준으로 말씀드리겠습니다.

<br>

### 🔔 애플리케이션 상세 구조
### 📌 Y축 길이의 상부 5%
- 메뉴를 선택할 수 있는 공간입니다.
- 좌측부터 Logo 이미지, Home, Device, GPR, Action, Design, AI 메뉴를 생성하겠습니다.
- Logo 이미지를 제외한 나머지 메뉴는 클릭할 수 있고 프로그램의 설정을 변경할 수 있습니다.

### 📌 Y축 길이의 상부 30%
- 탐사데이터의 이름 확인란, Road View, Around View란이 있습니다.
- Road View에 보여질 것은 도로 이미지이며 이는 rst(reStructuredText) 파일로 저장되어 있습니다.
- 도로 이미지는 차량으로 촬영한 도로 바닥의 모습입니다.
- 참고로 rst 파일의 용량은 보통 100MB 정도입니다.
- Around View에 보여질 것은 풍경 이미지이며 이는 AVI 파일 내 동영상에서 이미지를 캡처하여 보여질 것입니다.
- 참고로 AVI 파일의 용량은 보통 25MB 정도입니다.
- Around View에는 차량의 앞, 뒤, 좌, 우를 촬영한 각 AVI 파일의 캡처 이미지가 보여집니다.
- 그래서 4개 구역으로 구분되어집니다.

### 📌 Y축 길이의 상부 25%
- 시각화 된 GPR데이터의 XY plane이 보여지는 공간입니다.
- 참고로 GPR데이터는 RD3 파일입니다.
- 그리고 탐사데이터의 지도가 보여지는 공간입니다.
- 참고로 지도는 Chrome HTML Document(.htm) 파일입니다.

### 📌 Y축 길이의 상부 35%
- 시각화 된 GPR데이터의 YZ plane이 보여지는 공간입니다.
- 그리고 시각화 된 GPR데이터의 XZ plane이 보여지는 공간입니다.
- 그리고 raw GPR데이터의 amplitude signals wave가 보여지는 공간입니다.
- 참고로 GPR데이터는 RD3 파일입니다.

### 📌 Y축 길이의 마지막 5%
- 데이터와 관련된 내용이 보여지는 공간입니다.
- 데이터와 관련된 내용은 탐사거리(scan distance), 마우스로 클릭한 포인트의 GPS 정보(00.00000N, 000.00000E 등), 전체 탐사거리에 대한 데이터 중 프로그램 화면에 보여진 거리(display range)입니다.

### 📌 X축 길이의 25% (좌측)
- 패널(panel) 내용입니다.
- Data Choice : 폴더 내의 원하는 탐사데이터를 선택할 수 있는 버튼입니다.
- Zero Time Alignment : 폴더 내의 GPR데이터의 채널(channels)들의 최상단의 위치를 동일선상(도로 표면과 가까운 곳)에 놓여지게 하는 버튼입니다.
- Clutter Reduction : 시각화된 GPR데이터의 노이즈를 최소화 하게 하는 버튼이며 값은 보통 '1e-05'입니다.
- Color Chart : 시각화 된 GPR 데이터의 진폭값등에 따른 색상을 기호에 맞게 선택할 수 있는 버튼입니다.
- Kalman : 노이즈를 제거할 수 있는 버튼입니다.
- Range : 시각화 된 GPR 데이터의 Range를 조절할 수 있는 버튼입니다.
- TV Gain : 시각화 된 GPR 데이터의 TV Gain을 조절할 수 있는 버튼입니다.
- Cross Line : 정확한 위치를 파악하기 위한 색상 변경이 가능한 실선을 ON/OFF 할 수 있는 버튼입니다.
- POI : Point Of Interest의 abbreviation이며, 시각화 된 GPR 데이터에서 관심있는 부분을 저장한 곳의 범위를 ON/OFF 할 수 있는 버튼입니다.

### 📌 X축 길이의 50% (중앙)
- Road View, XY plane, YZ plane이 위치하는 공간입니다.

### 📌 X축 길이의 25% (우측)
- Around View, Map, XZ plane, Amplitude Signal이 위치하는 공간입니다.

<br>

### 🔔 GPR 관련 전문 용어
### 📌 RD3 GPR데이터에 대한 GPT의 설명
- RD3 파일은 MALÅ Geoscience가 개발한 Ground Penetrating Radar (GPR) 시스템에 의해 생성된 데이터 파일 형식입니다. GPR은 지하 구조와 물체를 탐지하기 위해 전자기파를 사용하는 비파괴적 조사 기술입니다. MALÅ Geoscience는 GPR 장비와 소프트웨어를 제공하는 선도적인 회사 중 하나로, 지질학적 조사, 고고학, 건설, 환경 조사 등 다양한 분야에서 그들의 기술이 활용됩니다.
- RD3 파일에는 GPR 안테나에 의해 측정된 원시 데이터가 담겨 있습니다. 이 데이터는 특정 지하 깊이에서의 반사 신호를 포함하며, 이러한 신호는 지하의 다양한 물질과 구조물에 의해 반사되고 산란된 전자기파의 결과입니다. RD3 파일 포맷은 주로 MALÅ Geoscience의 GPR 장비에 의해 생성되며, 이 회사의 소프트웨어를 통해 열어볼 수 있습니다.
- RD3 파일에서 얻을 수 있는 정보에는 다음이 포함됩니다.
> 반사 신호의 진폭: 지하 구조물이나 물체에 의해 반사된 전자기파의 강도를 나타냅니다.
> 시간 지연: 전자기파가 송신되어 반사되어 돌아오기까지의 시간으로, 이를 통해 지하 구조물의 깊이를 추정할 수 있습니다.
> 물질의 전기적 특성: 지하 물질의 전기적 특성에 따라 전자기파의 속도와 반사 정도가 달라지므로, 이를 분석하여 지하의 다양한 물질을 식별할 수 있습니다.
- RD3 파일 데이터를 분석하고 시각화하기 위해서는 MALÅ Geoscience가 제공하는 전용 소프트웨어나 이와 호환되는 타사 분석 도구를 사용해야 합니다. 이러한 소프트웨어는 RD3 파일 내의 데이터를 그래픽으로 표현하여, 사용자가 지하 구조와 물체를 보다 쉽게 식별하고 해석할 수 있도록 도와줍니다. 고급 처리 기능을 통해 노이즈 제거, 데이터 필터링, 깊이 추정, 3D 시각화 등 다양한 분석 작업을 수행할 수 있습니다.

### 📌 Clutter Reduction에 대한 GPT의 설명
- Ground Penetrating Radar (GPR)에서 Clutter Reduction은 노이즈와 원치 않는 신호(클러터)를 줄이거나 제거하여 실제 관심 있는 반사 신호의 품질을 향상시키는 과정을 의미합니다. GPR 데이터에는 지하 구조물, 공동, 파이프라인, 지질학적 특성 등과 같은 목표 신호뿐만 아니라, 다양한 원인으로 인한 클러터도 포함될 수 있습니다. 이러한 클러터는 지표면의 불규칙성, 작은 돌멩이, 수분, 기타 지하 물체 등으로 인해 발생할 수 있으며, 분석을 방해하고 해석을 어렵게 만들 수 있습니다.
- Clutter Reduction 기술은 GPR 데이터의 해석을 용이하게 하고, 목표 신호를 더 명확하게 만들어 정확한 지하 이미징을 가능하게 합니다. 이 과정은 데이터 전처리, 신호 처리, 이미지 처리 단계에서 적용될 수 있으며, 여러 기술이 사용될 수 있습니다:
> 필터링: 고주파수 노이즈와 저주파수 노이즈를 제거하기 위해 다양한 필터(예: 고역 필터, 저역 필터, 대역 통과 필터)를 적용합니다.
> 시간-공간 처리: 데이터의 시간적 및 공간적 상관관계를 이용하여 클러터를 줄이는 기술입니다. 예를 들어, 백그라운드 제거, 마이그레이션 등이 있습니다.
> 주파수-영역 분석: 푸리에 변환과 같은 주파수-영역 분석을 통해 특정 주파수 대역의 노이즈를 식별하고 제거합니다.
> 신호 분리 기술: 원하는 신호와 클러터 신호를 분리하기 위해 통계적 방법이나 기계 학습 알고리즘을 사용하는 기술입니다.
> 다중 경로 및 반사 제거: 지표면 반사나 다중 경로 반사와 같은 특정 클러터 원인을 식별하고 제거하는 기법입니다.
- Clutter Reduction의 목적은 GPR 데이터의 품질을 향상시켜, 지하 구조와 물체를 더 정확하게 식별하고 매핑하는 것입니다. 이는 고고학적 조사, 지질학적 조사, 공사 현장의 지하 파이프라인 및 케이블 탐지, 도로 및 교량 검사 등 다양한 응용 분야에서 중요한 역할을 합니다.

### 📌 Kalman에 대한 GPT의 설명
- "Kalman" 필터는 Ground Penetrating Radar (GPR) 데이터 처리에 사용될 수 있는 알고리즘입니다. 여기서 "Kalman"은 Rudolf E. Kálmán이 개발한 Kalman 필터를 지칭합니다. 이 필터는 선형 동적 시스템의 상태를 추정하기 위해 설계된 알고리즘으로, 시간에 따라 변화하는 과정에서의 노이즈가 포함된 측정값을 기반으로 시스템의 상태를 예측하고 업데이트합니다. Kalman 필터는 신호 처리, 로봇 공학, 항공우주 공학, 그리고 GPR 데이터 분석을 포함한 다양한 분야에서 널리 사용됩니다.
- GPR 시스템은 지하 구조를 탐사하기 위해 전자기파를 사용합니다. 이때, GPR 데이터에는 반사 신호의 진폭, 시간 지연, 주파수 변화 등 다양한 정보가 포함되어 있습니다. GPR 데이터는 지하에 매장된 물체, 구조물, 또는 특징과 관련된 중요한 정보를 제공하지만, 자연적인 노이즈와 환경적 변화로 인해 신호가 왜곡될 수 있습니다.
- Kalman 필터는 이러한 GPR 데이터에서 노이즈를 제거하고, 신호의 질을 향상시키는 데 사용될 수 있습니다. 예를 들어, GPR로부터 얻은 시간에 따른 신호의 진폭 값이 있을 때, Kalman 필터는 예측 모델과 측정된 데이터를 결합하여 신호의 진폭에 대한 더 정확한 추정값을 제공할 수 있습니다. 이는 지하 구조물의 탐지와 식별, 그리고 지하 특성의 정밀한 매핑에 기여할 수 있습니다.
- 직접적으로 진폭 값과 관련하여, Kalman 필터는 진폭의 변화를 추적하고 예측하는 데 사용될 수 있으며, 이는 신호에서 유의미한 정보를 분리하고 해석하는 데 도움을 줄 수 있습니다. 따라서, Kalman 필터는 GPR 데이터의 분석과 해석 과정에서 중요한 역할을 할 수 있으며, 지하 구조와 물체의 정확한 탐사 및 분석에 기여할 수 있습니다.

### 📌 Range 및 TV Gain에 대한 GPT의 설명
- Ground Penetrating Radar (GPR)에서 "range"와 "Time-Varying Gain (TVG)"는 중요한 개념이며, 실제로 진폭 값에 영향을 미칩니다. 이러한 설정은 GPR 데이터의 해석과 이미지의 품질을 향상시키는 데 도움이 됩니다.
#### ✔ Range
- "Range"는 GPR 시스템이 탐지할 수 있는 최대 깊이를 의미합니다. 이는 GPR 장비가 발신하는 전자기파의 펄스가 지하로 투과한 후 반사되어 돌아오는 시간을 기반으로 계산됩니다. Range가 길어질수록 더 깊은 지하 구조를 탐사할 수 있지만, 이는 동시에 신호의 감쇠도 증가시키므로, 신호의 진폭이 감소하게 됩니다. 따라서, 적절한 range 설정은 탐사 목적과 지하 매체의 특성을 고려하여 결정되어야 합니다.
#### ✔ Time-Varying Gain (TVG)
- "Time-Varying Gain" (TVG)은 시간 또는 깊이에 따라 신호의 진폭을 조절하는 기술입니다. GPR 신호는 깊이가 증가함에 따라 감쇠되므로, TVG는 이러한 감쇠를 보상하기 위해 사용됩니다. TVG 설정을 높이면, 특히 심층에서 반사된 약한 신호의 진폭이 증가하여, 신호가 더 뚜렷하게 보이게 됩니다. 이는 심층의 작은 구조물이나 물체를 더 쉽게 식별할 수 있게 해주지만, 너무 과도한 gain은 노이즈를 증폭시킬 수 있으므로 주의해야 합니다.
#### ✔ 진폭 값의 변화
- Range와 TVG 설정은 실제로 GPR 데이터의 진폭 값을 변경합니다. Range 설정은 탐사 깊이를 결정하며, 깊이에 따른 신호의 감쇠량을 결정합니다. TVG는 이 감쇠를 보상하여, 깊은 신호의 진폭을 증가시키는 역할을 합니다. 따라서, 이 두 설정을 조절함으로써, GPR 데이터의 질과 신호의 가시성을 개선할 수 있습니다. 올바른 설정은 탐사 목적, 지하 조건, 그리고 관심 있는 지하 구조의 깊이와 크기에 따라 달라집니다.

<br>
<br>
<br>
