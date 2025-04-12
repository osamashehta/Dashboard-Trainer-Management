import payment_gray from "../../assets/images/payment-gray.svg";

const PaymentHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-8 mb-4">
        <h3 className="font-light text-sm md:font-semibold md:text-2xl">
          Payment Management
        </h3>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-3  flex justify-start  items-center gap-2 bg-blue-600 rounded-[12px] px-4 py-4">
          <img
            src={payment_gray}
            alt="payment"
            className=" w-[60px] height-[40px] bg-white p-2 rounded-[8px]"
          />
          <div className="flex  flex-col gap-2 justify-center items-start text-md font-medium text-slate-100">
            <p>Total Payments</p>
            <p>$10000</p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3  flex justify-start  items-center gap-2 bg-yellow-500 rounded-[12px] px-4 py-4">
          <img
            src={payment_gray}
            alt="payment"
            className=" w-[60px] height-[40px] bg-white p-2 rounded-[8px]"
          />
          <div className="flex  flex-col gap-2 justify-center items-start text-md font-medium text-slate-100">
            <p>Pending Payments</p>
            <p>$1800</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3  flex justify-start  items-center gap-2 bg-emerald-600 rounded-[12px] px-4 py-4">
          <img
            src={payment_gray}
            alt="payment"
            className=" w-[60px] height-[40px] bg-white p-2 rounded-[8px]"
          />
          <div className="flex  flex-col gap-2 justify-center items-start text-md font-medium text-slate-100">
            <p>Processing</p>
            <p>$3000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentHeader;
