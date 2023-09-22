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
export const outerColumns = ["Markets", "Most Aged \n[Stage]", "Expected Closing in Next 2 months [WDV]", "Most WDV\n[Stage]", "Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5", "Lost Value"];
export const innerColumns = ["Opportunity", "Sector/Need", "Stage", "Days In Stage", "Expected Closing","WDV", "FY23O", "FY23B", "WOL/ Non-WOL", "Onwer"];
const data = [
  {
   outerData:[
    { value: "EMEA" },
    { value: "100", color: "red" },
    { value: "2\n[220]", color: "blue" },
    { value: "150\n[Stage 1]", color: "purple" },
    { value: "150\n[Jan 24]" },
    { value: "138\n[Oct 23, Nov 23]" },
    { value: "100\n[Dec 23]" },
    { value: "0\n[0]" },
    { value: "0\n[0]" },
    { value: "210" },
  ],
    innerData: [[
      { value: "Maxon Computer", component: withTooltip(<MessageIcon color="info" />, '2 Opportunities [2500] were lost with the client in the last quarter due to Currency Exchange Fluctuations:. Contact Owner KL for more information', "Maxon Computer") },
      { value: "Consumer/Replace Incumbent" },
      { value: "2" },
      { value: "5" },
      { value: "Dec 23" },
      { value: "100" },
      { value: "5" },
      { value: "50" },
      { value: "WOL" },
      { value: "KL" },
    ],
      [
      { value: "Coursera", component: withTooltip(<WarningIcon color="info" />, 'Category seems to show early signs of turmoil due to the revised policy issued by central government around taxation.', "Coursera") },
      { value: "Tech/New Content" },
      { value: "2" },
      { value: "5" },
      { value: "Nov 23" },
      { value: "150" },
      { value: "30" },
      { value: "150" },
      { value: "WOL" },
      { value: "KL" },
    ],
    [
      { value: "Oman Air" },
      { value: "Tech/New Content" },
      { value: "5" },
      { value: "90" },
      { value: "June 23" },
      { value: "250" },
      { value: "250" },
      { value: "250" },
      { value: "Non-WOL" },
      { value: "KL" },
    ],
    [
      { value: "Sylvamo" },
      { value: "Tech/New Content" },
      { value: "1" },
      { value: "100" },
      { value: "April 23" },
      { value: "500" },
      { value: "100" },
      { value: "200" },
      { value: "Non-WOL" },
      { value: "KL" },
    ],
    [
      { value: "Deloitte MCS Limited" },
      { value: "Consumer/Replace Incumbent" },
      { value: "3" },
      { value: "20" },
      { value: "Oct 23" },
      { value: "2000" },
      { value: "200" },
      { value: "1000" },
      { value: "Non-WOL" },
      { value: "KL" },
    ],
    [
      { value: "Ogilvy APAC" },
      { value: "Consumer/Replace Incumbent" },
      { value: "5" },
      { value: "5" },
      { value: "July 23" },
      { value: "1000" },
      { value: "500" },
      { value: "500" },
      { value: "WOL" },
      { value: "KL" },
    ]
]},
{
   outerData:[
    { value: "USA" },
    { value: "150", color: "orange" },
    { value: "4\n[1,250]", color: "blue" },
    { value: "1\n[Stage 4]", color: "purple" },
    { value: "800\n[Jan 24]" },
    { value: "210\n[Oct 23, Nov 23]" },
    { value: "300\n[Dec 23]" },
    { value: "800\n[Nov 25]" },
    { value: "0\n[0]" },
    { value: "150" },
  ],
    innerData: [[
      { value: "DeFacto", component: withTooltip(<MessageIcon color="info" />, '2 Opportunities [10] were lost with the client in the last quarter due to Legal Costs. Contact Owner JB for more information', "DeFacto") },
      { value: "Consumer/Replace Incumbent" },
      { value: "4" },
      { value: "25" },
      { value: "Oct 23" },
      { value: "400" },
      { value: "150" },
      { value: "100" },
      { value: "WOL" },
      { value: "JB" },
    ],
      [
      { value: "GP Strategies" },
      { value: "Consumer/Replace Incumbent" },
      { value: "2" },
      { value: "60" },
      { value: "Dec 23" },
      { value: "100" },
      { value: "20" },
      { value: "25" },
      { value: "WOL" },
      { value: "JB" },
    ],
    [
      { value: "MilliCare" },
      { value: "Consumer/Replace Incumbent" },
      { value: "2" },
      { value: "90" },
      { value: "Nov 23" },
      { value: "100" },
      { value: "20" },
      { value: "25" },
      { value: "Non-WOL" },
      { value: "JB" },
  ],
  [
    { value: "Diageo" },
    { value: "Consumer/Replace Incumbent" },
    { value: "5" },
    { value: "30" },
    { value: "July 23" },
    { value: "300" },
    { value: "150" },
    { value: "100" },
    { value: "Non-WOL" },
    { value: "JB" },
  ],
  [
    { value: "Deloitte MCS Limited" },
    { value: "Consumer/Replace Incumbent" },
    { value: "3" },
    { value: "90" },
    { value: "July 23" },
    { value: "2000" },
    { value: "800" },
    { value: "1000" },
    { value: "WOL" },
    { value: "JB" },
  ]
]},
{
  outerData:[
   { value: "APAC" },
   { value: "10", color: "green" },
   { value: "2\n[1,700]", color: "blue" },
   { value: "2\n[Stage 4]", color: "purple" },
   { value: "500\n[Jan 24]" },
   { value: "250\n[Oct 23, Nov 23]" },
   { value: "2\n[Dec 23]" },
   { value: "80\n[Feb 25]" },
   { value: "1\n[Jan 24]" },
   { value: "150" },
 ],
   innerData: [[
       { value: "Ogilvy APAC" },
       { value: "Tech/New Content" },
       { value: "5" },
       { value: "30" },
       { value: "June 23" },
       { value: "1000" },
       { value: "100" },
       { value: "500" },
       { value: "Non-WOL" },
       { value: "GJ" },
   ],
     [
       { value: "Oman Air" },
       { value: "Consumer/Replace Incumbent" },
       { value: "5" },
       { value: "40" },
       { value: "June 23" },
       { value: "250" },
       { value: "200" },
       { value: "250" },
       { value: "Non-WOL" },
       { value: "GJ" },
   ],
   [
     { value: "Sylvamo" },
     { value: "Tech/New Content" },
     { value: "1" },
     { value: "55" },
     { value: "May 23" },
     { value: "500" },
     { value: "250" },
     { value: "200" },
     { value: "Non-WOL" },
     { value: "GJ" },
  ], 
  [
    { value: "GP Strategies" },
    { value: "Consumer/Replace Incumbent" },
    { value: "2" },
    { value: "90" },
    { value: "May 23" },
    { value: "100" },
    { value: "30" },
    { value: "25" },
    { value: "WOL" },
    { value: "GJ" },
  ],
  [
    { value: "MilliCare" },
    { value: "Consumer/Replace Incumbent" },
    { value: "2" },
    { value: "180" },
    { value: "April 23" },
    { value: "100" },
    { value: "20" },
    { value: "25" },
    { value: "WOL" },
    { value: "GJ" },
  ],
  [
    { value: "DeFacto" },
    { value: "Tech/New Content" },
    { value: "4" },
    { value: "62" },
    { value: "April 23" },
    { value: "400" },
    { value: "80" },
    { value: "100" },
    { value: "Non-WOL" },
    { value: "GJ" },
  ],
  [
    { value: "Diageo" },
    { value: "Consumer/Replace Incumbent" },
    { value: "5" },
    { value: "10" },
    { value: "Dec 23" },
    { value: "300" },
    { value: "100" },
    { value: "100" },
    { value: "WOL" },
    { value: "GJ" },
  ]
]},
];

const sumAtIndexForStage = (innerData, stage) => {
  let total = 0;
  const dates = [];

  innerData.forEach((item) => {
    if (item[2].value === stage) {
      const value = parseFloat(item[5].value || 0);
      total += value;
      dates.push(item[4].value);
    }
  });

  const dateStr = dates.length> 0 ? dates.join(', '): "0";
  return `${total}\n(${dateStr})`;
};

const expectedClosing = (innerData) => {
  let total = 0;
  let count = 0;

  innerData.forEach((item) => {
    if (item[4].value === "Sept 23" || item[4].value === "Nov 23" || item[4].value === "Oct 23" ) {
      const value = parseFloat(item[5].value || 0);
      total += value;
      count++;
    }
  });

  return `${count}\n(${[total]})`;
};

const mostAged = (data, index) => {
  let max = -Infinity;
  let stage = "";

  data.forEach((item) => {
      const value = parseFloat(item[index].value || 0);
      if (value > max) {
        max = value;
        stage = item[2].value
      }
  });

  return `${max} Days\n(Stage${stage})`;
};

const mostWDV = (data, index) => {
  let max = -Infinity;
  let stage = "";

  data.forEach((item) => {
      const value = parseFloat(item[index].value || 0);
      if (value > max) {
        max = value;
        stage = item[2].value
      }
  });

  return `${max}\n(Stage${stage})`;
};




data.forEach((item) => {
  item.outerData[1].value = mostAged(item.innerData, 3);
  item.outerData[2].value = expectedClosing(item.innerData);
  item.outerData[3].value = mostWDV(item.innerData, 5);
  item.outerData[4].value = sumAtIndexForStage(item.innerData,"1");
  item.outerData[5].value = sumAtIndexForStage(item.innerData,"2");
  item.outerData[6].value = sumAtIndexForStage(item.innerData,"3");
  item.outerData[7].value = sumAtIndexForStage(item.innerData,"4");
  item.outerData[8].value = sumAtIndexForStage(item.innerData,"5");
});

export {data};