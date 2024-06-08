---
title: 싱크홀(공동) 자동 분석 AI 모델 VisualCavity AI v0.1.0
date: 2024-02-24 18:00:00 +09:00
categories: [3. Hobby Project, VisualCavity AI]
tags: [Python, TensorFlow, AI, AI Model, Numpy, VisualCavity, VisualCavity AI, Software, SW]
---

<!-- 2024-02-19 글 작성 시작; 2024-02-20 페이지 호출 완료 -->
<h2>싱크홀(공동) 자동 분석 AI 모델 VisualCavity AI</h2>
> - Tool :  
<img alt="Google Colab" src="https://img.shields.io/badge/-Google_Colab-F9AB00?style=flat-square&logo=google-colab&logoColor=white" />
<img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" />
<img alt="tensorflow" src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat-square&logo=TensorFlow&logoColor=white" />
<img alt="Keras" src="https://img.shields.io/badge/Keras-%23D00000.svg?style=flat-square&logo=Keras&logoColor=white" />
<img alt="OpenCV" src="https://img.shields.io/badge/OpenCV-%23323330.svg?style=flat-square&logo=opencv&logoColor=white" />
<img alt="ElementTree" src="https://img.shields.io/badge/-ElementTree-blue?style=flat-square&logo=python&logoColor=white" />
<img alt="numpy" src="https://img.shields.io/badge/numpy-%23013243.svg?style=flat-square&logo=numpy&logoColor=white" />

<br>

### 🔔 1. Introduction
### 📌 모델 소개
> - 개발 환경 : Google Colab
> - 개발 목적 : GPR 데이터 분석 수준 하향
> - 개발 내용 : 싱크홀(공동) 자동 분석 프로그램(VIsualCavity) 제작을 위한 이미지 학습 AI 모델
> - 개발 역량 : Python 라이브러리, XML 파싱, AI의 이미지 학습 과정 및 딥러닝 모델 이해
> - 주요 자료 : 지하 물리 탐사로 획득한 70,732장의 싱크홀 또는 지장물 이미지

### 📌 개념 정리
> - CNN : 신경망(Convolutional Neural Network)의 축약어이며, 이미지 학습용 딥러닝의 한 종류임
> - GPR : 지하투과레이더(Ground Penetrating Radar)의 축약어이며, 지하 탐사시 사용되는 장비임
> - 싱크홀 : 전문 용어로는 공동(cavity)이라고 하며, 지면 아래에 발생된 빈 공간을 의미함
> - 지장물 : 하수도관, 상수도관, 가스관 등 지하에 매설된 무언가를 의미함
> - 맨홀: 지장물과 지상 공간을 잇는 매개체 역할을 함
> - GPR 장비를 이용한 지하 물리 탐사 모습은 아래와 같음  

<figure>
  <img src="https://github.com/Kim-src/Images/assets/150884526/826eef0b-8e0d-492c-bc45-aeac0f5a80c9" class="img" alt="figure">
  <figcaption>GPR 지하 물리 탐사 모습</figcaption>
</figure>

<br>

### 🔔 2. Methodology
### 📌 개발 환경
> - Google Colab에서 Python 코드를 작성하였습니다.
> - 주로 사용된 Python 라이브러리는 TensorFlow, OpenCV 입니다.
> - AI 학습용 이미지 데이터 출처는 과학기술정보통신부 주관의 <a href="https://www.aihub.or.kr/">AI Hub 사이트</a>입니다.

### 📌 AI 모델 구축을 위한 코딩 순서
> 1. Python 내부 라이브러리 사용
> 2. 학습시킬 싱크홀 이미지 1장에 대한 JPG 및 XML 파일의 경로 설정
> 3. 이미지 전처리를 위한 함수 정의
> 4. 이미지 로드 및 전처리를 위한 함수 작성
> 5. XML 파일에서 이미지 정보 습득을 위한 함수 정의
> 6. XML 파일을 파싱 후 데이터 추출
> 7. CNN 모델 구성(CNN : 컨볼루션 신경망 : Convolution Neural Network)
> 8. 모델 컴파일(Compile : 사람이 작성한 코드를 컴퓨터에게 이해시키는 과정)
> 9. 모델에 입력할 이미지 및 레이블 데이터 세팅
> 10. 이미지 데이터를 모델에 맞게 형태 변환
> 11. 모델 훈련(epochs 활용)

### 📌 GPR 이미지 소개
> - GPR 장비를 이용하여 파악된 지하 단면은 일부 편집이 필요합니다.
> - 왜냐하면 이미지 학습을 위한 관심 영역을 설정해야 되기 때문입니다.
> - 지하 단면의 길이는 차량형 GPR 탐사 장비가 이동한 거리 만큼입니다.
> - 예를들면 1 km의 지하 단면 이미지에서 관심있는 일부만 편집해야 됩니다.
> - 더 나아가 Bounding Box 좌표로 AI가 학습해야 될 부분을 설정해야 됩니다.
> - 아래는 GPR 장비로 파악된 "대칭형 공동(싱크홀)" 및 "맨홀(지장물)" 이미지의 예시입니다.  

<div class="image-container">
  <figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/d048da8d-c5db-47fa-ae1e-2c080ca4338a" class="img" alt="figure">
    <figcaption>공동에 대한 GPR 탐사 결과</figcaption>
  </figure>
  <figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/ff1bb03b-0237-463a-b371-5421133b8383" class="img" alt="figure">
    <figcaption>맨홀에 대한 GPR 탐사 결과</figcaption>
  </figure>
</div>


<br>

### 🔔 3. Results : 전체 코드
### 📌 이미지 학습에 사용된 코드 및 간략한 설명
> - 이미지 학습 AI 모델 구축을 위해 작성된 전체 코드는 아래와 같습니다.
> - 또한 대부분의 코드에 해당 코드 작성 이유를 서술하였습니다.

### 📌 AI 모델의 이미지 학습을 위한 Python 코드
```python
# Python 내부 라이브러리 사용
import xml.etree.ElementTree as ET  # XML 파일을 파싱하기 위한 라이브러리를 사용하였습니다.
import cv2  # 이미지 처리 및 컴퓨터 비전 작업을 위한 OpenCV 라이브러리를 사용하였습니다.
import numpy as np  # 이미지 배열을 위한 라이브러리를 사용하였습니다.
import tensorflow as tf  # 딥러닝 모델 구축을 위한 TensorFlow 라이브러리를 사용하였습니다.
from tensorflow.keras import layers, models  # 모델의 레이어를 적용하기 위해 TensorFlow의 Keras API를 사용하였습니다.
from tensorflow.keras.preprocessing import image  # 이미지 로드 및 전처리를 위한 함수를 사용하였습니다.
from tensorflow.keras.preprocessing.image import img_to_array  # 이미지를 넘파이 배열로 변환하는 함수를 사용하였습니다.

# 학습시킬 이미지 1장에 대한 JPG 및 XML 파일의 경로 설정
image_path = "/content/drive/MyDrive/MyPJT/Cavity_PJT/cavity_sample_img.jpg" # JPG 파일 경로입니다.
xml_path = "/content/drive/MyDrive/MyPJT/Cavity_PJT/cavity_sample_xml.xml" # XML 파일 경로입니다.

# 이미지 전처리를 위한 함수 정의
def preprocess_image(image_path, target_size=(256, 256)):
    img = image.load_img(image_path, target_size=target_size)  # 이미지를 로드하고 target_size로 크기를 조정하였습니다.
    img_array = img_to_array(img)  # 이미지 배열을 Numpy에 맞게 변환하였습니다.
    img_array = np.expand_dims(img_array, axis=0)  # 이미지 배열 관련 배치 차원을 추가하였습니다.
    img_array /= 255.0  # 이미지를 0과 1 사이의 값으로 정규화(중복 제거)하였습니다.
    return img_array  # 이미지 전처리가 완료되면, 전처리된 이미지의 배열을 반환하도록 함수를 정의하였습니다.

# 이미지 로드 및 전처리를 위한 함수 작성
img_array = preprocess_image(image_path) # 상기 정의한 함수에 대한 내용을 작성하였습니다.

# XML 파일에서 이미지 정보 파싱을 위한 함수 정의(파싱 : 필요한 정보를 추출하는 것)
def parse_annotation(xml_path):
    tree = ET.parse(xml_path)  # ElementTree로 XML 파일을 파싱하였습니다.
    root = tree.getroot()  # 파싱된 XML 파일에 루트 엘리먼트를 적용하였습니다.

    filename = root.find('filename').text  # 이미지의 데이터의 이름을 추출하는 함수를 작성하였습니다.
    object_name = root.find('.//object/name').text  # 객체의 이름을 추출하는 함수를 작성하였습니다.

    # 바운딩 박스 좌표 추출(ROI : Region of Interst)
    xmin = float(root.find('.//bndbox/xmin').text)
    ymin = float(root.find('.//bndbox/ymin').text)
    xmax = float(root.find('.//bndbox/xmax').text)
    ymax = float(root.find('.//bndbox/ymax').text)

    return filename, object_name, xmin, ymin, xmax, ymax # 이미지 파싱이 완료되면 관련 정보를 추출하도록 함수를 정의하였습니다.

# XML 파일을 파싱 후 데이터 추출
filename, object_name, xmin, ymin, xmax, ymax = parse_annotation(xml_path)

# CNN 모델 구성(CNN : 컨볼루션 신경망 : Convolution Neural Network)
model = models.Sequential()
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(256, 256, 3)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.Flatten())  # AI 모델에 평탄화(Flatten) 레이어를 추가하기 위해 3D 특성 맵을 1D 텐서로 평탄화하였습니다.
model.add(layers.Dense(64, activation='relu'))
model.add(layers.Dense(1, activation='sigmoid'))  # 이진 분류를 위한 출력 레이어를 추가하였습니다.

# 모델 컴파일(Compile : 사람이 작성한 코드를 컴퓨터에게 이해시키는 과정)
model.compile(optimizer='adam',
              loss='binary_crossentropy',  # 이진 분류를 위한 손실 함수를 사용하였습니다.
              metrics=['accuracy'])  # 정확도(accuracy)를 평가 지표(metrics)로 사용하였습니다.

# 모델에 입력할 이미지 및 레이블 데이터 세팅
X_train = np.array([img_array])  # 이미지 배열을 넘파이 배열로 변환하게 하였습니다.
y_train = np.array([1])  # 이진 분류의 경우 레이블을 넘파이 배열로 변환하게 하였습니다.

# 이미지 데이터를 모델에 맞게 형태 변환
X_train = np.squeeze(X_train, axis=0)

# 모델 훈련(Epochs 활용)
model.fit(X_train, y_train, epochs=5, batch_size=1)
```

<br>

### 🔔 4. Conclusions
### 📌 VisualCavity AI v0.1.0 테스트 결과 판단 방법
> - Python을 이용하여 AI 모델에게 단일 이미지를 학습시켰습니다.
> - AI 이미지 학습 결과는 Epoch로 판단할 수 있습니다.
> - Epoch=1은 머신 러닝의 신경망이 데이터 세트를 한 번 통과하는 과정을 의미합니다.
> - 본 AI 모델의 Epochs는 5로 설정했기 때문에 신경망이 전체 데이터 세트를 다섯 번 통과하였습니다.
> - 아래는 5번의 Epoch로 판단할 수 있는 AI 모델의 이미지 학습 현황입니다.

### 📌 VisualCavity AI v0.1.0 테스트 결과
> - Epoch 1/5 : AI 모델이 데이터를 2초 동안 한 번 통과하였고 정확도는 100% (= 1)입니다.
> - Epoch 2/5 : AI 모델의 학습 정확도가 100% 유지되었고 손실 정도는 0에 가깝습니다.
> - Epoch 3/5 ~ 5/5 : AI 모델의 학습 정확도가 100%이고 손실 정도는 0입니다.
> - Epoch 값 자체로만 봤을 때는 AI 모델에 이미지가 완벽히 학습되었다고 볼 수 있습니다.

### 📌 VisualCavity AI v0.1.0 테스트 결과 해석
> - 정량적인 Epoch 결과는 완벽하지만 정성적으로 평가하였을 때 이 모델은 문제가 있습니다.
> - 다양성 부족 : 이미지 데이터가 유사한 경우 AI 모델이 쉽게 데이터 패턴을 학습했을 것입니다.
> - 과적합 : AI 모델이 이미지 데이터에 과도하게 fitting 되어 있어서 일반화되지 않은 것 같습니다.
> - AI 모델의 학습 정도를 정량적으로 검토하기 위해서는 Validation 데이터 역시 활용되어야 합니다.
> - 부록 내용과 같이 AI 모델의 버전을 업그레이드하며 정량적인 평가를 할 필요성이 있습니다.
> - 다음 글에 업그레이드 버전에 대한 내용을 작성하였습니다.
> - 아래는 AI 모델의 이미지 학습 결과에 대한 출력 내용입니다.

<figure>
  <img src="https://github.com/Kim-src/Images/assets/150884526/13d1bca2-cc95-4c9f-be4c-32cb624a64f8" class="img" alt="figure">
  <figcaption>VisualCavity AI v0.1.0의 Epoch 현황</figcaption>
</figure>

<br>

### 🔔 5. Reference
### 📌 GitHub Repository 주소
> <a href="https://github.com/Kim-src/VisualCavity">싱크홀(공동) AI 자동 분석 프로그램 깃허브 링크</a>

<br>

### 🔔 6. Appendix
### 🚀 VisualCavity AI 개발 현황 (현재 ver. 0.1.0)
> - v0.1.0 : Train 싱크홀 이미지 1장 학습 완료(2024-01-09)  
>   - 기초 모델을 구축하였고 단일 싱크홀 이미지를 학습시킴  
> - v0.1.3 : 싱크홀 및 지장물 이미지에 대한 Train, Validation, Test 데이터셋 비중 조절  
>   - 기존 : Train 170,774장, Validation 21,346장
>   - 변경 : Train 134,484장, Validation 28,818장, Test 28,818장  
> - v0.1.7 : Test 데이터셋을 포함한 VisualCavity 개발 계획 재구성  
>   - 현재 : 초기 AI 모델 개발 계획  
>   - 추후 : 발전된 AI 모델 개발 계획(v0.1.7 이후 전반적인 개발 계획 변경 예정)  
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
