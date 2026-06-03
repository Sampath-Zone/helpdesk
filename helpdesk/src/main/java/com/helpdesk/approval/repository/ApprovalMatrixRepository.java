package com.helpdesk.approval.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.approval.entity.ApprovalMatrix;

public interface ApprovalMatrixRepository extends JpaRepository<ApprovalMatrix, Long> {

}