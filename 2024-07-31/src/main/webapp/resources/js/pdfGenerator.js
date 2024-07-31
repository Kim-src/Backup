/* PDF 변환 기능 */

// 클라이언트 사이드에서 PDF 변환 버튼을 누르면 실행되도록 설정

function getPDF() {
	if (typeof html2canvas === "undefined" || typeof jsPDF === "undefined") {
        alert("PDF 생성에 문제가 발생되었습니다. 페이지 새로고침 바랍니다.");
		return;
    }
	
    html2canvas(document.getElementById('full-document')).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
        	orientation: 'landscape',
            unit: 'mm',
            format: 'a4',
        });
	   
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth() - 30;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(imgData, 'PNG', 15, 17, pdfWidth, pdfHeight);
        pdf.save("download.pdf");
        
    }).catch(error => {
    	console.error("PDF 생성 오류 발생 : ", error);
    	alert("PDF 생성에 문제가 발생되었습니다. 콘솔창 확인 바랍니다.");
    });
}