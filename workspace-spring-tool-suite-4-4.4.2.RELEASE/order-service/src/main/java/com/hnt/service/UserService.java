package com.hnt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hnt.UserRepository;
import com.hnt.entity.User;

@Service
public class UserService {
	@Autowired
	UserService repository;
	public void save(User user) {
		repository.save(user);;
		
	}
}
