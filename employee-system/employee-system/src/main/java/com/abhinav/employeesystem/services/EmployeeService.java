package com.abhinav.employeesystem.services;

import com.abhinav.employeesystem.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee getEmployeeById(Long id);

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
