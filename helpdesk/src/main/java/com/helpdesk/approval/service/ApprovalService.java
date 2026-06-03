package com.helpdesk.approval.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.helpdesk.approval.dto.ApprovalMatrixRequest;
import com.helpdesk.approval.entity.ApprovalMatrix;
import com.helpdesk.approval.repository.ApprovalMatrixRepository;

@Service
public class ApprovalService {

    private final ApprovalMatrixRepository repository;

    public ApprovalService(
            ApprovalMatrixRepository repository) {

        this.repository = repository;
    }

    public ApprovalMatrix create(
            ApprovalMatrixRequest request) {

        ApprovalMatrix matrix =
                new ApprovalMatrix();

        matrix.setLevelNumber(
                request.getLevelNumber());

        matrix.setApproverRole(
                request.getApproverRole());

        return repository.save(matrix);
    }

    public List<ApprovalMatrix> getAll() {
        return repository.findAll();
    }
}