package com.helpdesk.tenant.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.helpdesk.tenant.dto.TenantRequest;
import com.helpdesk.tenant.dto.TenantResponse;
import com.helpdesk.tenant.entity.Tenant;
import com.helpdesk.tenant.repository.TenantRepository;

@Service
public class TenantService {

    private final TenantRepository tenantRepository;

    public TenantService(TenantRepository tenantRepository) {
        this.tenantRepository = tenantRepository;
    }
    
    private TenantResponse mapToResponse(Tenant tenant) {

        TenantResponse response =
                new TenantResponse();

        response.setId(tenant.getId());

        response.setTenantName(
                tenant.getTenantName());

        response.setContactPerson(
                tenant.getContactPerson());

        response.setEmail(
                tenant.getEmail());

        response.setPhone(
                tenant.getPhone());

        return response;
    }

    public TenantResponse createTenant(
            TenantRequest request) {

        Tenant tenant = new Tenant();

        tenant.setTenantName(
                request.getTenantName());

        tenant.setContactPerson(
                request.getContactPerson());

        tenant.setEmail(
                request.getEmail());

        tenant.setPhone(
                request.getPhone());

        Tenant savedTenant =
                tenantRepository.save(tenant);

        return mapToResponse(savedTenant);
    }

    public List<TenantResponse> getAllTenants() {

        return tenantRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }
}