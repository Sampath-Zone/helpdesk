package com.helpdesk.user.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.helpdesk.user.dto.CreateUserRequest;
import com.helpdesk.user.dto.UserResponse;
import com.helpdesk.user.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(
            UserService userService) {

        this.userService = userService;
    }

    @GetMapping
    public List<UserResponse> getAllUsers() {

        return userService.getAllUsers();
    }

    @PostMapping
    public UserResponse createUser(
            @RequestBody CreateUserRequest request) {

        return userService.createUser(
                request);
    }
}