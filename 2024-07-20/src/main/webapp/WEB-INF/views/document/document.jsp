<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>js-document</title>
<!-- 테이블 규격 -->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/tableSet.css">
<!-- 요소 아이디별 이미지 스타일 -->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/cssLocation.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/cssFront.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/cssBack.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/cssLeft.css">
<style>
	/* 기본 스타일 */
	@font-face {
        font-family: "NanumMyeongjo";
        src: url("resources/fonts/NanumMyeongjo.otf") format("truetype");
    }
    
	body {
		margin: 0;
		padding: 0;
		font-family: "NanumMyeongjo", NanumMyeongjo;
	}
	
	img {
		margin: 0;
		padding: 0;
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.main {
		justify-content: center;
		display: flex;
	}
		
	.table {
		table-layout: auto;
		border-bottom: 1px solid black;
		border-collapse: collapse;
		border-spacing: 0;
	}
	
	.inner-table {
		font-size: 10pt;
		position: absolute;
		background-color: white;
		border-collapse: collapse;
		margin-top: -8mm;
		margin-left: 214.85mm;
		z-index: 1;
	}
	
	.table td {
		border: 1px solid black;
		padding: 0;
	}
	
	
	
	/* 세부 스타일 */
	.title {
		position: relative;
		width: 266.06mm;
		height: 11.4mm;
		font-size: 17pt;
		text-align: center;
		border: none;
	}
	.title::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 1.5mm;
		border-bottom: 1.2px solid black;
		width: 17%;
		margin: 0 auto;
	}
	.title::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 1.2mm;
		border-bottom: 1.2px solid black;
		width: 17%;
		margin: 0 auto;
	}
	
	.sub-title {
		background-color: #f2f2f2;
	}
	
	.document-text td {
		text-align: center;
		white-space: nowrap;
	}
	
	.strong-row td {
		background-color: #f2f2f2;
	}
	
	.button {
	  display: inline-block;
	  margin: 0;
	  padding: 0;
	  background: #ccc;
	  cursor: pointer;
	  border-radius: 5px;
	  border: 1px solid #ccc;
	}
	
	.button:hover {
	  background: #ddd;
	}
</style>
</head>
<body>
	<button onclick="getPDF();">PDF 변환</button>
	<section class="container">
		<div class="main" id="full-document">
			<table class="table total-size">
				<tbody class="document-text">
					<tr>
						<th colspan="11" class="title"><strong>분석 공동조사서</strong>
							<table class="inner-table">
								<tr>
									<td class="record-1"><strong>공동관리번호</strong></td>
									<td class="record-1"></td>
								</tr>
							</table>
						</th>
					</tr>
					<tr>
						<td colspan="1" class="record-2-1" class="sub-title">탐사 / 천공</td>
						<td colspan="1" class="record-2-2">탐사일  2022.02.15 / 천공일 -</td>
						<td colspan="1" class="record-2-3" rowspan="4">위<br><br><br>치</td>
						<td colspan="1" class="record-2-4"class="sub-title">위도</td>
						<td colspan="1" class="record-2-5">37.816955</td>
						<td colspan="1" class="record-2-6" rowspan="4">공<span class="gap-2-6"></span>동<span class="gap-2-6"></span>규<span class="gap-2-6"></span>모</td>
						<td colspan="1" class="record-2-7" class="sub-title">토피(㎝)</td>
						<td colspan="1" class="record-2-8">53</td>
						<td colspan="1" class="record-2-9" rowspan="2">공동<span class="gap-2-9"></span>관리</td>
						<td colspan="1" class="record-2-10 sub-title">번호</td>
						<td colspan="1" class="record-2-11">-</td>
					</tr>
					<tr>
						<td colspan="1" class="record-2-1" class="sub-title">관  할  구</td>
						<td colspan="1" class="record-2-2">백석읍</td>
						<td colspan="1" class="record-2-4" class="sub-title">경도</td>
						<td colspan="1" class="record-2-5">126.947396</td>
						<td colspan="1" class="record-2-7" class="sub-title">도로종단 길이(㎝)</td>
						<td colspan="1" class="record-2-8">95</td>
						<td colspan="1" class="record-2-10 sub-title">등급</td>
						<td colspan="1" class="record-2-11">-</td>
					</tr>
					<tr>
						<td colspan="1" class="record-2-1" class="sub-title">도로명 주소</td>
						<td colspan="1" class="record-2-2">연곡리 327</td>
						<td colspan="1" class="record-2-4" class="sub-title">차선</td>
						<td colspan="1" class="record-2-5">중앙선 기준 1차로</td>
						<td colspan="1" class="record-2-7" class="sub-title">도로횡단 폭(㎝)</td>
						<td colspan="1" class="record-2-8">69</td>
						<td colspan="1" class="record-2-9" rowspan="2">분석<span class="gap-2-9"></span>공동</td>
						<td colspan="1" class="record-2-10 sub-title">번호</td>
						<td colspan="1" class="record-2-11">038-1</td>
					</tr>
					<tr>
						<td colspan="1" class="record-2-1" class="sub-title">탐 사 방 향</td>
						<td colspan="1" class="record-2-2">비암리 29-1→연곡리 327-2</td>
						<td colspan="1" class="record-2-4" class="sub-title">지점</td>
						<td colspan="1" class="record-2-5">정지선 후방 8.91m</td>
						<td colspan="1" class="record-2-7" class="sub-title">바닥 깊이(㎝)</td>
						<td colspan="1" class="record-2-8">-</td>
						<td colspan="1" class="record-2-10 sub-title">등급</td>
						<td colspan="1" class="record-2-11">-</td>
					</tr>


					<!-- location data -->
					<tr class="strong-row">
						<td colspan="5" class="record-3-1"><strong>공동 위치도</strong></td>
						<td colspan="6" class="record-3-2" colspan="2"><strong>공동 주변사진</strong></td>
					</tr>
					<tr>
						<td colspan="5" class="record-4-1 img-area" id="css-location" rowspan="2">
							<div>
								<h4>이미지를 가져오세요.</h4>
								<input type="file" id="img-location" multiple accept="image/*" style="display: none">
								<label class="button" for="img-location">이미지 선택</label>
							</div>
						</td>
						<td colspan="3" class="record-4-2 img-area" id="css-front">
							<div>
								<h4>이미지를 가져오세요.</h4>
								<input type="file" id="img-front" multiple accept="image/*" style="display: none">
								<label class="button" for="img-front">이미지 선택</label>
							</div>
						</td>
						<td colspan="3" class="record-4-2 img-area" id="css-back">
							<div>
								<h4>이미지를 가져오세요.</h4>
								<input type="file" id="img-back" multiple accept="image/*" style="display: none">
								<label class="button" for="img-back">이미지 선택</label>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="3" class="record-4-2 img-area" id="css-left">
							<div>
								<h4>이미지를 가져오세요.</h4>
								<input type="file" id="img-left" multiple accept="image/*" style="display: none">
								<label class="button" for="img-left">이미지 선택</label>
							</div>
						</td>
						<td colspan="3" class="record-4-2 img-area" id="css-right">
							<div>
								<h4>이미지를 가져오세요.</h4>
								<input type="file" id="img-right" multiple accept="image/*" style="display: none">
								<label class="button" for="img-right">이미지 선택</label>
							</div>
						</td>
					</tr>


					<!-- cavity data -->
					<tr class="strong-row">
						<td colspan="3" class="record-5-1" rowspan="2"><strong>(상단) 탐사영상 평면 / (하단) 노면영상</strong></td>
						<td colspan="5" class="record-5-2"><strong>탐사영상 수직단면</strong></td>
						<td colspan="3" class="record-5-3" rowspan="2"><strong>공동확인 내시경 영상</strong></td>
					</tr>
					<tr class="strong-row">
						<td colspan="2" class="record-5-4"><strong>종단면</strong></td>
						<td colspan="3" class="record-5-4"><strong>횡단면</strong></td>
					</tr>
					<tr>
						<td colspan="3" class="record-6-1">
							<div>
								<h3>이미지를 가져오세요.</h3>
								<input type="file" id="img-flat-section" multiple accept="image/*" style="display: none">
								<label class="button" for="img-flat-section">이미지 선택</label>
							</div>
						</td>
						<td colspan="2" class="record-6-2" rowspan="2"><img src="resources/images/long-section.jpg" alt="long-section"></td>
						<td colspan="3" class="record-6-2" rowspan="2"><img src="resources/images/cross-section.jpg" alt="cross-section"></td>
						<td colspan="3" class="record-6-3" rowspan="2"><img src="resources/images/cavity.jpg" alt="cavity"></td>
					</tr>
					<tr>
						<td colspan="3" class="record-6-4"><img src="resources/images/surface.jpg" alt="surface"></td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</body>
<!-- 클라이언트 사이드에서의 PDF 변환 기능 -->
<script src="resources/lib/jspdf.min.js"></script>
<script src="resources/lib/html2canvas.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/pdfGenerator.js"></script>
<!-- 드래그를 이용한 이미지 업로드 기능 -->
<script src="${pageContext.request.contextPath}/resources/js/dragEventHandler.js"></script>
</html>
