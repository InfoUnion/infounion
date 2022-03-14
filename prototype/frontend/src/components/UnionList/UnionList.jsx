import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import './UnionList.css'

function UnionName (props) {
    const un = props.UnionData.map((u, index) => {
      return (
          <div key = {index}>
            {u.name}
        </div>
      );
    });
    return (
        <div>
           {un}
        </div>
     );
  }

const UnionList = (props) => {
    return (
        
        <div className = 'test'>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
                United Brotherhood of Carpenters & Joiners - SW Regional Council of Carpenters
            {/* <UnionName UnionData={props.UnionData} /> */}
            </Card.Title>
            <Card.Subtitle>Los Angeles, CA</Card.Subtitle>
            <Card.Text>
                Number of employees: 2215
            </Card.Text>
            <Card.Text>
                A labor organization for the betterment and advancement of its members.
            </Card.Text>
            <Card.Link href="https://www.swcarpenters.org" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            Service Employees International Union - Seiu Uhw Local 2015
            </Card.Title>
            <Card.Subtitle>Los Angeles, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 1205
            </Card.Text>
            <Card.Text>
            To unite members into one organization for the purpose of improving economic and working conditions through collective bargaining. Seiu - united long term care workers is a chartered Local union of the service employees international union and is an u...            </Card.Text>
            <Card.Link href="https://www.seiu2015.org/" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            Service Employees International Union - Seiu Uhw Local 2005
            </Card.Title>
            <Card.Subtitle>Oakland, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 1190
            </Card.Text>
            <Card.Text>
            Service Employees International Union - Seiu Uhw Local 2005 is a labor unions, organization in Oakland, CA whose mission is: Representation of members employed in the health care industry regarding employment matters            </Card.Text>
            <Card.Link href="http://www.seiu-uhw.org/" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            California Nurses Association
            </Card.Title>
            <Card.Subtitle>Oakland, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 731
            </Card.Text>
            <Card.Text>
            The organizations primary mission is to provide effective collective bargaining representation to cna members in order to promote the economic and professional interests of direct care Nurses and to advocate for direct care Nurses and their patients o...
            </Card.Text>
            <Card.Link href="https://www.nationalnursesunited.org/california-nurses-association" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            Sag-Aftra
            </Card.Title>
            <Card.Subtitle>Los Angeles, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 664
            </Card.Text>
            <Card.Text>
            SAG-AFTRA is committed to organizing all work done under our jurisdictions, negotiating the best wages, working conditions, and health and pension benefits, preserving and expanding members' work opportunities, vigorously enforcing our contracts.
            </Card.Text>
            <Card.Link href="https://www.sagaftra.org/" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            California Teachers Association
            </Card.Title>
            <Card.Subtitle>Burlingame, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 509
            </Card.Text>
            <Card.Text>
            The California Teachers Association exists to protect and promote the well-being of its members; to improve the conditions of teaching and learning; to advance the cause of free, universal, and quality public education; to ensure that the human dignit...
            </Card.Text>
            <Card.Link href="https://www.cta.org/" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            Industrial Employers and Distributors Association
            </Card.Title>
            <Card.Subtitle>Emeryville, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 19
            </Card.Text>
            <Card.Text>
            To act as a collective bargaining representative for public and private sector Employers. Collective bargaining representatives
            </Card.Text>
            <Card.Link href= "https://www.ieda.com/" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            Operating Engineers Local 3 (OE3)
            </Card.Title>
            <Card.Subtitle>Alameda, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 209
            </Card.Text>
            <Card.Text>
            The mission of  Operating Engineers Local 3 is to organize workers for their economic and social advancement
            </Card.Text>
            <Card.Link href= "https://www.oe3.org/" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            Writers Guild of America, West (WGAW)
            </Card.Title>
            <Card.Subtitle>Los Angeles, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 176
            </Card.Text>
            <Card.Text>
            Writers Guild of America, West (WGAW) is a labor union composed of the thousands of writers who write the content for television shows, movies, news programs, documentaries, animation, and Internet and mobile.
            </Card.Text>
            <Card.Link href= "https://www.wga.org/" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            The Southwest Carpenters Training Fund
            </Card.Title>
            <Card.Subtitle>Los Angeles, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 134
            </Card.Text>
            <Card.Text>
            The Southwest Carpenters Training Fund is committed to maintaining the United Brotherhood of Carpenters' tradition of quality craftsmanship by providing the highest quality training to those interested in a career in the various carpentry fields.
            </Card.Text>
            <Card.Link href= "http://www.swctf.org" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item>
            <Card style={{ width: '46vw' }}>
            <Card.Body>
            <Card.Title>
            Carpenters-Contractors Cooperation Committee
            </Card.Title>
            <Card.Subtitle>Los Angeles, CA</Card.Subtitle>
            <Card.Text>
            Number of employees: 24
            </Card.Text>
            <Card.Text>
            To promote the carpentry industry. To promote the carpentry industry.
            </Card.Text>
            <Card.Link href= "https://www.quadc.org/" target = "_blank">Link</Card.Link>
            </Card.Body>
            </Card>
            </ListGroup.Item>
        </ListGroup>
      </div>
      

    );
}
export default UnionList;