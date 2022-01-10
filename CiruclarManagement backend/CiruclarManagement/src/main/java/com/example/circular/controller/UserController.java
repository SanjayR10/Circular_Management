package com.example.circular.controller;

import java.util.*;

import com.example.circular.model.Circular;
import com.example.circular.model.User;
import com.example.circular.service.CircularService;
import com.example.circular.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.MediaType;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.http.MediaType;

@RestController
public class UserController {

    @Autowired
    UserService userservice;
    @Autowired
    CircularService circularService;


    @PostMapping(path="/adduser")
	public User addUser(@RequestBody User user)
	{
		userservice.save(user);
		return user;
	}
    @PostMapping(path="/addcircular")
	public Circular addCircular(@RequestBody Circular circular)
	{
		circularService.save(circular);
		return circular;
	}

    @GetMapping(path="/getuser")
	public ArrayList<User> getUser()
	{
        return (ArrayList<User>) userservice.findAll();
	}
    @GetMapping(path="/getcircular")
	public ArrayList<Circular> getCircular()
	{
        return (ArrayList<Circular>) circularService.findAll();
	}

   



    // @PostMapping("adduser")
    // public String addUser(User user){
    //     userservice.save(user);
    //     return "hi";
    // }
}
