<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<style>
	#drop-area {
		margin: 0;
		padding: 0;
		cursor: pointer;		
		text-align: center;
		color: black;
		font-weight: normal;
		font-family: Arial, sans-serif;
		position: relative;
	}
	#drop-area:hover {
		background: skyblue;
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
	
	.record-4-1 {
		width: 169.34mm;
		height: 57.08mm;
	}
</style>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="drop-area" class="record-4-1">
	  <h3>이미지를 가져오세요.</h3>
	  <input type="file" id="fileElement" multiple accept="image/*" style="display: none">
	  <label class="button" for="fileElement">이미지 선택</label>
	</div>
</body>
<script>
	document.getElementById('drop-area').ondragover = function(e) {
	  e.preventDefault();
	};
	
	document.getElementById('drop-area').ondrop = function(e) {
	  e.preventDefault();
	  var files = e.dataTransfer.files;
	  uploadFiles(files);
	};
	
	// 이벤트 리스너를 input 요소에 연결
	document.getElementById('fileElement').addEventListener('change', function(e) {
		var files = e.target.files;
		uploadFiles(files);
	});
	
	function uploadFiles(files) {
		var dropArea = document.getElementById('drop-area');
		var record41 = document.querySelector('.record-4-1');
		// width, height 적용
		var width = window.getComputedStyle(record41).width;
		var height = window.getComputedStyle(record41).height;
		// 초기 내용 제거
		dropArea.innerHTML = '';
		
	  for (var i = 0; i < files.length; i++) {
	    var file = files[i];
	    var reader = new FileReader();
	    reader.onload = function(e) {
	      var img = new Image();
	      img.id = 'uploaded-img';
	      img.src = e.target.result;
	      img.onclick = removeImage;
	      img.style.position = 'absolute';
	      // 이미지 상단 정렬
	      img.style.top = '0';
	      // 이미지 좌측 정렬
	      img.style.left = '0';
	      dropArea.style.width = width;
	      dropArea.style.height = height;
	      dropArea.appendChild(img);
	    };
	    reader.readAsDataURL(file);
	  }
	}
	
	
	/* 이미지 삭제 */
	// 이미지가 있다면 영역 전체 중 어느 한 곳을 클릭하더라도 confirm 질문이 나오도록 코딩 추가 필요
	function removeImage(e) {
		if(confirm('이미지를 삭제하시겠습니까?')) {
			var img = e.target;
			img.remove();
			alert('이미지가 삭제되었습니다.');
			resetDropArea();
		} else {
			alert('이미지 삭제가 취소되었습니다.');
		}
	}
	
	
	/* 드래그 영역 리셋 */
	function resetDropArea() {
		var dropArea = document.getElementById('drop-area');
		dropArea.innerHTML = '<h3>이미지를 가져오세요.</h3>';
		
		// input 요소 재생성
		var input = document.createElement('input');
		input.type = 'file';
		input.id = 'fileElement';
		input.multiple = true;
		input.accept = 'image/*';
		input.style.display = 'none';
		dropArea.appendChild(input);
		
		// label 요소 재생성
		var label = document.createElement('label');
		label.className = 'button';
		label.setAttribute('for', 'fileElement');
		label.textContent = '이미지 선택';
		dropArea.appendChild(label);
		
		// 이벤트 리스너를 input 요소에 재연결
		document.getElementById('fileElement').addEventListener('change', function(e) {
			var files = e.target.files;
			uploadFiles(files);
		});
	}
</script>

</html>