import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Board from "./components/Board/Board";
import { status, priorities } from "./utils/data";
import CardSkeleton from "./components/Skeleton/CardSkeleton";

function MainPage() {
  const [ticketList, setTicketList] = useState([]);
  const [userList, setUserList] = useState([]);
  const savedGroup = localStorage.getItem("groupChoice");
  const savedOrder = localStorage.getItem("orderChoice");

  const [grouping, setGrouping] = useState(savedGroup ? savedGroup : "status");
  const [sorting, setSorting] = useState(savedOrder ? savedOrder : "priority");
  const [isLoading, setIsLoading] = useState(true);

  const handleGroupSelect = (chosenGroup) => {
    setGrouping(chosenGroup);
    localStorage.setItem("groupChoice", chosenGroup);
  };

  const handleOrderSelect = (chosenOrder) => {
    setSorting(chosenOrder);
    localStorage.setItem("orderChoice", chosenOrder);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const result = await response.json();
      setTicketList(result.tickets);
      setUserList(result.users);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  return (
    <div className="App scroll-container">
      <Navbar
        group={grouping}
        order={sorting}
        onGroupchange={handleGroupSelect}
        onOrderChange={handleOrderSelect}
      />
      <div className="boards_container">
        <div className="app_boards">
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            <>
              {grouping === "status" &&
                status.map((groupOpt, idx) => (
                  <Board
                    order={sorting}
                    data={groupOpt}
                    key={idx}
                    tickets={ticketList}
                    users={userList}
                    group={grouping}
                  />
                ))}
              {grouping === "user" &&
                userList.map((userOpt) => (
                  <Board
                    order={sorting}
                    data={userOpt}
                    key={userOpt.id}
                    tickets={ticketList}
                    users={userList}
                    group={grouping}
                    userId={userOpt?.id}
                  />
                ))}
              {grouping === "priority" &&
                priorities.map((priorityOpt, idx) => (
                  <Board
                    order={sorting}
                    data={priorityOpt}
                    level={idx}
                    key={idx}
                    tickets={ticketList}
                    users={userList}
                    group={grouping}
                  />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
