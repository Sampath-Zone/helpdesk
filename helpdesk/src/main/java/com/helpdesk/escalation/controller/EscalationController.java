package com.helpdesk.escalation.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.helpdesk.escalation.dto.EscalationMatrixRequest;
import com.helpdesk.escalation.entity.EscalationMatrix;
import com.helpdesk.escalation.service.EscalationService;

@RestController
@RequestMapping("/api/escalations")
public class EscalationController {

    private final EscalationService service;

    public EscalationController(
            EscalationService service) {

        this.service = service;
    }

    @PostMapping
    public EscalationMatrix create(
            @RequestBody EscalationMatrixRequest request) {

        return service.create(request);
    }

    @GetMapping
    public List<EscalationMatrix> getAll() {

        return service.getAll();
    }
}