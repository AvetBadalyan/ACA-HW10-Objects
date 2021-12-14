/* Upvotes and Downvotes
Given an object containing counts of both upvotes and downvotes, return what vote count should be
displayed. This is calculated by subtracting the number of downvotes from upvotes.

getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0

*/
function getVoteCount(Object) {
  const { upvotes, downvotes } = Object;
  let count = upvotes - downvotes;
  console.log(count);
}

getVoteCount({ upvotes: 13, downvotes: 0 });
