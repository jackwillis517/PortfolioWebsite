import hr2 from "./HRImages/hr2.png";
import hr3 from "./HRImages/hr3.png";
import hr4 from "./HRImages/hr4.png";
import hr5 from "./HRImages/hr5.png";
import report from "./Documents/Project 2 Report.pdf";
import { motion } from "framer-motion";

function HRDatabaseProjectInfo() {
  return (
    <div className="overflow-hidden no-scrollbar">
      <div className="flex m-auto bg-zinc-900 justify-center text-white">
        <div className="lg:max-w-standard font-hind">
          <div className="flex flex-col">
            <motion.div
              transition={{ y: { duration: 1 }, delay: 0.1 }}
              initial={{ y: "-100%" }}
              animate={{ y: "0vh" }}
              className="basis-1/4 p-12 pb-6 mx-64 mb-16 rounded-sm bg-zinc-800"
            >
              <div className="flex flex-col">
                <div className="basis-2/4 lg:mb-16 mb-8">
                  <h1 className="lg:text-5xl text-3xl font-bold lg:mb-10 mb-5 text-[#e85b49]">
                    Human Resources Database
                  </h1>
                  <p className="lg:text-xl text-md">
                    This database was the final project for the Database Design
                    and Implementation course I took at Syracuse University.
                    This project was the culmination of all of the topics we
                    covered in the class and required everything from design to
                    implementing the SQL Code. We had to support all of the data
                    involved in hiring and onboarding potential employees for a
                    ficticous company. My design included 25 different tables
                    and required the creation of numerious SQL DML and DDL
                    statements as well as the consideration of server and
                    database security as well as a number of table relations
                    requiring referenetial integrity. For more details, feel
                    free to download my final report for the project below.
                  </p>
                </div>
                <div className="flex flex-row basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-3xl text-xl">
                    <a className="lg:text-4xl text-2xl font-bold">Stack: </a>
                    MS SQL
                  </h1>
                </div>
                <div className="flex flex-col basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-4xl text-2xl font-bold">
                    Topics Covered:
                  </h1>
                  <div className="lg:text-xl text-md pl-8">
                    <ol className="list-disc">
                      <li>DML Statements</li>
                      <li>DDL Statements</li>
                      <li>E/R Diagrams</li>
                      <li>Database Implementation</li>
                      <li>
                        User defined functions, scripts, stored procedures &
                        triggers
                      </li>
                      <li>Server & Database Security</li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-row basis-1/4 place-self-center">
                  <a
                    href={report}
                    download="Human Resources Database Final Report.pdf"
                    className="bg-[#e85b49] lg:mr-0 mr-5 rounded py-3 px-5 hover:-translate-y-1 hover:scale-110 hover:bg-[#d63e2a] ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black"
                  >
                    Final Report
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "-100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                E/R Diagram
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                Most of the time spent I spent on this project was spent on
                design, creating enough tables to track the necessary
                information as well as the relationships between tables with
                foreign and primary key definitions. The top of this diagram
                deals with jobs and onboarding and the center portion of it
                deals with important information regarding the interview process
                like: candidates, interviews, applications, interviewers and
                tests. The left and right portions of this diagram deal mostly
                in secondary information that's related to the hiring process
                like travel accommodations and background checks.
              </h1>
              <img src={hr2} alt="hr2" className="lg:pb-10 pb-5" />
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col rounded-l-md basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                DDL Statement Example
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                Below is a SQL code snippet of two of the data definition
                statements required by the project, these statements are used to
                create the tables where information will be stored and performs
                validation on that data to ensure inputted data is accurate. The
                top part of this image creates a table for the Job Openings
                Table which contains all job positions that a candidate could
                apply to at the company. A majority of the data here is of the
                int type and is metadata relating to a specific job like the job
                opening id, the number of open positions, and the number of
                applications. Towards the end we see more specific data which is
                validated with the CHECK statement, essentially the job type,
                platform, and category must match the ones in the CATCH clause.
                This ensures someone entering the data doesn't make mistakes and
                other tables dependent on this one know what to look for.
              </h1>
              <img src={hr3} alt="test" className="lg:pb-10 pb-5" />
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "-100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col rounded-r-md basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                Trigger Example
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                This is an example of one of the five triggers I wrote for this
                database, triggers are scripts that automatically run after a
                certain event is fired. In this trigger specifically, when an
                offer is created for a candidate a background check and document
                check are performed. Checking to ensure a candidate who is being
                extended an offer passes a background check and submitted
                accurate information like a resume and CV. If either of these
                conditions is not met the candidate's status is moved to on-call
                for the next opportunity.
              </h1>
              <img src={hr4} alt="CI" className="lg:pb-10 pb-5" />
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col rounded-l-md basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                Security Script
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                For this project, I wrote a number of scripts that would be run
                on the database providing security privileges to specific users.
                In this example, I'm giving a user John Doe a login for the
                server and a username for the database. This user will be
                allowed to perform changes to the Interviews, Evaluation and
                Interview Reviews tables along with global data reading
                privileges of the database.
              </h1>
              <img src={hr5} alt="test" className="lg:pb-10 pb-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRDatabaseProjectInfo;
