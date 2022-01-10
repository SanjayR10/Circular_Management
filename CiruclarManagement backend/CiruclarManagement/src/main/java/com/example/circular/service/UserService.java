package com.example.circular.service;

import com.example.circular.model.User;

// import org.hibernate.query.criteria.internal.expression.function.AggregationFunction.LEAST;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

// import antlr.collections.List;

public interface UserService extends JpaRepository<User ,Integer> {

   
        // @Query(value = "SELECT * FROM USER WHERE EMAIL = ?1 AND PASSWORD=?2", nativeQuery = true)
        // User findByEmailAndPass(String email,String password);
      
       
}
