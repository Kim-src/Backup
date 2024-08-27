package com.code.bootapp.gallery.controller;

import com.code.bootapp.gallery.dto.Gallery;
import com.code.bootapp.gallery.service.GalleryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.xml.ws.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/gall")
@RequiredArgsConstructor
public class GalleryController {

    private final GalleryService service;

    @GetMapping("/list")
    public ModelAndView galleryList(@RequestParam(value = "nowPage", defaultValue = "0") int nowPage) {
        Map<String, Object> param = new HashMap<>();
        param.put("nowPage", nowPage);

        ModelAndView view = new ModelAndView();

        try {
            Gallery.GalleryData data = service.getGalleryList(param);
            view.addObject("galleryData", data);
        } catch (Exception e) {
            e.printStackTrace();
        }

        view.setViewName("views/gallery/galleryList");

        return view;
    }

    // 갤러리 등록
    @PostMapping("/add")
    @ResponseBody
    public Map<String, Object> insertGallery(@ModelAttribute Gallery.Create createDTO) {
        Map<String, Object> resultMap = new HashMap<>();

        try {
            resultMap = service.addGallery(createDTO);
        } catch (Exception e) {
            resultMap.put("resultCode", 500);
            e.printStackTrace();
        }

        return resultMap;
    }

    // 갤러리 수정
    @PutMapping("/add")
    @ResponseBody
    public Map<String, Object> updateGallery(@ModelAttribute Gallery.Create createDTO) {
        Map<String, Object> resultMap = new HashMap<>();

        try {
            resultMap = service.updateGallery(createDTO);
        } catch (Exception e) {
            resultMap.put("resultCode", 500);
            e.printStackTrace();
        }

        return resultMap;
    }

    // 갤러리 삭제
    @PostMapping("/delete")
    @ResponseBody
    // @RequestBody 사용 이유 : get으로 request 보내도, json이라서 body에 담겨있음
    // @ModelAttribute : 넘어오는 형식이 form 일 때 사용(contentType이 'www.-x-form-urlencoded'일 때)
    // @RequestBody : 넘어오는 형시기
    public Map<String, Object> deleteGallery(@RequestBody Map<String, List<Integer>> targetIds) {
        Map<String, Object> resultMap = new HashMap<>();
        // key 값 = targetIds
        List<Integer> targets = targetIds.get("targetIds");

        try {
            resultMap = service.deleteGallery(targets);
        } catch (Exception e) {
            resultMap.put("resultCode", 500);
            e.printStackTrace();
        }
        return resultMap;
    }

}
