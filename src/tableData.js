import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import WarningIcon from '@mui/icons-material/Warning';

const withTooltip = (Component, tooltipText, text) => (
    <div>{text}&nbsp;&nbsp;
    <Tooltip  title={<span style={{ fontSize: '14px' }}>{tooltipText}</span>} placement="right-end">
      <IconButton>
        <Badge badgeContent="1" color="error">
          {Component}
        </Badge>
      </IconButton>
    </Tooltip>
    </div>
  );
export const outerColumns = ["Markets", "Most Aged \n[Days in a stage]", "Expected Closing\n[Next 2 months]", "Most Value\n[Weighted Deal Value]", "Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5", "Lost Value"];
export const innerColumns = ["Opportunity", "Sector/Need", "Stage", "Days In Stage", "Expected Closing","Weighted D value", "FY23O", "FY23B", "WOL", "Onwer"];
export const data = [
  {
   outerData:[
    { value: "EMEA" },
    { value: "£250,000\n[Stage 1]", color: "red" },
    { value: "2\n[£2,150,000]", color: "blue" },
    { value: "£2,000,000\n[Stage 4]", color: "purple" },
    { value: "£500,000\n[Jan 24]" },
    { value: "£250,000\n[Oct 23, Nov 23]" },
    { value: "£2,000,000\n[Dec 23]" },
    { value: "£0\n[0]" },
    { value: "£1,000,000\n[Jan 24]" },
    { value: "£2,100,000" },
  ],
    innerData: [[
      { value: "Maxon Computer", component: withTooltip(<MessageIcon color="info" />, '2 Opportunities [2500,000] were lost with the client in the last quarter due to Currency Exchange Fluctuations:. Contact Owner KL for more information', "Maxon Computer") },
      { value: "Consumer/Replace Incumbent" },
      { value: "1" },
      { value: "10" },
      { value: "Dec23" },
      { value: "£150,000" },
      { value: "£50,000" },
      { value: "£5,000" },
      { value: "WOL" },
      { value: "KL" },
    ],
      [
      { value: "Coursera", component: withTooltip(<WarningIcon color="info" />, 'Category seems to show early signs of turmoil due to the revised policy issued by central government around taxation.', "Coursera") },
      { value: "Tech/New Content" },
      { value: "3" },
      { value: "12" },
      { value: "Oct23" },
      { value: "£10,000" },
      { value: "£20,000" },
      { value: "£15,000" },
      { value: "WOL" },
      { value: "KL" },
    ],
    [
      { value: "Oman Air" },
      { value: "Tech/New Content" },
      { value: "2" },
      { value: "3" },
      { value: "Sept23" },
      { value: "£120,000" },
      { value: "£10,000" },
      { value: "£1,000" },
      { value: "WOL" },
      { value: "KL" },
    ],
    [
      { value: "Sylvamo" },
      { value: "Tech/New Content" },
      { value: "2" },
      { value: "3" },
      { value: "June23" },
      { value: "£18,000" },
      { value: "£8,000" },
      { value: "£10,000" },
      { value: "WOL" },
      { value: "KL" },
    ]
]},
{
   outerData:[
    { value: "USA" },
    { value: "£150,000\n[Stage 5]", color: "orange" },
    { value: "4\n[£1,250,000]", color: "blue" },
    { value: "£1,000,000\n[Stage 4]", color: "purple" },
    { value: "£800,000\n[Jan 24]" },
    { value: "£210,000\n[Oct 23, Nov 23]" },
    { value: "£300,000\n[Dec 23]" },
    { value: "£800,000\n[Nov 25]" },
    { value: "£0\n[0]" },
    { value: "£10,000" },
  ],
    innerData: [[
      { value: "MilliCare", component: withTooltip(<MessageIcon color="info" />, '2 Opportunities [10,000] were lost with the client in the last quarter due to Legal Costs. Contact Owner JB for more information', "MilliCare") },
      { value: "Consumer/Replace Incumbent" },
      { value: "2" },
      { value: "3" },
      { value: "Jan 25" },
      { value: "£150,000" },
      { value: "£50,000" },
      { value: "£5,000" },
      { value: "WOL" },
      { value: "JB" },
    ],
      [
      { value: "DeFacto" },
      { value: "Consumer/Replace Incumbent" },
      { value: "2" },
      { value: "3" },
      { value: "Sept 24" },
      { value: "£150,000" },
      { value: "£50,000" },
      { value: "£5,000" },
      { value: "WOL" },
      { value: "JB" },
    ],
    [
      { value: "Diageo" },
      { value: "Consumer/Replace Incumbent" },
      { value: "2" },
      { value: "3" },
      { value: "July 25" },
      { value: "£150,000" },
      { value: "£50,000" },
      { value: "£5,000" },
      { value: "WOL" },
      { value: "JB" },
  ],
  [
    { value: "Deloitte MCS Limited" },
    { value: "Tech/New Content" },
    { value: "2" },
    { value: "3" },
    { value: "Sept 22" },
    { value: "£150,000" },
    { value: "£50,000" },
    { value: "£5,000" },
    { value: "WOL" },
    { value: "JB" },
]
]},
{
  outerData:[
   { value: "New Divisions" },
   { value: "10\n[Stage 1]", color: "green" },
   { value: "2\n[£1,700,000]", color: "blue" },
   { value: "£2,000,000\n[Stage 4]", color: "purple" },
   { value: "£500,000\n[Jan 24]" },
   { value: "£250,000\n[Oct 23, Nov 23]" },
   { value: "£2,000,000\n[Dec 23]" },
   { value: "£80,000\n[Feb 25]" },
   { value: "£1,000,000\n[Jan 24]" },
   { value: "£150,000" },
 ],
   innerData: [[
       { value: "Ogilvy APAC" },
       { value: "Tech/New Content" },
       { value: "2" },
       { value: "3" },
       { value: "Oct23" },
       { value: "£150,000" },
       { value: "£50,000" },
       { value: "£5,000" },
       { value: "WOL" },
       { value: "GJ" },
   ],
     [
       { value: "Ogilvy APAC" },
       { value: "Tech/New Content" },
       { value: "2" },
       { value: "3" },
       { value: "Oct23" },
       { value: "£50,000" },
       { value: "£50,000" },
       { value: "£5,000" },
       { value: "WOL" },
       { value: "GJ" },
   ],
   [
     { value: "Sylvamo" },
     { value: "Consumer/Replace Incumbent" },
     { value: "2" },
     { value: "3" },
     { value: "Oct23" },
     { value: "£150,000" },
     { value: "£50,000" },
     { value: "£5,000" },
     { value: "WOL" },
     { value: "GJ" },
 ]
]},
];