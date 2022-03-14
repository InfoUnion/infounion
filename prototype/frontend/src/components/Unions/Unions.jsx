import { Routes, Route, Link } from "react-router-dom";
import './Unions.css';
import UnionList from '../UnionList/UnionList';

import styled from 'styled-components';
//import {Card} from 'react-bootstrap';

const Box = styled.div`
background: #FFF9F4;
display: flex;
justify-content: center; // 1
flex-flow: row wrap; // 2
width: 100%;
height: 100%;
`;

const Container = styled.div`
  background: #FFF9F4;
  display: flex;
  justify-content: left; // 1
  flex-flow: row wrap; // 2
  width: 100%;
  height: 100%;
`;
const List = styled.div`
  display: flex;
  justify-content: center; // 3
  flex-flow: column wrap; // 4
`;
const Card = styled.div`
  margin: 20px;
  background: #fff;
  height: 200px;
  width: 400px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: column; // 5 
  justify-content: center;
  align-items: center;
`;

const unions = [
{"name": "United Brotherhood of Carpenters & Joiners - SW Regional Council of Carpenters", "numberOfEmployees": 2215, "sameAs": ["https://www.swcarpenters.org/"], "foundingDate": 1881, "taxID": "95-1318135", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "533 South Fremont Avenue 10TH Floor", "postalCode": "90071", "@type": "PostalAddress"}, "employee": {"jobTitle": "Executive Secretary - Treasurer and Chief Executive Officer", "@type": "Person", "name": "Dan Langford"}, "@context": "http://schema.org", "@type": "Organization", "description": "A labor organization for betterment and advancement of its members. A labor organization for the betterment and advancement of its members."},

{"name": "Service Employees International Union - Seiu Uhw Local 2005", "numberOfEmployees": 1190, "sameAs": ["http://www.seiu-uhw.org/"], "foundingDate": 2005, "taxID": "20-1973983", "address": {"addressLocality": "Oakland", "addressRegion": "CA", "streetAddress": "560 Thomas L Berkley Way", "postalCode": "94612", "@type": "PostalAddress"}, "employee": {"jobTitle": "Vice President", "@type": "Person", "name": "Stanley Lyles"}, "@context": "http://schema.org", "@type": "Organization", "description": "Service Employees International Union - Seiu Uhw Local 2005 is a labor unions, organization in Oakland, CA whose mission is: Representation of members employed in the health care industry regarding employment matters."},

{"name": "Service Employees International Union - 2015 Local", "numberOfEmployees": 1605, "sameAs": ["https://www.seiu2015.org/"], "foundingDate": 2015, "taxID": "47-4164197", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "2910 Beverly Boulevard", "postalCode": "90057", "@type": "PostalAddress"}, "employee": {"jobTitle": "Chief Operating Officer", "@type": "Person", "name": "Smith Dereck"}, "@context": "http://schema.org", "@type": "Organization", "description": "To unite members into one organization for the purpose of improving economic and working conditions through collective bargaining. Seiu - united long term care workers is a chartered Local union of the service employees international union and is an u..."},

{"name": "California Nurses Association", "numberOfEmployees": 731, "sameAs": ["https://www.nationalnursesunited.org/california-nurses-association", "https://twitter.com/calnurses", "https://www.facebook.com/calnurses"], "foundingDate": 1907, "taxID": "94-0362060", "address": {"addressLocality": "Oakland", "addressRegion": "CA", "streetAddress": "155 Grand Avenue", "postalCode": "94612", "@type": "PostalAddress"}, "employee": {"jobTitle": "Executive Director", "@type": "Person", "name": "Rose Ann Demoro"}, "@context": "http://schema.org", "@type": "Organization", "description": "The organizations primary mission is to provide effective collective bargaining representation to cna members in order to promote the economic and professional interests of direct care Nurses and to advocate for direct care Nurses and their patients o..."},

{"description": "SAG-AFTRA is committed to organizing all work done under our jurisdictions, negotiating the best wages, working conditions, and health and pension benefits, preserving and expanding members' work opportunities, vigorously enforcing our contracts.", "numberOfEmployees": 664, "sameAs": ["https://www.sagaftra.org/"], "foundingDate": 2012, "telephone": "855-724-2387", "taxID": "45-4931719", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "5757 Wilshire Boulevard 7TH Floor", "postalCode": "90036", "@type": "PostalAddress"}, "employee": {"jobTitle": "Chief Operating Officer and General Counsel", "@type": "Person", "name": "Duncan Crabtree-Ireland"}, "@context": "http://schema.org", "@type": "Organization", "name": "Sag-Aftra (Sag-Aftra)"},

{"name": "California Teachers Association", "numberOfEmployees": 509, "sameAs": ["https://www.cta.org/", "https://twitter.com/cateachersassoc", "https://www.facebook.com/californiateachersassociation"], "foundingDate": 1907, "taxID": "94-0362310", "address": {"addressLocality": "Burlingame", "addressRegion": "CA", "streetAddress": "1705 Murchison Drive", "postalCode": "94010", "@type": "PostalAddress"}, "employee": {"jobTitle": "Former Executive Director", "@type": "Person", "name": "Carolyn E Doggett"}, "@context": "http://schema.org", "@type": "Organization", "description": "The California Teachers Association exists to protect and promote the well-being of its members; to improve the conditions of teaching and learning; to advance the cause of free, universal, and quality public education; to ensure that the human dignit..."},

{"name": "Industrial Employers and Distributors Association", "numberOfEmployees": 19, "sameAs": ["https://www.ieda.com/"], "foundingDate": 1937, "taxID": "94-0294755", "address": {"addressLocality": "Emeryville", "addressRegion": "CA", "streetAddress": "2200 Powell Street No 1000", "postalCode": "94608", "@type": "PostalAddress"}, "employee": {"jobTitle": "President and Chief Executive Officer , Lincoln Child Center / Director / President and CEO, Lincoln Child Center", "@type": "Person", "name": "Christine Stoner-Mertz"}, "@context": "http://schema.org", "@type": "Organization", "description": "To act as a collective bargaining representative for public and private sector Employers. Collective bargaining representatives."},

{"description": "The mission of  Operating Engineers Local 3 is to organize workers for their economic and social advancement.", "numberOfEmployees": 209, "sameAs": ["https://www.oe3.org/"], "foundingDate": 1939, "telephone": "510-748-7400", "taxID": "94-0577785", "address": {"addressLocality": "Alameda", "addressRegion": "CA", "streetAddress": "1620 S Loop Rd", "postalCode": "94502", "@type": "PostalAddress"}, "employee": {"jobTitle": "Vice President / President", "@type": "Person", "name": "Steve Ingersoll"}, "@context": "http://schema.org", "@type": "Organization", "name": "Operating Engineers Local 3 (OE3)"},

{"description": "Writers Guild of America, West (WGAW) is a labor union composed of the thousands of writers who write the content for television shows, movies, news programs, documentaries, animation, and Internet and mobile.", "numberOfEmployees": 176, "sameAs": ["https://www.wga.org/", "https://twitter.com/wgawest", "https://www.facebook.com/WGAWest"], "foundingDate": 1954, "telephone": "(323) 951-4000", "taxID": "95-1809455", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "7000 W Third St", "postalCode": "90048", "@type": "PostalAddress"}, "employee": {"jobTitle": "Chief Financial Officer", "@type": "Person", "name": "Don Gor"}, "@context": "http://schema.org", "@type": "Organization", "name": "Writers Guild of America West (WGAW)"},

{"description": "The Southwest Carpenters Training Fund is committed to maintaining the United Brotherhood of Carpenters' tradition of quality craftsmanship by providing the highest quality training to those interested in a career in the various carpentry fields.", "numberOfEmployees": 134, "sameAs": ["http://www.swctf.org", "https://twitter.com/swctf"], "foundingDate": 1958, "telephone": "855-533-5282", "taxID": "95-2106266", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "533 South Fremont Avenue", "postalCode": "90071", "@type": "PostalAddress"}, "employee": {"jobTitle": "Executive Director", "@type": "Person", "name": "Louis A Ontiveros"}, "@context": "http://schema.org", "@type": "Organization", "name": "Southwest Carpenters Training Fund"},

{"name": "Carpenters-Contractors Cooperation Committee", "numberOfEmployees": 24, "foundingDate": 1980, "taxID": "95-4121672", "address": {"addressLocality": "Los Angeles", "addressRegion": "CA", "streetAddress": "533 South Fremont Avenue", "postalCode": "90071", "@type": "PostalAddress"}, "employee": {"jobTitle": "Administrator / Administator", "@type": "Person", "name": "Mitch Weiss"}, "@context": "http://schema.org", "@type": "Organization", "description": "To promote the carpetry industry. Improve carpentry industry. To promote the carpentry industry. To promote the carpentry industry."}

];

function Unions() {

    return(
        <UnionList unionData={unions}/>
    );
}

export default Unions;