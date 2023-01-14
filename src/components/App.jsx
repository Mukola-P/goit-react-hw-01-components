import { Profile } from "components/Profile/Profile";
import user from "basis/user.json";

import { Statistics } from "components/Statistics/Statistics";
import data from "basis/data.json";



export const App = () => {
  return (
     <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </div>
  );
}
