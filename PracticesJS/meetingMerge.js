
let timeObj =  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 9,  endTime: 10 },
  { startTime: 10, endTime: 12 }
];
// const sortedMeetings = timeObj.sort((a, b) => {
//   return a.startTime - b.startTime;
// });
//
// // Initialize mergedMeetings with the earliest meeting
// const mergedMeetings = [sortedMeetings[0]];
//
// for (let i = 1; i < sortedMeetings.length; i++) {
//   const currentMeeting    = sortedMeetings[i];
//   const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
//
//   // If the current meeting overlaps with the last merged meeting, use the
//   // later end time of the two
//   if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
//     lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
//   } else {
//
//     // Add the current meeting since it doesn't overlap
//     console.log('else = ', i, mergedMeetings,currentMeeting);
//     mergedMeetings.push(currentMeeting);
//   }
// }

//console.log(mergedMeetings); ;


const sortedMeetings = timeObj.sort((a,b) => a.startTime-b.startTime);

const mergeTiming =[sortedMeetings[0]];
for(let i=1; i< sortedMeetings.length ; i++){
let currentMeeting= sortedMeetings[i];
let lastMergedMeeting= mergeTiming[mergeTiming.length-1];

if(lastMergedMeeting.endTime>= currentMeeting.startTime){
  lastMergedMeeting.endTime=Math.max(lastMergedMeeting.endTime,currentMeeting.endTime);
}
else {
  mergeTiming.push(currentMeeting)
}

}
console.log(mergeTiming);
