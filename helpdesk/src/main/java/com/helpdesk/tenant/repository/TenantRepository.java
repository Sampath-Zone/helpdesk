package com.helpdesk.tenant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.tenant.entity.Tenant;

public interface TenantRepository extends JpaRepository<Tenant, Long> {

}