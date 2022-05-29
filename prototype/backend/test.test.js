// Kareem Darghous
<<<<<<< HEAD
const unionFunctions = require('./union-services.js');
const userFunctions = require('./user-services.js');
const unionData = require('./data/uniondata.jsx');
=======
const myFunctions = require('./union-services.js');
const userFunctions = require('./user-services.js');

>>>>>>> origin/main
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const UserSchema = require("./user");
const dotenv = require("dotenv");
const { default: majorUnions } = require('./data/uniondata');
dotenv.config();

let dbConnection;


function getDbConnection() {
  const uri = process.env.MONGO_URI;
  //const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  /*client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
  });*/

  if (!dbConnection) {
      dbConnection = mongoose.createConnection(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
  }
  return dbConnection;
}

test("Testing get users", async () => {
  const name = "jeff";
  const job = undefined
  const users = await userFunctions.getUsers(name,job);
  expect(users).toBeDefined();
});

test('Testing findUserByName -- success', async () => {
  const name = "charles";
<<<<<<< HEAD
  const result = await unionFunctions.findUnionByName(name);
=======
  const result = await myFunctions.findUnionByName(name);
>>>>>>> origin/main
  expect(result).toBeDefined
  expect(result).toBeTruthy

});

test('Testing findUserByID -- success', async () => {
  const id = "6345649bf6b835f78b1b465f";
  const result = await userFunctions.findUserById(id);
  //expect(result).toBeDefined();
  expect(result).toBeDefined;
  expect(result).toBeTruthy
});

test('Testing findUserByJob -- success', async () => {
  const job = "jober";
  const result = await userFunctions.findUserByJob(job)
  expect(result).toBeDefined
  expect(result).toBeTruthy


});


<<<<<<< HEAD
const unionListData = [
  {"taxID": "94-0294755", "employee": {"jobTitle": "President and CEO, Lincoln Child Center", "@type": "Person", "name": "Christine Stoner-Mertz"}, "name": "Industrial Employers and Distributors Association", "numberOfEmployees": 17, "address": {"addressLocality": "Emeryville", "addressRegion": "CA", "streetAddress": "2200 Powell Street No 1000", "postalCode": "94608", "@type": "PostalAddress"}, "sameAs": ["https://www.ieda.com/"], "@context": "http://schema.org", "foundingDate": 1937, "@type": "Organization", "description": "To act as a collective bargaining representative for public and private sector Employers. Collective bargaining representatives."}
  ,{"ProgramAreas": "Program areas at Industrial Employers and Distributors AssociationRepresented public and private sector Employers."},
  
  {"description": "The mission of  Operating Engineers Local 3 is to organize workers for their economic and social advancement.", "numberOfEmployees": 223, "sameAs": ["https://www.oe3.org/"], "foundingDate": 1939, "telephone": "510-748-7400", "address": {"addressLocality": "Alameda", "addressRegion": "CA", "streetAddress": "1620 S Loop Rd", "postalCode": "94502", "@type": "PostalAddress"}, "name": "Operating Engineers Local 3 (OE3)", "taxID": "94-0577785", "employee": {"jobTitle": "President", "@type": "Person", "name": "Steve Ingersoll"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Program areas at OE3To organize workers for their economic and social advancement."},
  
  {"description": "Writers Guild of America, West (WGAW) is a labor union composed of the thousands of writers who write the content for television shows, movies, news programs, documentaries, animation, and Internet and mobile.", "numberOfEmployees": 187, "sameAs": ["https://www.wga.org/", "https://twitter.com/wgawest", "https://www.facebook.com/WGAWest"], "foundingDate": 1954, "telephone": "(323) 951-4000", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "7000 W Third St", "postalCode": "90048", "@type": "PostalAddress"}, "name": "Writers Guild of America West (WGAW)", "taxID": "95-1809455", "employee": {"jobTitle": "Chief Financial Officer", "@type": "Person", "name": "Don Gor"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Form 990s for WGAWFiscal year endingDate received by IRSFormPDF link2021-032021-09-03990OView PDF2020-032021-06-08990View PDF2019-032020-01-29990View PDF2018-032018-12-22990View PDF2017-032017-10-13990OView PDF...and 8 more Form 990s"},
  
  {"description": "The Southwest Carpenters Training Fund is committed to maintaining the United Brotherhood of Carpenters' tradition of quality craftsmanship by providing the highest quality training to those interested in a career in the various carpentry fields.", "numberOfEmployees": 161, "sameAs": ["http://www.swctf.org", "https://twitter.com/swctf"], "foundingDate": 1958, "telephone": "855-533-5282", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "533 South Fremont Avenue", "postalCode": "90071", "@type": "PostalAddress"}, "name": "Southwest Carpenters Training Fund", "taxID": "95-2106266", "employee": {"jobTitle": "Executive Director", "@type": "Person", "name": "Louis A Ontiveros"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Program areas at Southwest Carpenters Training FundTo provide education and Training to members who are to become Carpenters apprentices for job site construction."},
  
  {"taxID": "95-4121672", "employee": {"jobTitle": "Administrator", "@type": "Person", "name": "Mitch Weiss"}, "name": "Carpenters-Contractors Cooperation Committee", "numberOfEmployees": 28, "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "533 South Fremont Avenue", "postalCode": "90071", "@type": "PostalAddress"}, "sameAs": ["https://www.quadc.org/"], "@context": "http://schema.org", "foundingDate": 1980, "@type": "Organization", "description": "To promote the carpetry industry. Improve carpentry industry. To promote the carpentry industry. To promote the carpentry industry."}
  ,{"ProgramAreas": "Program areas at Carpenters-Contractors Cooperation CommitteeTo improve conditions for those engaged in the carpentry/construction industry, improve their product and develop a higher degree of efficiency in the industry."},
  
  {"description": "Stationary Engineers, Local 39 exists to provide for the general welfare of its members and to improve the economic position and conditions of employment for its members, their families and workers everywhere.", "numberOfEmployees": 114, "sameAs": ["https://www.local39.org/", "https://www.facebook.com/Local39SF"], "foundingDate": 1896, "telephone": "415-861-1135", "address": {"addressLocality": "San Francisco", "addressRegion": "CA", "streetAddress": "337 Valencia Street", "postalCode": "94103", "@type": "PostalAddress"}, "name": "International Union of Operating Engineers Local 39 (IUOE)", "taxID": "94-1056580", "employee": {"jobTitle": "Recording Secretary and Business Manager", "@type": "Person", "name": "B Florence"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Program areas at IUOEPromoted the welfare, working conditions and quality of work of the Local's members in the jurisdiction of Local 39."},
  
  {"@context": "http://schema.org", "@type": "Organization", "name": "United Nurses Associations of California Union of Health Care Professionals", "description": "To be advocates for UNAC/UHCP members and patients, to create a high quality work environment, to provide economic and professional advancement, and to improve the quality of health care.", "address": {"@type": "PostalAddress", "streetAddress": "955 Overland CT Ste 150", "addressLocality": "San Dimas", "addressRegion": "CA", "postalCode": "91773"}, "foundingDate": 1972, "taxID": "95-2813102", "sameAs": ["http://www.unacuhcp.org/", "https://twitter.com/unacuhcp", "https://www.facebook.com/unacuhcp"], "telephone": "909-599-8622", "employee": {"@type": "Person", "name": "William Rouse", "jobTitle": "Executive Director"}, "numberOfEmployees": 273}
  ,{"ProgramAreas": "Form 990s for United Nurses Associations of California Union of Health Care ProfessionalsFiscal year endingDate received by IRSFormPDF link2019-122021-06-08990View PDF2018-122020-01-29990View PDF2017-122019-02-21990View PDF2016-122017-12-19990OView PDF2015-122016-12-15990OView PDF...and 3 more Form 990s"},
  
  {"description": "The Coast Longshore Division of the ILWU forms the core of the union and is comprised of 30 locals, divided among longshore workers, clerks and foremen. It was established in 1937.", "numberOfEmployees": 20, "sameAs": ["http://www.ilwu.org/ilwu-divisions/longshore/", "https://www.facebook.com/LongshoreWorkers"], "foundingDate": 1953, "telephone": "(415) 775-0533", "address": {"addressLocality": "San Francisco", "addressRegion": "CA", "streetAddress": "1188 Franklin Street", "postalCode": "94109", "@type": "PostalAddress"}, "name": "Coast Longshore Division", "taxID": "94-1230134", "employee": {"jobTitle": "President", "@type": "Person", "name": "William Adams"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Program areas at Coast Longshore DivisionThe committee handles the monetary matters involved in the administration of the Longshore Division contract."},

  {"@context": "http://schema.org", "@type": "Organization", "name": "National Electrical Contractors Association St Louis (NECA)", "description": "NECA administers substance abuse education, drug tests, and record keeping for union workforce on a pooled basis and documents the results for employers and customers.", "address": {"@type": "PostalAddress", "streetAddress": "PO Box 2223", "addressLocality": "St Louis", "addressRegion": "MO", "postalCode": "63139"}, "foundingDate": 1940, "taxID": "43-0257310", "sameAs": ["https://stlneca.org/"], "telephone": "314-644-3030", "employee": {"@type": "Person", "name": "Douglas R Martin", "jobTitle": "Executive Vice President"}, "numberOfEmployees": 6}
  ,{"ProgramAreas": "Program areas at NECALabor relations - the chapter holds the collective bargaining rights for an average of 192 Electrical and communication contractors working in eastern Missouri. Neca is responsible to negotiate and administer more than 10 labor agreements covering up to 4,000 workers.Member services - various member services are provided including support for fringe benefit trustees, apprenticeship and work force training, representation for employers, meetings, conventions, liaison with industry groups, newsletters, website and contractor communications as well as public relations.Substance abuse - union workers move from employer to employer via union hiring hall frequently as projects complete and work loads shift. Neca administers substance abuse education, drug tests, and record keeping for union workforce on a pooled basis and documents the results for employers and customers."},
  
  {"name": "Montana Federation of Public Employees", "numberOfEmployees": 55, "sameAs": ["https://www.mfpe.org/", "https://twitter.com/mea_mft", "https://www.facebook.com/MEAMFT"], "foundingDate": 1939, "taxID": "81-0169635", "address": {"addressLocality": "Helena", "addressRegion": "MT", "streetAddress": "1232 E 6TH Avenue", "postalCode": "59601", "@type": "PostalAddress"}, "employee": {"jobTitle": "Chief Financial Officer", "@type": "Person", "name": "Cathy Novak"}, "@context": "http://schema.org", "@type": "Organization", "description": "Mea-mft organizes members and local affiliates for purposes of collective bargaining, contract maintenance, legal defense, legislative and government agency lobbying, and professional development. Mea-mft advocates for our members, our communities, & ..."}
  ,{"ProgramAreas": "Program areas at Montana Federation of Public EmployeesLocal release time president grants - upon approval of the board of directors, mfpe shall provide financial assistance to local affiliates that have released their presidents half or full-time.Legal services - mfpe provides legal representation and defense to members and local affiliates to maintain and protect worker rights and contractual benefits.Mfpe educator conference - this conference is held annually in Montana to provide educators the opportunity to receive the professional development and continuing education credits necessary to stay current with education trends and practices and fulfill Montana state licensing requirements."},
  
  {"description": "The Association provides direct services to each of their local affiliates in the areas of negotiations, grievances, public relations and professional development.", "numberOfEmployees": 81, "sameAs": ["https://cea.org/", "https://www.facebook.com/CTEdAssoc"], "foundingDate": 1848, "telephone": "860-525-5641", "address": {"addressLocality": "Hartford", "addressRegion": "CT", "streetAddress": "21 Oak Street No 500", "postalCode": "06106", "@type": "PostalAddress"}, "name": "Connecticut Education Association (CEA)", "taxID": "06-0666277", "employee": {"jobTitle": "Chief Staff Officer", "@type": "Person", "name": "Don Also"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Program areas at CEATo direct staff and financial assistance to local affiliates for organizing collective bargaining, elections, negotiations, and local support services.To provide legal services to individuals and local affiliates including legal research and special counseling assisting approximately four to five thousand teachers per year.To publish a trade magazine circulated monthly; to publish a handbook circulated yearly; to purchase media."},
  
  {"name": "Minnesota Association of Professional Employees (MAPE)", "numberOfEmployees": 506, "sameAs": ["https://mape.org/"], "foundingDate": 1980, "taxID": "41-1386652", "address": {"addressLocality": "Shoreview", "addressRegion": "MN", "streetAddress": "3460 Lexington Avenue North", "postalCode": "55126", "@type": "PostalAddress"}, "employee": {"jobTitle": "Exec Director / Executive Director", "@type": "Person", "name": "Lina Jamoul"}, "@context": "http://schema.org", "@type": "Organization", "description": "To improve the pay and working conditions of its members and obtain respect and appreciation through strong contracts for public employees. This is done using standard negotiation, grievance and arbitration procedures. MAPE's mission is to unite in so..."}
  ,{"ProgramAreas": "Program areas at MAPEREPRESENTATION Four business agents carry out the contract enforcement and employment relations activity on behalf of the 15,164 state of Minnesota employees represented plus 73 other members employed by cities and school districts. They work with stewards and represent members in grievance cases and arbitrations, supporting and advising members who are subject to disciplinary action. They work with stewards and represent members at pre-discharge meetings and assist members in performance appraisal appeals. Working with stewards, they also attend and advised members at meet and confer meetings and handle training for 373 stewards. ORGANIZATION Eight business agents support member programs that promote and organize membership and member participation and promote leadership development, professionalism and member education. They support member programs that enhance local union function and activism to support Mapes legislative/political and/or issue campaign work as needed."},
  
  {"@context": "http://schema.org", "@type": "Organization", "name": "United Nurses Associations of California Union of Health Care Professionals", "description": "To be advocates for UNAC/UHCP members and patients, to create a high quality work environment, to provide economic and professional advancement, and to improve the quality of health care.", "address": {"@type": "PostalAddress", "streetAddress": "955 Overland CT Ste 150", "addressLocality": "San Dimas", "addressRegion": "CA", "postalCode": "91773"}, "foundingDate": 1972, "taxID": "95-2813102", "sameAs": ["http://www.unacuhcp.org/", "https://twitter.com/unacuhcp", "https://www.facebook.com/unacuhcp"], "telephone": "909-599-8622", "employee": {"@type": "Person", "name": "William Rouse", "jobTitle": "Executive Director"}, "numberOfEmployees": 273}
  ,{"ProgramAreas": "Form 990s for United Nurses Associations of California Union of Health Care ProfessionalsFiscal year endingDate received by IRSFormPDF link2019-122021-06-08990View PDF2018-122020-01-29990View PDF2017-122019-02-21990View PDF2016-122017-12-19990OView PDF2015-122016-12-15990OView PDF...and 3 more Form 990s"},
  
  {"taxID": "68-0475305", "employee": {"jobTitle": "President", "@type": "Person", "name": "Yvonne R. Walker"}, "name": "Union of California State Workers Seiu Local 1000", "numberOfEmployees": 183, "address": {"addressLocality": "Sacramento", "addressRegion": "CA", "streetAddress": "1808 14TH Street", "postalCode": "95811", "@type": "PostalAddress"}, "sameAs": ["https://www.seiu1000.org/"], "@context": "http://schema.org", "foundingDate": 2001, "@type": "Organization", "description": "To provide assistance in matters of job classification; and legislative advocacy in support of programs beneficial to State employees and retirees. To represent certain civil service employees of the State of California in the following matters: salar..."}
  ,{"ProgramAreas": "Program areas at Union of California State Workers Seiu Local 1000Expenses incurred for the Local for its tax exempt purposes of representing and maintaining desirable working conditions for civil service employees of the State of California."},
  
  {"description": "To advance and protect the rights,  benefits, and interests of members, and promote a quality system of public education for all  students.", "numberOfEmployees": 559, "sameAs": ["https://www.njea.org/", "https://twitter.com/njea"], "foundingDate": 1853, "telephone": "(609) 599-4561", "taxID": "21-0524390", "address": {"addressLocality": "Trenton", "addressRegion": "NJ", "streetAddress": "180 W State Street PO Box 1211", "postalCode": "08607", "@type": "PostalAddress"}, "employee": {"jobTitle": "Executive Director", "@type": "Person", "name": "Edward J Richardson"}, "@context": "http://schema.org", "@type": "Organization", "name": "New Jersey Education Association (NJEA)"}
  ,{"ProgramAreas": "Program areas at NJEATo assist all members in the economic, professional and social advancement of their condition and status."},
  
  {"description": "The International Association of Sheet Metal Air Rail and Transportation Workers serves to protect and raise the living standards of over 150,000 skilled men and women employed throughout the United States, Canada and Puerto Rico.", "numberOfEmployees": 1999, "sameAs": ["https://smart-union.org/"], "foundingDate": 2012, "telephone": "202-662-0800", "address": {"addressLocality": "Washington", "addressRegion": "DC", "streetAddress": "1750 New York Avenue NW", "postalCode": "20006", "@type": "PostalAddress"}, "name": "International Association of Sheet Metal Air Rail and Transportation Workers (SMART)", "taxID": "46-4039786", "employee": {"jobTitle": "Eleventh General Vice President", "@type": "Person", "name": "Brother Tim Carter"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Program areas at SMARTThe organization represented its members in contract negotiations to achieve a higher standard of living."},
  
  {"description": "The BAC has represented the most highly skilled North American trowel trades craftworkers including bricklayers, stone and marble masons, cement masons, plasterers, tilesetters, terrazzo and mosaic workers, and pointers/cleaners/caulkers (PCC).", "numberOfEmployees": 222, "sameAs": ["https://bacweb.org/", "https://twitter.com/iubac", "https://www.facebook.com/IUBAC"], "foundingDate": 1865, "telephone": "202-783-3788", "address": {"addressLocality": "Washington", "addressRegion": "DC", "streetAddress": "620 F Street NW", "postalCode": "20004", "@type": "PostalAddress"}, "name": "International Union of Bricklayers and Allied Craftworkers (BAC)", "taxID": "53-0038250", "employee": {"jobTitle": "President", "@type": "Person", "name": "Timothy J. Driscoll"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Program areas at BACTo organize all workers for the economic, moral and social advancement of their condition and status."},
  
  {"description": "To protect the rights of working people throughout the US and Canada who work in hotel, gaming, food service, manufacturing, textile, distribution, laundry, and airport industries.", "numberOfEmployees": 379, "sameAs": ["http://unitehere.org/", "https://twitter.com/unitehere", "https://www.facebook.com/UniteHere"], "foundingDate": 2004, "telephone": "212-265-7000", "address": {"addressLocality": "New York", "addressRegion": "NY", "streetAddress": "275 Seventh Avenue Suite 16th Flr", "postalCode": "10001", "@type": "PostalAddress"}, "name": "Unite Here", "taxID": "13-3819434", "employee": {"jobTitle": "Division Director", "@type": "Person", "name": "Paul Schwalb"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Program areas at Unite HereCollective bargaining - negotiated new contracts to protect member's wages, security and rights.Organizing - organized new shops to protect new workers' wages, security and rights.Providing services to members - mediated disputes, grievances, etc. Between members and employers in order to insure that members' rights were protected."},
  
  {"@context": "http://schema.org", "@type": "Organization", "name": "International Brotherhood of Teamsters (IBT)", "description": "IBT  is a North America's strongest union.. Formed by the merger of several local and regional locals of teamsters, the union now represents a diverse membership of blue-collar and professional workers in both the public and private sectors.", "address": {"@type": "PostalAddress", "streetAddress": "25 Louisiana Ave NW", "addressLocality": "Washington", "addressRegion": "DC", "postalCode": "20001"}, "foundingDate": 1903, "taxID": "53-0215427", "sameAs": ["https://teamster.org/"], "telephone": " 202-624-6800", "employee": {"@type": "Person", "name": "Dan J. Kane", "jobTitle": "International Vice President - East"}, "numberOfEmployees": 587}
  ,{"ProgramAreas": "Program areas at IBTInternational Brotherhood of teamsters-to organize all workers and secure improved wages, hours, working conditions & other advantages through organizing & collective bargaining."},
  
  {"description": "The USW is 1.2 million working and retired members throughout the United States, Canada and the Caribbean, working together to improve our jobs, to build a better future for our families; and to promote fairness, justice and equality.", "numberOfEmployees": 1572, "sameAs": ["https://www.usw.org/", "https://twitter.com/steelworkers", "https://www.facebook.com/steelworkers"], "foundingDate": 1936, "telephone": "412-562-2400", "address": {"addressLocality": "Pittsburgh", "addressRegion": "PA", "streetAddress": "60 Blvd of the Allies", "postalCode": "15222", "@type": "PostalAddress"}, "name": "United Steelworkers USW", "taxID": "25-0818080", "employee": {"jobTitle": "General Counsel", "@type": "Person", "name": "David R Jury"}, "@context": "http://schema.org", "@type": "Organization"}
  ,{"ProgramAreas": "Program areas at United Steelworkers USWNegotiation of collective bargaining agreements and the administration and enforcement of the agreements made by the labor organizationAssisting with local union administration including membership education programs, membership meetings and electionsOrganizing efforts to become the exclusive bargaining representative for any unit of employees and to recruit new members"},
  
  {"taxID": "53-0220586", "employee": {"jobTitle": "Executive Vice President and Director of National Bargaining", "@type": "Person", "name": "Milton Jones"}, "name": "United Food & Commercial Workers Union - Ufcw", "numberOfEmployees": 450, "address": {"addressLocality": "Washington", "addressRegion": "DC", "streetAddress": "1775 K Street NW", "postalCode": "20006", "@type": "PostalAddress"}, "sameAs": ["http://www.ufcw.org/", "https://twitter.com/ufcw", "https://www.facebook.com/ufcwinternational"], "@context": "http://schema.org", "foundingDate": 1941, "@type": "Organization", "description": "To organize all Workers for the economic, moral, and social advancement of their condition and status. To organize all Workers for the economic, moral & social advancement of their condition & status."}
  ,{"ProgramAreas": "Program areas at United Food & Commercial Workers Union - UfcwOrganized all Workers for the economic, moral, and social advancement of their condition and status."},
  
  ];



// test("testing deleting a user by Id -- successful path", async () => {
//   const userModel = getDbConnection().model("User", UserSchema);

//    const user = {
//             "_id": "6229049bf6b835f78b1b465f",
//             "username": "jeff",
//             "password": "String",
//             "name": "Jeff",
//             "location": "Massachushets",
//             "occupation": "jober",
//             "union_favorites": [],
//             "comments": [],
//             "union_membership": [],
//             "__v": 0
//         };

//   const result = new userModel(user);
//   const addedUser = await result.save();
//   const deleteResult = await userFunctions.deleteUserById(addedUser._id);
//   expect(deleteResult).toBeDefined();
//   expect(deleteResult).toBeTruthy();
//   expect
// });
=======

test("testing deleting a user by Id -- successful path", async () => {
  const userModel = getDbConnection().model("User", UserSchema);

   const user = {
            "_id": "6229049bf6b835f78b1b465f",
            "username": "jeff",
            "password": "String",
            "name": "Jeff",
            "location": "Massachushets",
            "occupation": "jober",
            "union_favorites": [],
            "comments": [],
            "union_membership": [],
            "__v": 0
        };

  const result = new userModel(user);
  const addedUser = await result.save();
  const deleteResult = await userFunctions.deleteUserById(addedUser._id);
  expect(deleteResult).toBeDefined();
  expect(deleteResult).toBeTruthy();
  expect
});
>>>>>>> origin/main

test("testing adding user -- successful path", async () => {
  var result;
  const user = {
        
            "_id": "6345649bf6b835f78b111111",
            "username": "charles shawb",
            "password": "String",
            "name": "Bill",
            "location": "Massachushets",
            "occupation": "engineer",
            "union_favorites": [],
            "comments": [],
            "union_membership": [],
            "__v": 0
        };
<<<<<<< HEAD
  if (!(userFunctions.getUsers(user.name)))
  {
     result = await userFunctions.addUser(user);
  }
=======

  const result = await userFunctions.addUser(user);
>>>>>>> origin/main
  expect(result).toBeDefined;
  // expect(result.occupation).toBe(user.occupation);
});

  {  
    test("testing adding union -- successful path", async () => {
      for (let i = 0; i < unionListData.length; i++)
      {
        var result;
        var union = unionListData[i];
        var name = union['name'];
        console.log(name);

      //{

        // "name": "United Brotherhood of Carpenters & Joiners - SW Regional Council of Carpenters",
        // "numberOfEmployees": 2215,
        // "sameAs": [
        //     "https://www.swcarpenters.org/"
        // ],
        // "foundingDate": 1881,
        // "taxID": "95-1318135",
        // "address": {
        //     "addressLoc ion": "CA",
        //     "streetAddress": "533 South Fremont Avenue 10TH Floor",
        //     "postalCode": "90071",
        //     "@type": "PostalAddress"
        // },
        // "employee": {
        //     "jobTitle": "Executive Secretary - Treasurer and Chief Executive Officer",
        //     "@type": "Person",
        //     "name": "Dan Langford"
        // },
        // "@context": "http://schema.org",
        // "@type": "Organization",
        // "description": "A labor organization for betterment and advancement of its members. A labor organization for the betterment and advancement of its members."

        // "name": "Industrial Employers and Distributors Association", "numberOfEmployees": 17, "sameAs": ["https://www.ieda.com/"], "foundingDate": 1937, "taxID": "94-0294755", "address": {"addressLocality": "Emeryville", "addressRegion": "CA", "streetAddress": "2200 Powell Street No 1000", "postalCode": "94608", "@type": "PostalAddress"}, "employee": {"jobTitle": "President and CEO, Lincoln Child Center", "@type": "Person", "name": "Christine Stoner-Mertz"}, "@context": "http://schema.org", "@type": "Organization", "description": "To act as a collective bargaining representative for public and private sector Employers. Collective bargaining representatives."
        //     };
       if (!(name == undefined))
       {
        console.log(await unionFunctions.getUnions(name, null));
        if ((await unionFunctions.getUnions(name, null) <= 0))
        {
          console.log("posting...");
          console.log(unionFunctions.getUnions(name, null) >= 0);
          result = await unionFunctions.addUnion(union);
        }
      }
      i++;
    }
    expect(result).toBeDefined;
    // expect(result.occupation).toBe(user.occupation);
    //i = i + 1;
  
});
  }

