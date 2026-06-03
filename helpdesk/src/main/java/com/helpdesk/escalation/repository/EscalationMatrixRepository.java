package com.helpdesk.escalation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.escalation.entity.EscalationMatrix;

public interface EscalationMatrixRepository extends JpaRepository<EscalationMatrix, Long> {

}