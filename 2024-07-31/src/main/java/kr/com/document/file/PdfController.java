package kr.com.document.file;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.itextpdf.html2pdf.ConverterProperties;
import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.html2pdf.resolver.font.DefaultFontProvider;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.PdfPage;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.layout.font.FontProvider;

@Controller
public class PdfController {

    @Autowired
    private ServletContext servletContext;
    private static final Logger logger = LoggerFactory.getLogger(PdfController.class);

    @GetMapping("/pdf.do")
    public void downloadPdf(HttpServletResponse response) {
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "attachment; filename=\"document.pdf\"");

        String fullPath = servletContext.getRealPath("/WEB-INF/views/document.html");
        Path path = Paths.get(fullPath);
        File fontFile = new File(servletContext.getRealPath("/resources/fonts/ChosunNm.ttf"));

        if (!Files.exists(path)) {
            logger.error("File not found: " + fullPath);
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        try (PdfWriter writer = new PdfWriter(response.getOutputStream());
             FileInputStream htmlSource = new FileInputStream(fullPath)) {
            ConverterProperties properties = new ConverterProperties();
            FontProvider fontProvider = new DefaultFontProvider(false, false, false);
            fontProvider.addFont(fontFile.getAbsolutePath());
            properties.setFontProvider(fontProvider);
            PdfDocument pdfDocument = new PdfDocument(writer);
            pdfDocument.setDefaultPageSize(PageSize.A4.rotate());
            HtmlConverter.convertToPdf(htmlSource, pdfDocument, properties);
        } catch (IOException e) {
            logger.error("IO Error occurred: " + e.getMessage(), e);
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            logger.error("Unexpected error occurred: " + e.getMessage(), e);
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
    }
}
