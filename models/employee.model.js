const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the employee name."],
    },
    salaryPerHour: {
      type: Number,
      required: true,
    },
    workingTime: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
