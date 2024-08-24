package com.code.bootapp.main;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {

//    @GetMapping("/home")
//    // Model, ModelAndView, ViewResolver 객체 등으로 전달(Spring 작동 원리)
//    public String home(Model model) {
//        model.addAttribute("msg", "안녕");
//        return "home";
//    }

    @GetMapping("/home")
    public ModelAndView home() {
        ModelAndView view = new ModelAndView();
        view.setViewName("home");
//        view.addObject("msg", "안뇽");

        return view;
    }
}
