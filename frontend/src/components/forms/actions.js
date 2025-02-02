import React, { useState } from "react";
import ReusableButton from "../button";
import RegistrationForm from "./register";
import LoginForm from "./login";
import Billings from "../billings";
import BillingForm from "./billings";
import CreateHouseForm from "./createHouse";
import CreateRoomForm from "./createRoom";
import CreateTenantForm from "./createTenant";
import CreateSubordinateForm from "./createSurbodinate";
import PaymentForm from "./logPayment";

const Actions = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleFormOpen = (formName) => {
    setActiveForm(formName);
  };

  const handleCloseForm = () => {
    setActiveForm(null);
  };

  return (
    <div className="p-4">
      {/* Button Grid - Hidden when a form is open */}
      {!activeForm && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ReusableButton 
            variant="secondary" 
            text="Open payment Form" 
            onClick={() => handleFormOpen("Log Payment")} 
            className="h-24 w-full text-xl"
          />
          <ReusableButton 
            variant="secondary" 
            text="Open billings Form" 
            onClick={() => handleFormOpen("billings")} 
            className="h-24 w-full text-xl"
          />
         <ReusableButton 
            variant="secondary" 
            text="Open Create House Form" 
            onClick={() => handleFormOpen("Create House")} 
            className="h-24 w-full text-xl"
          />
          <ReusableButton 
             variant="secondary" 
             text="Open Create room Form" 
             onClick={() => handleFormOpen("Create room")} 
             className="h-24 w-full text-xl"
           />
           <ReusableButton 
              variant="secondary" 
              text="Open add tenant Form" 
              onClick={() => handleFormOpen("Add Tenant")} 
              className="h-24 w-full text-xl"
            />
            <ReusableButton 
               variant="secondary" 
               text="Open add surbodinate Form" 
               onClick={() => handleFormOpen("Add surbodinate")} 
               className="h-24 w-full text-xl"
             />
        </div>
      )}

      {/* Display active form */}
      {activeForm && (
        <div className="mt-4">
          <button 
            onClick={handleCloseForm} 
            className="p-4 bg-red-500 text-white text-lg w-full rounded-lg"
          >
            Close Form
          </button>

          {activeForm === "Log Payment" && <PaymentForm />}
          {activeForm === "billings" && <BillingForm />}
          {activeForm === "Create House" && <CreateHouseForm />}
          {activeForm === "Create room" && <CreateRoomForm />}
          {activeForm === "Add Tenant" && <CreateTenantForm />}
          {activeForm === "Add surbodinate" && <CreateSubordinateForm />}
        </div>
      )}
    </div>
  );
};

export default Actions;
