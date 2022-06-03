import React from 'react'

import { Container, } from '@mui/material'
import convertStates from '../Regions/Regions'


function Laws() {
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    convertStates().then(result => {
      setLocations(result);
    });

  }, [])

  return (
    <Container maxWidth='xl'>
      <div className='wrapper'>
        <h1>Laws</h1>
      </div>
      <div id="states">
        <div id="al">
          <h2>Alabama</h2>

          <p>No state minimum wage law.</p>

          <p><strong>Employers subject to the Fair Labor Standards Act must pay the current Federal minimum wage of $7.25 per hour. </strong></p>
        </div>

        <div id="ak">
          <h2>Alaska</h2>

          <p><strong>Basic Minimum Rate (per hour): $10.34</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Daily - 8, Weekly - 40</p>

          <p>Under a voluntary flexible work hour plan approved by the Alaska Department of Labor, a 10 hour day, 40 hour workweek may be instituted with premium pay after 10 hours a day.</p>

          <p>The premium overtime pay requirement on either a daily or weekly basis is not applicable to employers of fewer than 4 employees.</p>

          <p>The minimum wage is adjusted annually based on a set formula.</p>
        </div>

        <div id="az">
          <h2>Arizona</h2>

          <p><strong>Basic Minimum Rate (per hour): $12.80</strong></p>
        </div>

        <div id="ar">
          <h2>Arkansas</h2>

          <p className="applicable">Applicable to employers of 4 or more employees</p>

          <p><strong>Basic Minimum Rate (per hour): $11.00</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>Starting in 2019, the minimum wage will undergo a series of scheduled increases until it reaches $11.00 in 2021.</p>
        </div>

        <div id="ca">
          <h2>California</h2>

          <p className="applicable">Applicable to employers with 25 employees or less</p>

          <p><strong>Basic Minimum Rate (per hour): $14.00 </strong></p>

          <p>Applicable to employers with 26 employees or more</p>

          <p><strong>Basic Minimum Rate (per hour): $15.00 </strong></p>

          <p>Any work in excess of eight hours in one workday, in excess of 40 hours in one workweek, or in the first eight hours worked on the seventh day of work in any one workweek shall be at the rate of one and one-half times the regular rate of pay. Any work in excess of 12 hours in one day or in excess of eight hours on any seventh day of a workweek shall be paid no less than twice the regular rate of pay. California Labor Code section 510. Exceptions apply to an employee working pursuant to an alternative workweek adopted pursuant to applicable Labor Code sections and for time spent commuting. (See Labor Code section 510 for exceptions).</p>

          <p>From 2017 through 2023, the minimum wage will increase annually to $15.00/hour on a set schedule and will be adjusted annually thereafter based upon a set formula and the number of employees.</p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Daily - 8 Over 12 (double time), Weekly - 40; on 7th day: First 8 hours (time and half) Over 8 hours on 7th day (double time)</p>
        </div>

        <div id="co">
          <h2>Colorado</h2>

          <p><strong>Basic Minimum Rate (per hour): $12.56</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Daily - 12, Weekly - 40</p>

          <p>Minimum wage rate and overtime provisions applicable to retail and service, commercial support service, food and beverage, and health and medical industries.</p>
        </div>

        <div id="ct">
          <h2>Connecticut</h2>

          <p><strong>Basic Minimum Rate (per hour): $13.00</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>In restaurants and hotel restaurants, for the 7th consecutive day of work, premium pay is required at time and one half the minimum rate.</p>

          <p>The Connecticut minimum wage rate automatically increases to 0.5 percent above the rate set in the Fair Labor Standards Act if the federal minimum wage rate equals or becomes higher than the State minimum.</p>
        </div>

        <div id="de">
          <h2>Delaware</h2>

          <p><strong>Basic Minimum Rate (per hour): $10.50</strong></p>

          <p>The State adopts the federal minimum wage rate by reference if the federal rate is greater than the State rate.</p>
        </div>

        <div id="fl">
          <h2>Florida</h2>

          <p><strong>Basic Minimum Rate (per hour): $10.00</strong></p>

          <p>The minimum wage is adjusted annually based on a set formula.</p>
        </div>

        <div id="ga">
          <h2>Georgia</h2>

          <p className="applicable">Applicable to employers of 6 or more employees</p>

          <p><strong>Basic Minimum Rate (per hour): $5.15 </strong></p>

          <p>The State law excludes from coverage any employment that is subject to the federal Fair Labor Standards Act when the federal rate is greater than the State rate.</p>

          <p><strong>Employers subject to the Fair Labor Standards Act must pay the current Federal minimum wage of $7.25 per hour. </strong></p>
        </div>

        <div id="hi">
          <h2>Hawaii</h2>

          <p><strong>Basic Minimum Rate (per hour): $10.10 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>An employee earning a guaranteed monthly compensation of $2,000 or more is exempt from the State minimum wage and overtime law.</p>

          <p>Domestic service workers are subject to Hawaii's minimum wage and overtime requirements. Act 248, Regular Session 2013.</p>

          <p>The State law excludes from coverage any employment that is subject to the federal Fair Labor Standards Act unless the State wage rate is higher than the federal rate.</p>
        </div>

        <div id="id">
          <h2>Idaho</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>
        </div>

        <div id="il">
          <h2>Illinois</h2>

          <p className="applicable">Applicable to employers of 4 or more employees, excluding family members</p>

          <p><strong>Basic Minimum Rate (per hour): $12.00</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>
        </div>

        <div id="in">
          <h2>Indiana</h2>

          <p className="applicable">Applicable to employers of 2 or more employees</p>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>
        </div>

        <div id="ia">
          <h2>Iowa</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p>The Iowa minimum wage equals the federal minimum wage rate if it is set below the federal rate.</p>
        </div>

        <div id="ks">
          <h2>Kansas</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p>The State law excludes from coverage any employment that is subject to the federal Fair Labor Standards Act.</p>
        </div>

        <div id="ky">
          <h2>Kentucky</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40, 7th day</p>

          <p>The 7th day overtime law, which is separate from the minimum wage law, requires employers who permit covered employees to work seven days in any one workweek to pay the employee at a rate of time and one-half for hours worked on the seventh day when employees work all seven days of the workweek. The 7th day overtime law does not apply when the employee is not permitted to work over 40 hours total in the workweek.</p>

          <p>The state adopts the federal minimum wage rate by reference if the federal rate is greater than the State rate.</p>

          <p>Compensating time in lieu of overtime is allowed upon written request by an employee of any county, charter county, consolidated local government, or urban-county government, including an employee of a county-elected official.</p>
        </div>

        <div id="la">
          <h2>Louisiana</h2>

          <p>No state minimum wage law.</p>

          <p><strong>Employers subject to the Fair Labor Standards Act must pay the current Federal minimum wage of $7.25 per hour. </strong></p>
        </div>

        <div id="me">
          <h2>Maine</h2>

          <p><strong>Basic Minimum Rate (per hour): $12.75</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>If the highest federal minimum wage is increased in excess of the State minimum wage in effect, then the State minimum wage will increase to the same amount, effective on the same date as the increase in the federal minimum wage.</p>

          <p>From 2017 through 2020, the minimum wage will increase annually on a set schedule and will be adjusted annually thereafter based on a set formula.</p>
        </div>

        <div id="md">
          <h2>Maryland</h2>

          <p><strong>Basic Minimum Rate (per hour): $12.50</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>The Maryland minimum wage equals the federal minimum wage when set below the federal rate.</p>

          <p>Employees under 18 years may be paid 85% of the minimum hourly wage rate.</p>
        </div>

        <div id="ma">
          <h2>Massachusetts</h2>

          <p><strong>Basic Minimum Rate (per hour): $14.25</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>In no case shall the Massachusetts minimum wage rate be less than $0.50 higher than the effective federal minimum rate.</p>
        </div>

        <div id="mi">
          <h2>Michigan</h2>

          <p className="applicable">Applicable to employers of 2 or more employees</p>

          <p><strong>Basic Minimum Rate (per hour): $9.87</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>The State law excludes from coverage any employment that is subject to the federal Fair Labor Standards Act unless the State wage rate is higher than the federal rate.</p>

          <p>From 2019 through 2030, the minimum wage will increase annually on a set schedule, provided the unemployment rate in the preceding year does not exceed 8.5%.</p>

          <p>Employees 16-17 years of age may be paid 85% of the minimum hourly wage rate.</p>
        </div>

        <div id="mn">
          <h2>Minnesota</h2>

          <p className="applicable">Large employer (enterprise with annual revenues of $500,000 or more)</p>

          <p><strong>Basic Minimum Rate (per hour): $10.33</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 48</p>

          <p className="applicable">Small employer (enterprise with annual revenues of less than $500,000)</p>

          <p><strong>Basic Minimum Rate (per hour): $8.42</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 48</p>

          <p>The minimum wage is adjusted annually based on a set formula.</p>

          <p>Employees under 18 years may be paid $8.42 per hour</p>
        </div>

        <div id="mo">
          <h2>Missouri</h2>

          <p><strong>Basic Minimum Rate (per hour): $11.15</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 2 </a> </sup> : </strong> Weekly - 40</p>

          <p>In addition to the exemption for federally covered employment, the law exempts, among others, employees of a retail or service business with gross annual sales or business done of less than $500,000.</p>

          <p>Premium pay required after 52 hours in seasonal amusement or recreation businesses.</p>

          <p>The minimum wage is adjusted annually based on a set formula.</p>

          <p>Continuing on from 2019 to 2023, the minimum wage will increase 85 cents per hour each year before reaching $12.00.</p>
        </div>

        <div id="ms">
          <h2>Mississippi</h2>

          <p>No state minimum wage law.</p>

          <p><strong>Employers subject to the Fair Labor Standards Act must pay the current Federal minimum wage of $7.25 per hour. </strong></p>
        </div>

        <div id="mt">
          <h2>Montana</h2>

          <p className="applicable">Business with gross annual sales of more than $110,000</p>

          <p><strong>Basic Minimum Rate (per hour): $9.20</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p className="applicable">Business not covered by the Fair Labor Standards Act with gross annual sales of $110,000 or less</p>

          <p><strong>Basic Minimum Rate (per hour): $4.00 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>A business not covered by the federal Fair Labor Standards Act whose gross annual sales are $110,000 or less may pay $4.00 per hour. However, if an individual employee is producing or moving goods between states or otherwise covered by the federal Fair Labor Standards Act, that employee must be paid the greater of either the federal minimum wage or Montana's minimum wage.</p>

          <p>The minimum wage is adjusted annually based on a set formula.</p>
        </div>

        <div id="nc">
          <h2>North Carolina</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>Premium pay is required after 45 hours a week in seasonal amusements or recreational establishments.</p>
        </div>

        <div id="nd">
          <h2>North Dakota</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>
        </div>

        <div id="ne">
          <h2>Nebraska</h2>

          <p className="applicable">Applicable to employers of 4 or more employees</p>

          <p><strong>Basic Minimum Rate (per hour): $9.00 </strong></p>
        </div>

        <div id="nh">
          <h2>New Hampshire</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>The New Hampshire minimum wage equals the federal minimum wage when set below the federal rate.</p>
        </div>

        <div id="nj">
          <h2>New Jersey</h2>

          <p><strong>Basic Minimum Rate (per hour): $13.00 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>The minimum wage is adjusted annually based on a set formula.</p>

          <p>There is a minimum wage of $11.90 per hour for seasonal and small employers who employee fewer than 6 people.</p>
        </div>

        <div id="nm">
          <h2>New Mexico</h2>

          <p><strong>Basic Minimum Rate (per hour): $11.50 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>
        </div>

        <div id="nv">
          <h2>Nevada</h2>

          <p className="applicable">With no health ins. benefits provided by employer</p>

          <p><strong>Basic Minimum Rate (per hour): $9.75</strong></p>

          <p>With health ins. benefits provided by employer and received by employee</p>

          <p><strong>Basic Minimum Rate (per hour): $8.75</strong></p>

          <p>The minimum wage is adjusted annually based on a set formula.</p>

          <p>&nbsp;</p>
        </div>

        <div id="ny">
          <h2>New York</h2>

          <p><strong>Basic Minimum Rate (per hour): $13.20; $15.00 (Long Island, Westchester, &amp; NYC)</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p style={{marginBottom : "11px"}}>These rates are in effect from December 31, 2021 through December 30, 2022.&nbsp;<a href="https://dol.ny.gov/minimum-wage-0" target="_blank" rel="noopener">View minimum wage rates through 2022</a>.</p>

          <p>The New York minimum wage equals the federal minimum wage when set below the federal rate.</p>

          <p>Under the new hospitality regulations, residential workers ("live-in workers") are now entitled to overtime for hours worked over 40 in a payroll week, instead of the prior 44 hour requirement. Therefore, overtime hours for all non-exempt workers are now any hours worked over 40 in a payroll week.</p>

          <p>Employers operating a factory, mercantile establishment, hotel, restaurant, freight/passenger elevator, or theater; or a building employing security guards, janitors, superintendents, managers, engineers, or firemen must provide 24 hours of consecutive rest each week. Domestic workers are entitled to 24 hours of consecutive rest each week, and receive premium pay if they work during such period.</p>

          <p>Employees receive 1 hour of pay at minimum wage rate in addition to owed wages when spread of hours exceeds 10 hours, there is a split shift, or both.</p>
        </div>

        <div id="oh">
          <h2>Ohio</h2>

          <p className="applicable">Employers with annual gross receipts of $342,000 or more</p>

          <p><strong>Basic Minimum Rate (per hour): $9.30</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p className="applicable">Employers with annual gross receipts under $342,000</p>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>The minimum wage is adjusted annually based on a set formula</p>
        </div>

        <div id="ok">
          <h2>Oklahoma</h2>

          <p className="applicable">Employers of ten or more full time employees at any one location and employers with annual gross sales over $100,000 irrespective of number of full time employees</p>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p className="applicable">All other employers</p>

          <p><strong>Basic Minimum Rate (per hour): $2.00 </strong></p>

          <p>The Oklahoma state minimum wage law does not contain current dollar minimums. Instead the state adopts the federal minimum wage rate by reference.</p>

          <p>The State law excludes from coverage any employment that is subject to the federal Fair Labor Standards Act.</p>
        </div>

        <div id="or">
          <h2>Oregon</h2>

          <p><strong>Basic Minimum Rate (per hour): $12.75</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>Premium pay required after 10 hours a day in nonfarm canneries, driers, or packing plants and in mills, factories or manufacturing establishments (excluding sawmills, planning mills, shingle mills, and logging camps).</p>

          <p>From 2016 through 2022, the minimum wage will increase annually on a set schedule and will be adjusted annually thereafter based on a set formula.</p>
        </div>

        <div id="pa">
          <h2>Pennsylvania</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>
        </div>

        <div id="ri">
          <h2>Rhode Island</h2>

          <p><strong>Basic Minimum Rate (per hour): $12.25</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>Time and one-half premium pay for work on Sundays and holidays in retail and certain other businesses is required under two laws that are separate from the minimum wage law.</p>
        </div>

        <div id="sc">
          <h2>South Carolina</h2>

          <p>No state minimum wage law.</p>

          <p><strong>Employers subject to the Fair Labor Standards Act must pay the current federal minimum wage of $7.25 per hour. </strong></p>
        </div>

        <div id="sd">
          <h2>South Dakota</h2>

          <p><strong>Basic Minimum Rate (per hour): $9.95</strong></p>

          <p>The minimum wage is adjusted annually based on a set formula.</p>
        </div>

        <div id="tn">
          <h2>Tennessee</h2>

          <p>No state minimum wage law.</p>

          <p><strong>Employers subject to the Fair Labor Standards Act must pay the current Federal minimum wage of $7.25 per hour. </strong></p>
        </div>

        <div id="tx">
          <h2>Texas</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p>The State law excludes from coverage any employment that is subject to the federal Fair Labor Standards Act.</p>

          <p>The Texas State minimum wage law does not contain current dollar minimums. Instead the State adopts the federal minimum wage rate by reference.</p>
        </div>

        <div id="ut">
          <h2>Utah</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p>The Utah state minimum wage law does not contain current dollar minimums. Instead the state law authorizes the adoption of the federal minimum wage rate via administrative action.</p>

          <p>The State law excludes from coverage any employment that is subject to the federal Fair Labor Standards Act.</p>
        </div>

        <div id="va">
          <h2>Virginia</h2>

          <p className="applicable">Applicable to employers of 4 or more employees</p>

          <p><strong>Basic Minimum Rate (per hour): $11.00 </strong></p>
        </div>

        <div id="vt">
          <h2>Vermont</h2>

          <p className="applicable">Applicable to employers of two or more employees</p>

          <p><strong>Basic Minimum Rate (per hour): $12.55</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>The Vermont minimum wage is automatically replaced with the federal minimum wage rate if it is higher than the State minimum.</p>
        </div>

        <div id="wa">
          <h2>Washington</h2>

          <p><strong>Basic Minimum Rate (per hour): $14.49</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>Premium pay not applicable to employees who request compensating time off in lieu of premium pay.</p>

          <p>From 2017 through 2020, the minimum wage will increase annually on a set schedule and will be adjusted annually thereafter based on a set formula.</p>
        </div>

        <div id="wi">
          <h2>Wisconsin</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>
        </div>

        <div id="wv">
          <h2>West Virginia</h2>

          <p className="applicable">Applicable to employers of 6 or more employees at one location</p>

          <p><strong>Basic Minimum Rate (per hour): $8.75 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>
        </div>

        <div id="wy">
          <h2>Wyoming</h2>

          <p><strong>Basic Minimum Rate (per hour): $5.15 </strong></p>

          <p>Employers subject to the Fair Labor Standards Act must pay the current Federal minimum wage of $7.25 per hour.</p>
        </div>

        <div id="wdc">
          <h2>District of Columbia</h2>

          <p><strong>Basic Minimum Rate (per hour): $15.20 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>

          <p>From 2017 through 2020, the minimum wage will increase annually on a set schedule and will be adjusted annually thereafter based on a set formula.</p>
        </div>

        <div id="cnmi">
          <h2>Commonwealth of the Northern Mariana Islands</h2>

          <p><strong>Basic Minimum Rate (per hour): $7.25 </strong></p>

          <p>The Commonwealth of the Northern Mariana Islands has <a href="/sites/dolgov/files/WHD/legacy/files/cnmi.pdf"> special minimum wage rates </a> .</p>
        </div>

        <div id="pr">
          <h2>Puerto Rico</h2>

          <p className="applicable">Employees covered by the FLSA</p>

          <p><strong>Basic Minimum Rate (per hour): $8.50</strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Daily - 8, And on statutory rest day (double time), Weekly - 40 (double time)</p>

          <p className="applicable">Employees not covered by the FLSA</p>

          <p><strong>Basic Minimum Rate (per hour): $5.08 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Daily - 8, And on statutory rest day (double time), Weekly - 40 (double time)</p>

          <p>Employers covered by the federal Fair Labor Standards Act (FLSA) are subject only to the federal minimum wage and all applicable regulations. Employers not covered by the FLSA will be subject to a minimum wage that is at least 70 percent of the federal minimum wage or the applicable mandatory decree rate, whichever is higher. The Secretary of Labor and Human Resources may authorize a rate based on a lower percentage for any employer who can show that implementation of the 70 percent rate would substantially curtail employment in that business.</p>
        </div>

        <div id="as">
          <h2>American Samoa</h2>

          <p>American Samoa has <a href="/agencies/whd/state/minimum-wage/american-samoa"> special minimum wage rates </a> .</p>
        </div>

        <div id="vi">
          <h2>Virgin Islands</h2>

          <p className="applicable">State law</p>

          <p><strong>Basic Minimum Rate (per hour): $10.50 </strong></p>
        </div>

        <div id="gu">
          <h2>Guam</h2>

          <p><strong>Basic Minimum Rate (per hour): $8.75 </strong></p>

          <p><strong>Premium Pay After Designated Hours <sup> <a href="/agencies/whd/minimum-wage/state#footnote"> 1 </a> </sup> : </strong> Weekly - 40</p>
        </div>
      </div>

    </Container>
  )
}

export default Laws
