package com.helpdesk.approval.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.helpdesk.approval.dto.ApprovalMatrixRequest;
import com.helpdesk.approval.entity.ApprovalMatrix;
import com.helpdesk.approval.service.ApprovalService;

@RestController
@RequestMapping("/api/approvals")
public class ApprovalController {

    private final ApprovalService service;

    public ApprovalController(
            ApprovalService service) {

        this.service = service;
    }

    @PostMapping
    public ApprovalMatrix create(
            @RequestBody ApprovalMatrixRequest request) {

        return service.create(request);
    }

    @GetMapping
    public List<ApprovalMatrix> getAll() {

        return service.getAll();
    }
}