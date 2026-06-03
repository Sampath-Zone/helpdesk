package com.helpdesk.sla.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.helpdesk.sla.dto.SLARequest;
import com.helpdesk.sla.entity.SLA;
import com.helpdesk.sla.service.SLAService;

@RestController
@RequestMapping("/api/sla")
public class SLAController {

    private final SLAService slaService;

    public SLAController(SLAService slaService) {
        this.slaService = slaService;
    }

    @PostMapping
    public SLA createSLA(
            @RequestBody SLARequest request) {

        return slaService.createSLA(request);
    }

    @GetMapping
    public List<SLA> getAllSLA() {
        return slaService.getAllSLA();
    }
}