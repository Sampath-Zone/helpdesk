package com.helpdesk.category.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.helpdesk.category.dto.CategoryRequest;
import com.helpdesk.category.dto.CategoryResponse;
import com.helpdesk.category.entity.Category;
import com.helpdesk.category.repository.CategoryRepository;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    private CategoryResponse mapToResponse(
            Category category) {

        CategoryResponse response =
                new CategoryResponse();

        response.setId(category.getId());
        response.setName(category.getName());
        response.setDescription(
                category.getDescription());

        return response;
    }
    public CategoryResponse createCategory(CategoryRequest request) {

        Category category = new Category();

        category.setName(request.getName());
        category.setDescription(request.getDescription());

        Category saved= categoryRepository.save(category);
        return mapToResponse(saved);
    }

    public List<CategoryResponse> getAllCategories() {
        return categoryRepository.findAll().stream()
        		.map(this::mapToResponse)
        		.toList();
    }

    public CategoryResponse updateCategory(Long id,
                                   CategoryRequest request) {

        Category category =
                categoryRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException("Category not found"));

        category.setName(request.getName());
        category.setDescription(request.getDescription());

        Category saved= categoryRepository.save(category);
        return mapToResponse(category);
    }

    public void deleteCategory(Long id) {

        categoryRepository.deleteById(id);
    }
}