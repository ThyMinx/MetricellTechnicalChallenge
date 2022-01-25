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

        //Used https://sqliteonline.com/ as a simple IDE for the sql
        [Route("Increment")]
        [HttpGet] //Get
        public JsonResult Increment()
        {
            var connectionStringBuilder = new SqliteConnectionStringBuilder() { DataSource = "./SqliteDB.db" };
            using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                connection.Open();

                var queryCmd = connection.CreateCommand();
                queryCmd.CommandText = @"
                    UPDATE Employees 
                    SET Value = 
                        CASE 
                        WHEN Name LIKE 'E%' THEN Value + 1
                        WHEN Name LIKE 'G%' THEN Value + 10
                        ELSE Value + 100
                    END";
                queryCmd.ExecuteNonQuery();
            }

            return new JsonResult("Incremented Successfully");
        }

        public struct Sums
        {
            public Sums(string x, int y)
            {
                X = x;
                Y = y;
            }

            public string X { get; }
            public int Y { get; }

            public override string ToString() => $"({X}, {Y})";
        }

        //Used https://sqliteonline.com/ as a simple IDE for the sql
        [Route("SumList")]
        [HttpGet] //Get
        public JsonResult SumList()
        {
            var sums = new List<Sums>();
            var connectionStringBuilder = new SqliteConnectionStringBuilder() { DataSource = "./SqliteDB.db" };
            using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                connection.Open();

                var queryCmd = connection.CreateCommand();
                queryCmd.CommandText = @"
                    SELECT SUM(Value) AS TotalSum, 'A' as Name From Employees WHERE Name LIKE 'A%'
                    UNION
                    SELECT SUM(Value) AS TotalSum, 'B' as Name From Employees WHERE Name LIKE 'B%'
                    UNION
                    SELECT SUM(Value) AS TotalSum, 'C' as Name From Employees WHERE Name LIKE 'C%'"; 
                using (var reader = queryCmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        int value = reader.GetInt32(0);
                        string key = reader.GetString(1);
                        if(value >= 11171)
                            sums.Add(new Sums(key, value));
                    }
                }
            }

            return new JsonResult(sums);
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
