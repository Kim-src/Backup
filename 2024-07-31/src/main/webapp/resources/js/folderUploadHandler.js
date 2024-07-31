document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('folder-input').addEventListener('change', function(event) {
        const files = event.target.files;

        // 파일이 업로드될 위치의 ID를 파일 이름과 매핑
        const fileToIdMap = {
            'front.png': 'img-front',
            'left.png': 'img-left',
            'map.png': 'img-location',
            'rear.png': 'img-back',
            'right.png': 'img-right',
            'road.png': 'img-surface',
            'xy.png': 'img-flat-section',
            'xz.png': 'img-cross-section',
            'yz.png': 'img-long-section'
        };

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
			// 파일 이름을 소문자로 변환
            let fileName = file.name.toLowerCase();

            // 파일 이름에 해당하는 업로드 위치 ID가 있는지 확인
            if (fileToIdMap.hasOwnProperty(fileName) && file.type.startsWith('image/*')) {
				let imgId = fileToIdMap[fileName];
                let imgElement = document.getElementById(imgId);

                // 해당하는 img 요소에 이미지 URL 설정
                if (imgElement) {
                    imgElement.src = URL.createObjectURL(file);
                    imgElement.onload = function() {
                        URL.revokeObjectURL(this.src); // 메모리 해제
                    };
                }
            }
        }
    });
});
