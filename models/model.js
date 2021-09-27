const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  Id: {
    type: String,
  },
  name: {
    type: String,
  },
  yearOfBatch: {
    type: String,
  },
  college_id:{
    type: String,
  },
  skills:{
    type: [String],
  },

});

const CollegeSchema = new Schema({
  Id: {
    type: String,
  },
  name: {
    type: String,
  },
  yearFounded: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  noOfStudents: {
    type: String,
  },
  courses: {
    type: [String],
  }
});

College = mongoose.model("college", CollegeSchema);
Student = mongoose.model("student", StudentSchema);

module.exports = College;
module.exports = Student;
