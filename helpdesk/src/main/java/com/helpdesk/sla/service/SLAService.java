package com.helpdesk.sla.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.helpdesk.category.entity.Category;
import com.helpdesk.category.repository.CategoryRepository;
import com.helpdesk.sla.dto.SLARequest;
import com.helpdesk.sla.entity.SLA;
import com.helpdesk.sla.repository.SLARepository;

@Service
public class SLAService {

    private final SLARepository slaRepository;
    private final CategoryRepository categoryRepository;

    public SLAService(
            SLARepository slaRepository,
            CategoryRepository categoryRepository) {

        this.slaRepository = slaRepository;
        this.categoryRepository = categoryRepository;
    }

    public SLA createSLA(SLARequest request) {

        Category category = categoryRepository
                .findById(request.getCategoryId())
                .orElseThrow(() ->
                        new RuntimeException("Category not found"));

        SLA sla = new SLA();

        sla.setCategory(category);
        sla.setResponseTimeHours(
                request.getResponseTimeHours());
        sla.setResolutionTimeHours(
                request.getResolutionTimeHours());

        return slaRepository.save(sla);
    }

    public List<SLA> getAllSLA() {
        return slaRepository.findAll();
    }
}