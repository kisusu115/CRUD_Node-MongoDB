const express = require("express");
const Employee = require("../models/employee.model.js");
const router = express.Router();
const {
  getAllEmployees,
  getEmployeeByFlag,
  addEmployee,
  getEmployeeWeeklySalary,
  changeEmployeeInfoById,
  deleteEmployeeInfoById,
  deleteEmployeeInfoByName,
} = require("../controllers/employee.controller.js");

//모든 직원 조회
router.get("/", getAllEmployees);

//조건에 해당하는 직원 조회
router.get("/search/:flag/:value", getEmployeeByFlag);

//직원 추가
router.post("/hire", addEmployee);

//직원 주급 계산값 리턴
router.get("/weeklySalary/:id", getEmployeeWeeklySalary);

//ID에 해당하는 직원 정보 변경
router.put("/:id", changeEmployeeInfoById);

//ID에 해당하는 직원 삭제
router.delete("/:id", deleteEmployeeInfoById);

//NAME에 해당하는 직원 삭제, 여러개의 JSON일 때는 안되겠지만, 1개만 리턴하는 그 경우에는 돌아가나? 결과 : 0번째 객체 삭제
router.delete("/byName/:name", deleteEmployeeInfoByName);

module.exports = router;
