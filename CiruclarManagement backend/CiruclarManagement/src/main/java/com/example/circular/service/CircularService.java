package com.example.circular.service;
import com.example.circular.model.Circular;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CircularService extends JpaRepository<Circular,Integer> {
    

}
