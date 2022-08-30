package com.hnt.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.hnt.entity.User;

@Service
public class UserService {
	@Autowired
	UserService repository;
	
	public User save(User user) {
		if (user.getName().equals("Ram"))
			throw new IllegalArgumentException("message");
		else
		repository.save(user);
	return user;
		
	}
	public Iterable<User> getUser() {
		 return repository.findAll();

}
	private Iterable<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
}
	
	

