import React, { useContext, useEffect } from "react";
import CausesCard from "./CausesCard";
import TopDonnorCard from "./TopDonnorCard";
import transactionContext from "../context/transactionCntxt";

const style = {
  viewport: "flex flex-col lg:flex-row mx-11 my-5 ",
  donateto: "flex flex-col justify-center  p-4 lg:w-2/3",
  cardsview:
    "flex flex-col justify-center md:justify-evenly items-center md:flex-wrap  md:flex-row p-3  h-[100%] bg-black",
  heading: "flex p-0.5 justify-center items-center mx-5  w-fit rounded-full",
  headingcontent:
    "flex px-4 py-1 justify-center text-2xl  items-center text-white rounded-full bg-[#000000]",
  topdonors: "p-7 flex flex-col bg-white w-3/3 md:w-1/3 rounded-xl",
  toptitle:
    "flex p-0.5  justify-center items-center md:w-fit rounded-full shadow-xl",
  toptitletext:
    "flex px-4 py-1 text-black justify-center text-2xl md:w-fit  items-center text-white rounded-full bg-[#ffff]",
  donnorscardarea: "flex flex-col p-3",
};

function HelpsSection() {
  const context = useContext(transactionContext);
  const { causes, fetchCauses, donations, fetchdonations } = context;

  const donos = donations.transactions;
  console.log(donos);
  return (
    <div className={style.viewport}>
      <div className={style.donateto}>
        <div className={`bganimation ${style.heading}`}>
          <div className={style.headingcontent}>Donate To</div>
        </div>
        <div className={style.cardsview}>
          {causes.map((Cause) => (
            <CausesCard
              key={Cause._id}
              title={Cause.title}
              // Abi={Cause.ContractAbi}
              hash={Cause.contractId}
              image={Cause.Image}
              description={Cause.description}
              target={Cause.target}
              date={Cause.date}
            />
          ))}
        </div>
      </div>
      {donos && (
        <div className={`topdonnorview  ${style.topdonors}`}>
          <div className={`bganimation ${style.toptitle}`}>
            <div className={`${style.toptitletext}`}>Top Donnors</div>
          </div>
          <div className={style.donnorscardarea}>
            {donos.map((donationn) => (
              <TopDonnorCard
                key={donationn._id}
                name={donationn.name}
                transactionHash={donationn.transactionhash}
                transactionTo={donationn.transactionto}
                transactionAmount={donationn.transactionammount}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HelpsSection;
