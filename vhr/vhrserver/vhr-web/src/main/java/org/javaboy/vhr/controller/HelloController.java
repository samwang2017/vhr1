package org.javaboy.vhr.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * 实验：创建一个全新的 Controller
 * 类似于 Node.js 的 app.get('/hello', (req, res) => { ... })
 */
@RestController
public class HelloController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        Map<String, String> map = new HashMap<>();
        // 这就是你要返回的 JSON 数据结构
        map.put("message", "Hello Antigravity");
        return map;
    }
}
