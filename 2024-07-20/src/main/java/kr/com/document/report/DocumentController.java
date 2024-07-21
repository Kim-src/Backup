package kr.com.document.report;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DocumentController {
	
	@GetMapping(value="/document.do")
	public String getDocument() {
		return "document/document";
	}

}
