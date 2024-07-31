<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
    #drop-area {
        border: 2px dashed #ccc;
        padding: 20px;
        width: 300px;
        height: 200px;
        text-align: center;
        margin: 20px;
    }
    #drop-area.hover {
        border-color: #333;
    }
</style>
</head>
<body>
	<span id="drop-area">
    	Drop files here
	</span>
	<div id="preview"></div>
	
	<input type="file" id="location-image" multiple accept="image/*" style="display:none">
	<label class="upload-button" for="location-image">이미지를 가져오세요.</label>
</body>
<script>
    var dropArea = document.getElementById('drop-area');

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight(e) {
        dropArea.classList.add('hover');
    }

    function unhighlight(e) {
        dropArea.classList.remove('hover');
    }

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        var dt = e.dataTransfer;
        var files = dt.files;
        handleFiles(files);
    }

    function handleFiles(files) {
        files = [...files];
        files.forEach(previewFile);
    }

    function previewFile(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            let img = document.createElement('img');
            img.src = reader.result;
            document.getElementById('preview').appendChild(img);
            img.style.width = '50px';
            img.style.height = '50px';
        };
    }
</script>
</html>