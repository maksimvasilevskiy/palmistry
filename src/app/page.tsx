import DateForm from "./components/DateForm";

export default function Home() {
  return (
    <main className="container mx-auto pt-3">
      <div className="flex justify-center flex-col px-6">
        <p className="text-[rgba(6,111,222,.8)] text-sm font-semibold flex justify-center">2/9</p>
        <div className={`
          mt-3 bg-[#dee5f9] w-full h-1 relative
          before:bg-[#00a3ff] before:absolute
          before:left-[-8px] before:top-[-6.5px]
          before:h-4 before:w-4 before:rounded-full
          after:bg-[#dee5f9] after:absolute
          after:right-[-8px] after:top-[-6.5px]
          after:h-4 after:w-4 after:rounded-full`
        }>
          <div className="bg-[#00a3ff] w-[22.22%] h-[6px] rounded-[8px] mt-[-1.5px]"></div>
        </div>
      </div>
      <div className="flex justify-center flex-col px-6 py-8">
        <div className="text-xl font-medium text-center">
          What’s your date of birth?
        </div>
        <div className="text-lg font-normal text-center my-6">
          Your birth date reveals your core personality traits, needs and desires.
        </div>
        <DateForm />
      </div>
    </main>
  );
}
