package com.helpdesk.sla.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.sla.entity.SLA;

public interface SLARepository extends JpaRepository<SLA, Long> {

}