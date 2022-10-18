package com.abhinav.employeesystem.controller;

import com.abhinav.employeesystem.model.Employee;
import com.abhinav.employeesystem.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

  //  @Autowired
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @CrossOrigin
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @CrossOrigin
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @CrossOrigin
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
      boolean deleted = false;
      deleted = employeeService.deleteEmployee(id);
      Map<String,Boolean> response = new HashMap<>();
      response.put("deleted",deleted);
      return ResponseEntity.ok(response);
    }

    @CrossOrigin
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
      Employee employee = null;
      employee = employeeService.getEmployeeById(id);
      return ResponseEntity.ok(employee);
    }

    @CrossOrigin
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,
                                                   @RequestBody Employee employee) {
      employee = employeeService.updateEmployee(id, employee);
      return ResponseEntity.ok(employee);
    }

}
