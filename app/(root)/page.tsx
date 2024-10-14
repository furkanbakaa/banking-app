import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Furkan" , lastName:"Baka", email:"furkantest@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {10000.50}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={loggedIn}
      transactions = {[]}
      banks = {[{ currentBalance:123.50 }, { currentBalance:150}]}
      />
    </section>
  );
};

export default Home;
