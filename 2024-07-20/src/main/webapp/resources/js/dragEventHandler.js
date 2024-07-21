/* 드래그 업로드 기능 */

// HTML 파싱 및 DOM 트리 구축 이후 콜백 함수를 실행하도록 설정
document.addEventListener('DOMContentLoaded', function() {
	// 클래스가 img-area인 모든 HTML 요소들의 컬렉션 구축
    const uploadAreas = document.querySelectorAll('.img-area');
	// HTML 컬렉션의 각 요소에 대한 이벤트 리스너 설정
	// 개별 ID 마다의 JavaScript 코드 필요성 소멸
    uploadAreas.forEach(area => {
		/* 드래그를 이용한 파일 업로드 시스템 */
        // 정상적인 파일 드롭 기능 수행을 위한 브라우저의 기본 동작 방지
        area.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        // 정상적인 파일 드롭 기능 수행을 위한 브라우저의 기본 동작 방지
        area.addEventListener('drop', function(e) {
            e.preventDefault();
			// 파일 목록을 포함하는 files 객체 설정
			// 이벤트 발생 시 dataTransfer 객체로 데이터에 접근 
            const files = e.dataTransfer.files;
			// files 및 이미지 영역의 ID를 매개변수로 적용
			// uploadFiles 함수를 이용하여 드롭된 이미지를 페이지에 표시
            uploadFiles(files, area.id);
        });

		/* 파일 선택기를 이용한 직접적인 파일 업로드 시스템 */
		// querySelector를 이용한 area 요소의 파일 입력 필드 탐색
		// 파일 입력 필드에서 change 이벤트 발생 시 콜백 함수 실행
        area.querySelector('input[type="file"]').addEventListener('change', function(e) {
			// 이벤트 객체의 target 속성으로 파일 입력 필드 참조
            const files = e.target.files;
			// files 및 이미지 영역의 ID를 매개변수로 적용
			// uploadFiles 함수를 이용하여 드롭된 이미지를 페이지에 표시
            uploadFiles(files, area.id);
        });
    });

	// uploadFiles 함수 정의
    function uploadFiles(files, areaId) {
		// HTML 문서에서 개별 ID 요소를 dropArea 변수에 할당
        var dropArea = document.getElementById(areaId);
		// 이미지 영역 초기화 후 새 이미지 표시
        dropArea.innerHTML = '';

		// files 객체를 배열로 변환
		// 선택된 모든 파일에 대해 함수 실행
        Array.from(files).forEach(file => {
			// 파일 처리를 위한 FileReader 객체 생성
            var reader = new FileReader();
			// 파일 데이터가 로드되면 콜백 함수 호출
            reader.onload = function(e) {
				// 새로운 Image 객체 생성
                var img = new Image();
				// img 요소의 src 속성에 파일 데이터 할당
                img.src = e.target.result;
				// 이미지 클릭 시 removeImage 함수 호출
				img.onclick = removeImage;
				// img 요소의 배치 설정
                img.style.position = 'absolute';
				// img 요소의 상부 위치 설정
                img.style.top = '0';
				// img 요소의 좌측 위치 설정
                img.style.left = '0';
				// img 요소의 전체 너비 사용
                img.style.width = '100%';
				// img 요소의 전체 높이 사용
                img.style.height = '100%';
				// 설정된 이미지 요소를 dropArea 변수에 추가
                dropArea.appendChild(img);
            };
			// 데이터를 URL 형태로 변환
            reader.readAsDataURL(file);
        });
    }
	
	/* 이미지 삭제 기능 */
	// 이미지 클릭 시 실행될 removeImage 함수 정의
	function removeImage(e) {
		// 이미지 삭제 여부 대화 상자 표시
		if(confirm('이미지를 삭제하시겠습니까?')) {
			// 선택된 이미지를 img 변수에 할당
			var img = e.target;
			// 이미지 삭제 전 이미지 영역의 ID 추출
			var areaId = img.closest('.img-area').id;
			// remove 메서드를 호출하여 DOM에서 이미지 요소 삭제
			img.remove();
			// 이미지 삭제 알림창 표시
			alert('이미지가 삭제되었습니다.');
			// 이미지 삭제 후 resetDropArea 함수 호출
			resetDropArea(areaId);
		} else {
			// 이미지 삭제 취소 알림창 표시
			alert('이미지 삭제가 취소되었습니다.');
		}
	}
	
	/* 이미지 영역 리셋 기능 */
	// resetDropArea 함수 정의
	function resetDropArea(areaId) {
		// ID 요소를 dropArea 변수에 재할당
		var dropArea = document.getElementById(areaId);
		// 이미지 영역의 내부 HTML 설정
		dropArea.innerHTML = '<h4>이미지를 가져오세요.</h4>';
		
		/* file 타입의 input 요소 재생성 */
		var input = document.createElement('input');
		// input 요소의 타입 지정
		input.type = 'file';
		// input 요소의 id 지정
		input.id = areaId + '-file';
		// 여러 파일 선택이 가능하도록 설정
		input.multiple = true;
		// 모든 이미지 확장자에 대한 선택이 가능하도록 설정
		input.accept = 'image/*';
		// 이미지 요소가 표시되지 않도록 설정
		input.style.display = 'none';
		// 설정을 마친 input 요소를 dropArea 변수에 추가
		dropArea.appendChild(input);
		
		/* label 요소 재생성 */
		var label = document.createElement('label');
		// label 요소의 class 속성 설정
		label.className = 'button';
		// label 요소의 for 속성에 값 할당
		label.setAttribute('for', input.id);
		// label 요소의 텍스트 내용 설정
		label.textContent = '이미지 선택';
		// 설정을 마친 label 요소를 dropArea 변수에 추가
		dropArea.appendChild(label);
		
		/* 파일 업로드 함수 호출 */
		document.addEventListener('change', function(e) {
			// 이벤트 객체의 target 속성으로 파일 입력 필드 참조
            const files = e.target.files;
			// files 및 이미지 영역의 ID를 매개변수로 적용
			// uploadFiles 함수를 이용하여 드롭된 이미지를 페이지에 표시
            uploadFiles(files, areaId);
		});
	}
});
