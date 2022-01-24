using InterviewTest.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using System.Collections.Generic;

namespace InterviewTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListController : ControllerBase
    {
        public ListController()
        {
        }

        /*
         * List API methods goe here
         * */

        [Route("GetEmployeeList")]
        [HttpGet] //READ - tested in postman and works.
        public JsonResult GetEmployeeList()
        {
            var employees = new List<Employee>();

            var connectionStringBuilder = new SqliteConnectionStringBuilder() { DataSource = "./SqliteDB.db" };
            using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                connection.Open();

                var queryCmd = connection.CreateCommand();
                queryCmd.CommandText = @"SELECT Name, Value FROM Employees";
                using (var reader = queryCmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        employees.Add(new Employee
                        {
                            Name = reader.GetString(0),
                            Value = reader.GetInt32(1)
                        });
                    }
                }
            }

            return new JsonResult(employees);
        }

        [Route("PutEmployee")]
        [HttpPut] //UPDATE - tested in postman and works.
        public JsonResult PutEmployee(Employee employee)
        {
            var connectionStringBuilder = new SqliteConnectionStringBuilder() { DataSource = "./SqliteDB.db" };
            using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                connection.Open();

                var queryCmd = connection.CreateCommand();
                queryCmd.CommandText = @"UPDATE Employees SET Value = " + employee.Value + @" WHERE Name = '" + employee.Name + @"'";
                queryCmd.ExecuteNonQuery();
            }

            return new JsonResult("Updated Successfully");
        }


        [Route("PostEmployee")]
        [HttpPost] //CREATE - tested in postman and works.
        public JsonResult PostEmployee(Employee employee)
        {
            var connectionStringBuilder = new SqliteConnectionStringBuilder() { DataSource = "./SqliteDB.db" };
            using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                connection.Open();

                var queryCmd = connection.CreateCommand();
                queryCmd.CommandText = @"INSERT INTO Employees VALUES ('" + employee.Name + @"', " + employee.Value + @")";
                queryCmd.ExecuteNonQuery();
            }

            return new JsonResult("Created Successfully");
        }

        [Route("DeleteEmployee/{name}")]
        [HttpDelete] //DELETE - tested in postman and works.
        public JsonResult DeleteEmployee(string name)
        {
            var connectionStringBuilder = new SqliteConnectionStringBuilder() { DataSource = "./SqliteDB.db" };
            using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                connection.Open();

                var queryCmd = connection.CreateCommand();
                queryCmd.CommandText = @"DELETE FROM Employees WHERE Name = '" + name + @"'";
                queryCmd.ExecuteNonQuery();
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
