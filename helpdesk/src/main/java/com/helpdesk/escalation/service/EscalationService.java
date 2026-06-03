package com.helpdesk.escalation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.helpdesk.escalation.dto.EscalationMatrixRequest;
import com.helpdesk.escalation.entity.EscalationMatrix;
import com.helpdesk.escalation.repository.EscalationMatrixRepository;

@Service
public class EscalationService {

    private final EscalationMatrixRepository repository;

    public EscalationService(
            EscalationMatrixRepository repository) {

        this.repository = repository;
    }

    public EscalationMatrix create(
            EscalationMatrixRequest request) {

        EscalationMatrix matrix =
                new EscalationMatrix();

        matrix.setTicketStatus(
                request.getTicketStatus());

        matrix.setEscalationHours(
                request.getEscalationHours());

        matrix.setEscalationToRole(
                request.getEscalationToRole());

        return repository.save(matrix);
    }

    public List<EscalationMatrix> getAll() {

        return repository.findAll();
    }
}