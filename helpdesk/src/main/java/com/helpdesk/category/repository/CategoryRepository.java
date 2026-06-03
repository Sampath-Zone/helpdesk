package com.helpdesk.category.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.category.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}