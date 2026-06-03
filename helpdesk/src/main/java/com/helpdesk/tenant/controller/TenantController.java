package com.helpdesk.tenant.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.helpdesk.tenant.dto.TenantRequest;
import com.helpdesk.tenant.dto.TenantResponse;
import com.helpdesk.tenant.entity.Tenant;
import com.helpdesk.tenant.service.TenantService;

@RestController
@RequestMapping("/api/tenants")
public class TenantController {

    private final TenantService tenantService;

    public TenantController(TenantService tenantService) {
        this.tenantService = tenantService;
    }

    @PostMapping
    public TenantResponse createTenant(
            @RequestBody TenantRequest request) {

        return tenantService.createTenant(request);
    }

    @GetMapping
    public List<TenantResponse> getAllTenants() {

        return tenantService.getAllTenants();
    }
}