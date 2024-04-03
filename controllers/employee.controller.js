const Employee = require("../models/employee.model.js");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeByFlag = async (req, res) => {
  try {
    const params = req.params;
    let validEmployees = null;
    if (params.flag == "id") {
      validEmployees = await Employee.findById(params.value);
    } else if (params.flag == "name") {
      validEmployees = await Employee.find({ name: params.value });
    } else {
      res.status(400).json({ message: "flag 값이 잘못되었습니다." });
    }
    if (!validEmployees) {
      res.status(400).json({ message: "valid한 employee가 없습니다." });
    } else {
      res.status(200).json(validEmployees);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addEmployee = async (req, res) => {
  try {
    const newemployee = await Employee.create(req.body);
    if (!newemployee) {
      res.status(400).json({ message: "employing is failed" });
    } else {
      res.status(200).json(newemployee);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeWeeklySalary = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      res.status(404).json({ message: "employee not found." });
    } else {
      let weeklyMoney = employee.salaryPerHour * employee.workingTime;
      res.status(200).json({ weeklySalary: weeklyMoney });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const changeEmployeeInfoById = async (req, res) => {
  try {
    const { id } = req.params;
    const modifiedEmployee = Employee.findByIdAndUpdate(id, req.body);
    if (!modifiedEmployee) {
      res.status(400).json({ message: "Employee is not exist" });
    } else {
      res.status(200).json(modifiedEmployee);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmployeeInfoById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      res.status(400).json({ message: "employee is not exist" });
    } else {
      res.status(200).json(employee);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmployeeInfoByName = async (req, res) => {
  try {
    const employee = await Employee.deleteOne({ name: req.params.name });
    if (!employee) {
      res.status(404).json({ message: "employee is not found" });
    } else {
      res.status(200).json(employee);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeByFlag,
  addEmployee,
  getEmployeeWeeklySalary,
  changeEmployeeInfoById,
  deleteEmployeeInfoById,
  deleteEmployeeInfoByName,
};
