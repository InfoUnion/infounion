// Kareem Darghous
const unionFunctions = require('./union-services.js');
const userFunctions = require('./user-services.js');
const unionData = require('./data/uniondata.jsx');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const UserSchema = require("./user");
//const dotenv = require("dotenv");
const { default: majorUnions } = require('./data/uniondata');
//dotenv.config();

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
  const result = await unionFunctions.findUnionByName(name);
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


const unionListData = [
   {"name": "Industrial Employers and Distributors Association", "numberOfEmployees": 17, "sameAs": ["https://www.ieda.com/"], "foundingDate": 1937, "taxID": "94-0294755", "address": {"addressLocality": "Emeryville", "addressRegion": "CA", "streetAddress": "2200 Powell Street No 1000", "postalCode": "94608", "@type": "PostalAddress"}, "employee": {"jobTitle": "President and CEO, Lincoln Child Center", "@type": "Person", "name": "Christine Stoner-Mertz"}, "@context": "http://schema.org", "@type": "Organization", "description": "To act as a collective bargaining representative for public and private sector Employers. Collective bargaining representatives."}
  ,{"ProgramAreas": "Program areas at Industrial Employers and Distributors AssociationRepresented public and private sector Employers."},
  
   {"description": "The mission of  Operating Engineers Local 3 is to organize workers for their economic and social advancement.", "numberOfEmployees": 223, "sameAs": ["https://www.oe3.org/"], "foundingDate": 1939, "telephone": "510-748-7400", "taxID": "94-0577785", "address": {"addressLocality": "Alameda", "addressRegion": "CA", "streetAddress": "1620 S Loop Rd", "postalCode": "94502", "@type": "PostalAddress"}, "employee": {"jobTitle": "President", "@type": "Person", "name": "Steve Ingersoll"}, "@context": "http://schema.org", "@type": "Organization", "name": "Operating Engineers Local 3 (OE3)"}
  ,{"ProgramAreas": "Program areas at OE3To organize workers for their economic and social advancement."},
  
   {"name": "Carpenters-Contractors Cooperation Committee", "numberOfEmployees": 28, "sameAs": ["https://www.quadc.org/"], "foundingDate": 1980, "taxID": "95-4121672", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "533 South Fremont Avenue", "postalCode": "90071", "@type": "PostalAddress"}, "employee": {"jobTitle": "Administrator", "@type": "Person", "name": "Mitch Weiss"}, "@context": "http://schema.org", "@type": "Organization", "description": "To promote the carpetry industry. Improve carpentry industry. To promote the carpentry industry. To promote the carpentry industry."}
  ,{"ProgramAreas": "Program areas at Carpenters-Contractors Cooperation CommitteeTo improve conditions for those engaged in the carpentry/construction industry, improve their product and develop a higher degree of efficiency in the industry."},
  
   {"description": "Writers Guild of America, West (WGAW) is a labor union composed of the thousands of writers who write the content for television shows, movies, news programs, documentaries, animation, and Internet and mobile.", "numberOfEmployees": 187, "sameAs": ["https://www.wga.org/", "https://twitter.com/wgawest", "https://www.facebook.com/WGAWest"], "foundingDate": 1954, "telephone": "(323) 951-4000", "taxID": "95-1809455", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "7000 W Third St", "postalCode": "90048", "@type": "PostalAddress"}, "employee": {"jobTitle": "Chief Financial Officer", "@type": "Person", "name": "Don Gor"}, "@context": "http://schema.org", "@type": "Organization", "name": "Writers Guild of America West (WGAW)"}
  ,{"ProgramAreas": "Form 990s for WGAWFiscal year endingDate received by IRSFormPDF link2021-032021-09-03990OView PDF2020-032021-06-08990View PDF2019-032020-01-29990View PDF2018-032018-12-22990View PDF2017-032017-10-13990OView PDF...and 8 more Form 990s"},

   {"description": "The Southwest Carpenters Training Fund is committed to maintaining the United Brotherhood of Carpenters' tradition of quality craftsmanship by providing the highest quality training to those interested in a career in the various carpentry fields.", "numberOfEmployees": 161, "sameAs": ["http://www.swctf.org", "https://twitter.com/swctf"], "foundingDate": 1958, "telephone": "855-533-5282", "taxID": "95-2106266", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "533 South Fremont Avenue", "postalCode": "90071", "@type": "PostalAddress"}, "employee": {"jobTitle": "Executive Director", "@type": "Person", "name": "Louis A Ontiveros"}, "@context": "http://schema.org", "@type": "Organization", "name": "Southwest Carpenters Training Fund"}
  ,{"ProgramAreas": "Program areas at Southwest Carpenters Training FundTo provide education and Training to members who are to become Carpenters apprentices for job site construction."},

   {"description": "Stationary Engineers, Local 39 exists to provide for the general welfare of its members and to improve the economic position and conditions of employment for its members, their families and workers everywhere.", "numberOfEmployees": 114, "sameAs": ["https://www.local39.org/", "https://www.facebook.com/Local39SF"], "foundingDate": 1896, "telephone": "415-861-1135", "taxID": "94-1056580", "address": {"addressLocality": "San Francisco", "addressRegion": "CA", "streetAddress": "337 Valencia Street", "postalCode": "94103", "@type": "PostalAddress"}, "employee": {"jobTitle": "Recording Secretary and Business Manager", "@type": "Person", "name": "B Florence"}, "@context": "http://schema.org", "@type": "Organization", "name": "International Union of Operating Engineers Local 39 (IUOE)"}
  ,{"ProgramAreas": "Program areas at IUOEPromoted the welfare, working conditions and quality of work of the Local's members in the jurisdiction of Local 39."},
  
   {"name": "California Nurses Association", "numberOfEmployees": 753, "sameAs": ["https://www.nationalnursesunited.org/california-nurses-association", "https://twitter.com/calnurses", "https://www.facebook.com/calnurses"], "foundingDate": 1907, "taxID": "94-0362060", "address": {"addressLocality": "Oakland", "addressRegion": "CA", "streetAddress": "155 Grand Avenue", "postalCode": "94612", "@type": "PostalAddress"}, "employee": {"jobTitle": "Chief of Staff", "@type": "Person", "name": "David Johnson"}, "@context": "http://schema.org", "@type": "Organization", "description": "The organizations primary mission is to provide effective collective bargaining representation to cna members in order to promote the economic and professional interests of direct care Nurses and to advocate for direct care Nurses and their patients o..."}
  ,{"ProgramAreas": "Program areas at California Nurses AssociationThe California Nurses Association (cna) is a 501(c)(5) labor organization with the primary exempt purpose of collective bargaining on behalf of registered Nurses (rns). In addition to collective bargaining for contracts governing the employment terms and working conditions of rns, cna activities include organizing new bargaining units, nursing practice education to assist the profession of nursing in maintaining and improving the quality of its service to the public, communication to increase public and professional knowledge and understanding of professional nursing and healthcare delivery issues, administration of the organization, maintenance of its properties and assets and related activities which further the common interests of the membership."},
  
   {"description": "To be advocates for UNAC/UHCP members and patients, to create a high quality work environment, to provide economic and professional advancement, and to improve the quality of health care.", "numberOfEmployees": 273, "sameAs": ["http://www.unacuhcp.org/", "https://twitter.com/unacuhcp", "https://www.facebook.com/unacuhcp"], "foundingDate": 1972, "telephone": "909-599-8622", "taxID": "95-2813102", "address": {"addressLocality": "San Dimas", "addressRegion": "CA", "streetAddress": "955 Overland CT Ste 150", "postalCode": "91773", "@type": "PostalAddress"}, "employee": {"jobTitle": "Executive Director", "@type": "Person", "name": "William Rouse"}, "@context": "http://schema.org", "@type": "Organization", "name": "United Nurses Associations of California Union of Health Care Professionals"}
  ,{"ProgramAreas": "Form 990s for United Nurses Associations of California Union of Health Care ProfessionalsFiscal year endingDate received by IRSFormPDF link2018-122020-01-29990View PDF2017-122019-02-21990View PDF2016-122017-12-19990OView PDF2015-122016-12-15990OView PDF2015-082016-11-01990OView PDF...and 2 more Form 990s"},
  
   {"description": "The Coast Longshore Division of the ILWU forms the core of the union and is comprised of 30 locals, divided among longshore workers, clerks and foremen. It was established in 1937.", "numberOfEmployees": 20, "sameAs": ["http://www.ilwu.org/ilwu-divisions/longshore/", "https://www.facebook.com/LongshoreWorkers"], "foundingDate": 1953, "telephone": "(415) 775-0533", "taxID": "94-1230134", "address": {"addressLocality": "San Francisco", "addressRegion": "CA", "streetAddress": "1188 Franklin Street", "postalCode": "94109", "@type": "PostalAddress"}, "employee": {"jobTitle": "President", "@type": "Person", "name": "William Adams"}, "@context": "http://schema.org", "@type": "Organization", "name": "Coast Longshore Division"}
  ,{"ProgramAreas": "Program areas at Coast Longshore DivisionThe committee handles the monetary matters involved in the administration of the Longshore Division contract."},
  
   {"description": "United Teachers Los Angeles (UTLA) was created in 1970 from more than a dozen different organizations representing teachers and support service personnel throughout the massive Los Angeles Unified School District (LAUSD).", "numberOfEmployees": 81, "sameAs": ["https://www.utla.net/"], "foundingDate": 1970, "telephone": "(213) 487-5560", "taxID": "95-2635019", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "3303 Wilshire Blvd", "postalCode": "90010", "@type": "PostalAddress"}, "employee": {"jobTitle": "Chief Finance Director", "@type": "Person", "name": "Harry Mar"}, "@context": "http://schema.org", "@type": "Organization", "name": "United Teachers Los Angeles (UTLA)"}
  ,{"ProgramAreas": "Program areas at UTLARepresent all Teachers in the Los Angeles unified school district with the district. Oversee projects to make better Teachers in the district. Apprise Teachers in the district of all matters relating to their work. Represent Teachers in labor disputes and when necessary, to fight for Teachers' rights."
  }
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

test("testing adding user -- successful path", async () => {
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

  const result = await userFunctions.addUser(user);
  expect(result).toBeDefined;
  // expect(result.occupation).toBe(user.occupation);
});

/*
  {  
    test("testing adding union -- successful path", async () => {
      for (let i = 0; i <= unionListData.length; i++)
      {
  
        var union = unionListData[i];
      //{

        // "name": "United Brotherhood of Carpenters & Joiners - SW Regional Council of Carpenters",
        // "numberOfEmployees": 2215,
        // "sameAs": [
        //     "https://www.swcarpenters.org/"
        // ],
        // "foundingDate": 1881,
        // "taxID": "95-1318135",
        // "address": {
        //     "addressLocality": "Los Angeles",
        //     "addressRegion": "CA",
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


      const result = await unionFunctions.addUnion(union);
      i++;
    }
    expect(result).toBeDefined;
    // expect(result.occupation).toBe(user.occupation);
    //i = i + 1;
  
});
  }
*/
